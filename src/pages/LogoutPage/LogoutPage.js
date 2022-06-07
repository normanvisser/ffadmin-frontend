import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/thunks";

const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser);
  }, [dispatch]);
  return <p>Logged out</p>;
};

export default LogoutPage;
