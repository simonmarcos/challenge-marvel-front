import withAuth from "../../shared/hoc/authenticated";
import CharacterPage from "../character/character";

const HomePage = () => {
  return <CharacterPage />;
};

export default withAuth(HomePage);
