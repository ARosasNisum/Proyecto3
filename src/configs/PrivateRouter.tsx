import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.tsx";
import {FC} from "react";

interface PrivateRouteProps {
    requiredRoles: string[];
}

const PrivateRouter: FC<PrivateRouteProps> = ({requiredRoles}) => {
    const {isAuthenticated, hasRole} = useAuth()
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    if (!requiredRoles.some(role => hasRole(role))) {
        return <Navigate to="/access-denied"/>
    }

    return <Outlet/>

};

export default PrivateRouter;