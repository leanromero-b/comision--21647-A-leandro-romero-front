import { RouterProvider } from "react-router-dom";
import { rutas } from "./Router";

import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
  return (
    <DefaultLayout>
      <RouterProvider router={rutas} />
    </DefaultLayout>
  );
}

export default App;
