import React, { useState, createContext, useMemo, useCallback } from "react";
import User, { UserContextType, UserLogin } from "../@types/User";
import { useMutation } from "react-query";
import { login as loginService } from "../services/Auth";
import ResponseAPI from "../@types/ReponseAPI";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType>({});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  let errMessage: string | null = null;

  const mutation = useMutation(
    (data: UserLogin): Promise<ResponseAPI> =>
      loginService(data.email, data.password),
    {
      onSuccess: (data: ResponseAPI) => {
        if (data.body) {
          setUser({ id: "", name: "", email: data.body.username as string });
          setToken(data.body.token as string);
        }
      },
    }
  );

  const { isLoading, error } = mutation;

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
  }, []);

  const value = useMemo(() => {
    return {
      user,
      token,
      loading: isLoading || false,
      error: errMessage,
      login,
      logout,
    };
  }, [user, token, isLoading, errMessage, login, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
