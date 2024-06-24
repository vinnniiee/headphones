import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setToast } from "../slices/toastSlice";

const AdminRoute = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  if (userInfo && userInfo.isAdmin) {
    return <Outlet />;
  } else {
    dispatch(
      setToast({
        message: "Please log in with an Admin Account.",
        type: "error",
      })
    );
    return <Navigate to="/" />;
  }
};
export default AdminRoute;
