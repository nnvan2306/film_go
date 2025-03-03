import { Todo, About, Contact } from "./index";
export const routes = [
    {
        name: "Todo",
        path: "/todo",
        element: <Todo />,
        requiresAuth: false,
    },
    {
        name: "About",
        path: "/about",
        element: <About />,
        requiresAuth: false,
    },
    {
        name: "Contact",
        path: "/contact",
        element: <Contact />,
        requiresAuth: false,
    },
];

export const routesMap = (() => {
    return routes.reduce((acc, route) => {
        acc[route.name] = route.path;
        return acc;
    }, {});
})();
