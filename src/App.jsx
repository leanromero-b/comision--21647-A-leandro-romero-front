import { RouterProvider } from "react-router-dom";
import { rutas } from "./Router";

import DefaultLayout from "./layouts/DefaultLayout.jsx";
import { AuthProvider } from "./context/authcontext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <DefaultLayout>
        <RouterProvider router={rutas} />
      </DefaultLayout>
    </AuthProvider>
  );
};

export default App;
