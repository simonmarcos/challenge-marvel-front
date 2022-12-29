import { useEffect } from "react";
import HomeComponent from "../../components/home/home-component";
import withAuth from "../../shared/hoc/authenticated";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterModel } from "../../shared/model/Character";
import { HTTP_METHOD } from "../../shared/utils/const";

const HomePage = () => {
  const { data, isPending, execute } = useFetchAPI();
  const characterEntity: ICharacterModel[] = data;

  useEffect(() => {
    execute(HTTP_METHOD.GET, "/character/findAllFromMarvelApi");
  }, []);

  return !isPending && characterEntity.length > 0 ? (
    <HomeComponent characterEntity={characterEntity} />
  ) : (
    <>LOADING...</>
  );
};

export default withAuth(HomePage);
