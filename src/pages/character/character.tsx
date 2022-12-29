import { useEffect } from "react";
import { useSelector } from "react-redux";
import GroupCharactersComponent from "../../components/group-character/group-character-component";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterModel } from "../../shared/model/Character";
import { HTTP_METHOD } from "../../shared/utils/const";
import { RootState } from "../../store/store";

const CharacterPage = () => {
  const { data, isPending, execute } = useFetchAPI();
  const characterEntity: ICharacterModel[] = data;

  const page: number = useSelector(
    (state: RootState) => state.paginationSlice.page
  );

  useEffect(() => {
    execute(HTTP_METHOD.GET, `/character/findAllFromMarvelApi?page=${page}`);
  }, [page]);

  return !isPending && characterEntity.length > 0 ? (
    <GroupCharactersComponent characterEntity={characterEntity} />
  ) : (
    <>LOADING...</>
  );
};

export default CharacterPage;
