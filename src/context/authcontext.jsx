import { useState, useContext, createContext } from "react";
import {
  guardarDatos,
  guardarToken,
    tokenGuardados,
    datosGuardados,
  limpiarLocalStorage,
} from "../utils/login.js";

const AuthContext = createContext();

const AuthProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  const [usuario, setUsuario] = useState(datosGuardados());
  const [token, setToken] = useState(tokenGuardados());

  const login = (datos, token) => {
    guardarDatos(datos);
    guardarToken(token);
    setUsuario(datos);
    setToken(token);
  };

  const logout = () => {
    limpiarLocalStorage(); 
    setUsuario(null);
    setToken(null)
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

    const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
