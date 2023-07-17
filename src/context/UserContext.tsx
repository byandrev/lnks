import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import User, { UserContextType, UserLogin } from "../@types/User";
import { useMutation } from "react-query";
import { login as loginService, getUserData } from "../services/Auth";
import ResponseAPI from "../@types/ReponseAPI";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType>({});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [isFinishLoading, setIsFinishLoading] = useState<boolean>(false);
  let errMessage: string | null = null;

  const getUserMutation = useMutation(
    (token: string): Promise<ResponseAPI> => {
      setLoading(true);
      return getUserData(token);
    },
    {
      onSuccess: (data: ResponseAPI) => {
        if (data.body) {
          const userResponse: User = {
            name: data.body.username as string,
            email: data.body.email as string,
            id: data.body.id as string,
          };

          setUser(userResponse);
          localStorage.setItem("user", JSON.stringify(userResponse));
        }
      },
      onSettled: () => {
        setLoading(false);
        setIsFinishLoading(true);
      },
    }
  );

  const mutation = useMutation(
    (data: UserLogin): Promise<ResponseAPI> => {
      setLoading(true);
      return loginService(data.email, data.password);
    },
    {
      onSuccess: (data: ResponseAPI) => {
        if (data.body) {
          const tokenRes = data.body.access_token as string;

          setUser({ id: "", name: "", email: "" });
          setToken(tokenRes);

          localStorage.setItem("token", tokenRes);
          getUserMutation.mutate(tokenRes);
        }
      },
      onSettled: () => setLoading(false),
    }
  );

  const { error } = mutation;

  if (error instanceof Error) {
    errMessage = error.message;
  }

  const login = useCallback(
    (user: UserLogin) => {
      mutation.mutate(user);
    },
    [mutation]
  );

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("token");
    if (tokenLocalStorage && !user) {
      getUserMutation.mutate(tokenLocalStorage);
    } else {
      setIsFinishLoading(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const value = useMemo(() => {
    return {
      user,
      token,
      loading,
      isFinishLoading,
      error: errMessage,
      login,
      logout,
    };
  }, [user, token, loading, isFinishLoading, errMessage, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
