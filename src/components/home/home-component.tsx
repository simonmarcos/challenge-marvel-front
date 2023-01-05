import { useTranslation } from "react-i18next";
import "./styles.scss";

const HomeComponent = () => {
  const { t: translation } = useTranslation("home");

  return <div className="container">{translation("app.home.title")}</div>;
};

export default HomeComponent;
