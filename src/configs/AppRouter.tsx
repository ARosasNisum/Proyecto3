import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LayoutPage from "../components/layout/layout/LayoutPage.tsx";
import LoginPage from "../components/login/LoginPage.tsx";
import EntityPage from "../components/pages/entity/EntityPage.tsx";
import PrivateRouter from "./PrivateRouter.tsx";
import PagePage from "../components/pages/page/PagePage.tsx";
import HomePage from "../components/pages/home/HomePage.tsx";
import AccessDeniedPage from "../components/access_denied/AccessDeniedPage.tsx";
import SimplePage from "../components/pages/simple_page/SimplePage.tsx";
import ForgotPasswordPage from "../components/pages/forgot_password/ForgotPasswordPage.tsx";
import CreateAccountPage from "../components/pages/create_account/CreateAccountPage.tsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'access-denied'} element={<AccessDeniedPage/>}/>
                <Route path={"pages"} element={<LayoutPage/>}>
                    <Route element={<PrivateRouter requiredRoles={['ROLE_USER', 'ROLE_ADMIN']}/>}>
                        <Route index path={"entity"} element={<EntityPage/>}/>
                        <Route path={"page"} element={<PagePage/>}/>
                    </Route>
                    <Route element={<PrivateRouter requiredRoles={['ROLE_ADMIN']}/>}>
                        <Route path={"index"} element={<HomePage/>}/>
                    </Route>
                    <Route path={"simple-page"} element={<SimplePage/>}/>
                    <Route path={"forgot-password"} element={<ForgotPasswordPage/>}/>
                    <Route path={"create-account"} element={<CreateAccountPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;