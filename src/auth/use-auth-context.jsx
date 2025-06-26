import { useSelector } from "../hooks/use-selector";

const useAuthContext = () => {
  return useSelector((state) => ({
    user: state.App.user,
    isAuth: state.App.isAuth,
  }));
};

export default useAuthContext;
