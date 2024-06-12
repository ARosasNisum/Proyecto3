import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import {InputText} from "primereact/inputtext";

import './LoginPage.css'
import {useAuth} from "../../hooks/useAuth.tsx";
import {Toast} from "primereact/toast";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth()
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (auth.login(username, password)) {
            navigate('/pages/entity')
        } else if (username === '') {
            toast.current?.show({
                severity: 'warn',
                summary: 'Campo usuário não pode estar vazio',
                detail: 'Campo usuário não pode estar vazio',
                life: 3000
            });
        } else if (password === '') {
            toast.current?.show({
                severity: 'warn',
                summary: 'Campo senha não pode estar vazio',
                detail: 'Campo senha não pode estar vazio',
                life: 3000
            });
        } else {
            toast.current?.show({
                severity: 'warn',
                summary: 'Usuário não encontrado!',
                detail: 'Usuário não encontrado!',
                life: 3000
            });
        }
    };

    return (
        <div className="login-container">
            <Toast ref={toast}/>
            <form id="login" onSubmit={handleSubmit}>
                <div className="card">
                    <h2>Login</h2>
                    <div className="p-field">
                        <label htmlFor="username">Username</label>
                        <InputText
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                            className="p-inputtext-lg"
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password</label>
                        <Password
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            feedback={false}
                            toggleMask
                            className="p-inputtext-lg"
                        />
                    </div>
                    <div className="p-field">
                        <Button label="Login" icon="pi pi-check" className="w-full" severity={"success"}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;