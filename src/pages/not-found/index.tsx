import { useRouteError } from "react-router-dom";
import NotFoundComponent from "../../components/not-found";

const NotFoundPage = () => {
  const error = useRouteError();

  return <NotFoundComponent error={error} />;
};

export default NotFoundPage;
