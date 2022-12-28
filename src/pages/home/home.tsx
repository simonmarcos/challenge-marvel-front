import HomeComponent from "../../components/home/home-component";
import withAuth from "../../shared/hoc/authenticated";

const HomePage = () => {
  return <HomeComponent />;
};

export default withAuth(HomePage);
