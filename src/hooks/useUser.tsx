import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function useUser() {
  const { user, loading, error, login, logout } = useContext(UserContext);

  return {
    user,
    loading,
    error,
    login,
    logout,
  };
}

export default useUser;
