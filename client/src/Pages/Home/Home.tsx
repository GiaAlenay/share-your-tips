import { useAuth } from "../../authentification/provider/authProvider";
import { useSelector } from "react-redux";
import { ArticleState, IArticle } from "../../redux/interace";
import { useEffect } from "react";

export const Home = () => {
  const { logout, loading } = useAuth();
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles
  );

  useEffect(() => {
    console.log(articles);
  }, []);

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
