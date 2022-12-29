import { useEffect } from "react";
import PaginationLink from "../../components/pagination/pagination";
import withAuth from "../../shared/hoc/authenticated";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterModel } from "../../shared/model/Character";
import { HTTP_METHOD } from "../../shared/utils/const";
import CharacterPage from "../character/character";

const HomePage = () => {
  const { data, isPending, execute } = useFetchAPI();
  const characterEntity: ICharacterModel[] = data;

  useEffect(() => {
    execute(HTTP_METHOD.GET, "/character/findAllFromMarvelApi");
  }, []);

  return !isPending && characterEntity.length > 0 ? (
    <>
      <CharacterPage characterEntity={characterEntity} />
      <PaginationLink />
    </>
  ) : (
    <>LOADING...</>
  );
};

export default withAuth(HomePage);
