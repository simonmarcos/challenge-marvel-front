import { useSelector } from "react-redux";
import useFetchAPI from "../../../shared/hooks/useFetchApi";
import { IUserModel } from "../../../shared/model/User";
import { HTTP_METHOD } from "../../../shared/utils/const";
import { RootState } from "../../../store/store";

const useDeleteCharacter = (props: { marvelId: number }) => {
  const { isSuccess, execute } = useFetchAPI();

  const userEntity: IUserModel = useSelector(
    (state: RootState) => state.userSlice.user
  );

  const deleteCharacter = () => {
    execute(
      HTTP_METHOD.delete,
      `/character/${userEntity.id}/delete?marvelId=${props.marvelId}`
    );
  };

  return { isSuccess, deleteCharacter };
};

export default useDeleteCharacter;
