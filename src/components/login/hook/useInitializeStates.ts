import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ILoggedInModel } from "../../../shared/model/LoggedIn";
import { IUserModel } from "../../../shared/model/User";
import { getEntitiesByUser } from "../../../store/slices/characterSlice";
import { getEntityByEmail } from "../../../store/slices/userSlice";
import { AppDispatch, RootState } from "../../../store/store";

const useInitializeState = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const userEntity: IUserModel = useSelector(
    (state: RootState) => state.userSlice.user
  );

  const isSuccessUserSaved = useSelector(
    (state: RootState) => state.userSlice.success
  );

  useEffect(() => {
    if (isSuccessUserSaved) {
      dispatch(getEntitiesByUser({ userId: userEntity.id! }));
      navigate("/home");
    }
  }, [isSuccessUserSaved]);

  const execute = () => {
    const loggedIn: ILoggedInModel = JSON.parse(
      window.localStorage.getItem("loggedIn")!
    );
    dispatch(getEntityByEmail(loggedIn?.email!));
  };

  return execute;
};

export default useInitializeState;
