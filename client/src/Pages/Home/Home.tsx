import { useAuth } from "../../authentification/provider/authProvider";
import { NavBar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
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
      <NavBar />
      <button onClick={handlelogout}>log out</button>
      <Footer />
    </div>
  );
};
