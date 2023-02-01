import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  const handleCreAcc = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/register");
  };
  return (
    <div>
      Landing
      <button onClick={handleCreAcc}>Create Account</button>
    </div>
  );
};
