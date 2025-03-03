import { ScrollRestoration } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            {children}
        </>
    );
};

export default ProtectedRoute;
