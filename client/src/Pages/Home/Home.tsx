import { useAuth } from "../../authentification/provider/authProvider";

export const Home = () => {
  const { logout, loading } = useAuth();
  const handlelogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log((e as Error).message);
    }
  };
  if (loading) {
    return <>loading..</>;
  }
  return (
    <div>
      Home
      <button onClick={handlelogout}>log out</button>
    </div>
  );
};
