import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function useUser() {
  const { user, token, loading, isFinishLoading, error, login, logout } =
    useContext(UserContext);

  return {
    user,
    token,
    loading,
    isFinishLoading,
    error,
    login,
    logout,
  };
}

export default useUser;
