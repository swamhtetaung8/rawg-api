import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import { paths } from "./paths";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: paths.HOME,
            element: <Home />
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;