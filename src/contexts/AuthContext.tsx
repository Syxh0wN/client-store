import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iClientCreate,
  iExtendUser,
  iRegistrationData,
  iUser,
  iUserLogin,
} from "../interfaces/user";
import { api } from "../services/api";

export const AuthContext = createContext({} as iExtendUser);

type iProvProps = {
  children?: React.ReactNode;
};

interface ApiResponse {
  message: string;
}

export const AuthProvider = ({ children }: iProvProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [users, setUsers] = useState<iUser[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [menuSelect, setmenuSelect] = useState("");
  const [selectedUser, setSelectedUser] = useState<iUser | null>(null);
  const [usersFilter, setUsersFilter] = useState<iUser[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@clientStore:__token");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profiler");
          setUser(data);

          if (data.isAdmin) {
            const { data: usersResponse } = await api.get("/user", {
              headers: { Authorization: `Bearer ${token}` },
            });

            setUsers(usersResponse);
          }
          navigate("/dashboard", { replace: true });
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@clientStore:__token");
        }
      }
      setLoading(false);
      setmenuSelect("users");
      setSelectedUser(null);
    };
    loadUser();
  }, [navigate]);

  const putRegister = async (data: iRegistrationData) => {
    try {
      await api.post("/user", { ...data, isAdmin: false });
      navigate("/login", { replace: true });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError);

      const errorMessage =
        axiosError.response?.data &&
        typeof axiosError.response.data === "object" &&
        "message" in axiosError.response.data
          ? (axiosError.response.data as ApiResponse).message
          : "Unknown error";

      toast.error(`Error: ${errorMessage}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const putLogin = async (data: iUserLogin) => {
    try {
      const {
        data: { token },
      } = await api.post("/login", data);

      const { data: userResponse } = await api.get("/profiler", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(userResponse);

      if (userResponse.isAdmin) {
        const { data: usersResponse } = await api.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsers(usersResponse);
      }

      localStorage.setItem("@clientStore:__token", token);
      navigate("/dashboard");

      toast.success("Login realizado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      localStorage.removeItem("@clientStore:__token");

      const axiosError = error as AxiosError;
      console.error(axiosError);

      const errorMessage =
        axiosError.response?.data &&
        typeof axiosError.response.data === "object" &&
        "message" in axiosError.response.data
          ? (axiosError.response.data as ApiResponse).message
          : "Unknown error";

      toast.error(`Error: ${errorMessage}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const putClient = async (data: iClientCreate) => {
    try {
      const token = localStorage.getItem("@clientStore:__token");

      await api.post("/client", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (token) {
        try {
          const { data: usersResponse } = await api.get("/user", {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUsers(usersResponse);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@clientStore:__token");
        }
      }

      toast.success("Client cadastrado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError);

      const errorMessage =
        axiosError.response?.data &&
        typeof axiosError.response.data === "object" &&
        "message" in axiosError.response.data
          ? (axiosError.response.data as ApiResponse).message
          : "Unknown error";

      toast.error(`Error: ${errorMessage}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setSelectedUser,
        selectedUser,
        putLogin,
        putClient,
        user,
        users,
        loading,
        putRegister,
        menuSelect,
        setmenuSelect,
        usersFilter,
        setUsersFilter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
