import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeComponent from "../../components/home/home-component";
import withAuth from "../../shared/hoc/authenticated";
import { setAuthentication } from "../../store/slices/authenticationSlice";
import { AppDispatch, RootState } from "../../store/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticationSlice.isAuthenticated
  );

  useEffect(() => {
    dispatch(setAuthentication());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return <HomeComponent />;
};

export default withAuth(HomePage);
