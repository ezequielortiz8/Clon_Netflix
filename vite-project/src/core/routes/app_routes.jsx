import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";
import PrivateRoute from "../auth/components/private_route";
import PublicRoute from "../auth/components/public_route";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <PublicRoute>
                <LoginView />
            </PublicRoute>,
  },
  {
    path: "*",
    element: <h2>No se encontró la página, intentá de nuevo.</h2>
  }
]);
