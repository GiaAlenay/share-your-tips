import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

export const Protected = ({ children }: Props) => {
  const { user, loading } = useAuth();
  if (loading) return <h1> loading...</h1>;
  if (!user) return <Navigate to="/" />;
  return <>{children}</>;
};
