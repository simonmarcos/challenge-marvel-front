import { useEffect } from "react";
import { useSelector } from "react-redux";
import ManageCharactersComponent from "../../components/manage-character/manage-character-component";
import SnipperComponent from "../../components/spinner/spiner";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterMarvelModel } from "../../shared/model/Character";
import { HTTP_METHOD } from "../../shared/utils/const";
import { RootState } from "../../store/store";

const CharacterPage = () => {
  const { data, isPending, execute, cleanInitialValues } = useFetchAPI();
  const characterEntity: ICharacterMarvelModel[] = data;

  const page: number = useSelector(
    (state: RootState) => state.paginationSlice.page
  );

  useEffect(() => {
    execute(HTTP_METHOD.get, `/character/findAllFromMarvelApi?page=${page}`);
    return () => {
      cleanInitialValues();
    };
  }, [page]);

  return !isPending ? (
    <ManageCharactersComponent characterEntity={characterEntity} />
  ) : (
    <SnipperComponent />
  );
};

export default CharacterPage;
