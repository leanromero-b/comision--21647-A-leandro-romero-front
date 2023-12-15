const guardarDatos = (datos) => {
  const datosTexto = JSON.stringify(datos);

  localStorage.setItem("usuario", datosTexto);
};

const guardarToken = (token) => {
  localStorage.setItem("token", token);
};

const datosGuardados = () => {
  const datos = localStorage.getItem("usuario");

  return JSON.parse(datos);
};

const tokenGuardados = () => {
  return localStorage.getItem("token");
};

const limpiarLocalStorage = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
};

export { guardarDatos, datosGuardados, guardarToken, tokenGuardados, limpiarLocalStorage };
