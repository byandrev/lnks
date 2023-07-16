import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import Loading from "../components/common/loading";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const { user, isFinishLoading } = useUser();
  const location = useLocation();

  if (!isFinishLoading) return <Loading />;

  if (isFinishLoading && !user) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return <div>{children}</div>;
};

export default AuthRoute;
