// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // Routes,
} from "react-router-dom";
// import LayoutAdmin from "./layouts/admin/LayoutAdmin";
// import Dashboard from "./pages/admin/Dashboard";
// import CinemaList from "./pages/admin/Cinemas/CinemaList";
// import CinemaAdd from "./pages/admin/Cinemas/CinemaAdd";
// import CinemaEdit from "./pages/admin/Cinemas/CinemaEdit";
// import './App.css'
import ProtectedRoute from "./routes/ProtectedRoute";
import { routes } from "./routes/routes";

const router = createBrowserRouter(
    routes.map((route) => ({
        ...route,
        element: <ProtectedRoute {...route}>{route.element}</ProtectedRoute>,
    }))
);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
        // <>
        //     {/* router admin */}
        //     <Routes>
        //         <Route path="/admin" element={<LayoutAdmin />}>
        //             <Route index element={<Dashboard />} />
        //             <Route path="cinemas" element={<CinemaList />} />
        //             <Route path="cinemas/add" element={<CinemaAdd />} />
        //             <Route path="cinemas/edit/:id" element={<CinemaEdit />} />
        //         </Route>
        //     </Routes>

        //     {/* router user */}
        //     <Routes>
        //         <Route></Route>
        //     </Routes>
        // </>
    );
}

export default App;
