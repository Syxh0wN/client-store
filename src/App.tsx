import { AuthProvider } from "./contexts/AuthContext";
import { MainRoutes } from "./routes/routes";
import Global from "./styles/all/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <Global />
    <AuthProvider>
      <ToastContainer />
      <MainRoutes />
    </AuthProvider>
  </>
);
