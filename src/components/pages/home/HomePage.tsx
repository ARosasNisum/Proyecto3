import {Button} from "primereact/button";
import {useAuth} from "../../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        auth.logout()
        navigate('/login')
    }

    return (
        <div>
            <p>Olá {auth.username}!</p>
            <Button label="Sair" outlined onClick={logout}/>
        </div>
    );
};

export default HomePage;