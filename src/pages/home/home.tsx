import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeComponent from "../../components/home/home-component";
import withAuth from "../../shared/hoc/authenticated";
import useFetchAPI from "../../shared/hooks/useFetchApi";
import { ICharacterModel } from "../../shared/model/Character";
import { HTTP_METHOD } from "../../shared/utils/const";
import { RootState } from "../../store/store";

const HomePage = () => {
  const { data, isPending, execute } = useFetchAPI();
  const characterEntity: ICharacterModel[] = data;

  const page: number = useSelector(
    (state: RootState) => state.paginationSlice.page
  );

  useEffect(() => {
    execute(HTTP_METHOD.GET, `/character/findAllFromMarvelApi?page=${page}`);
  }, [page]);

  return !isPending && characterEntity.length > 0 ? (
    <HomeComponent characterEntity={characterEntity} />
  ) : (
    <>LOADING...</>
  );
};

export default withAuth(HomePage);
