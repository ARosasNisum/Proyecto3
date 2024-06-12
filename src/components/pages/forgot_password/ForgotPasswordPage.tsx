import {InputText} from "primereact/inputtext";
import {Message} from "primereact/message";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const ForgotPasswordPage = () => {
    const [userIdentifier, setUserIdentifier] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleResetPassword = () => {
        if (userIdentifier.trim() === '') {
            setErrorMessage('Please enter your username or email address.');
            return;
        }

        // Simular envío de la solicitud de restablecimiento
        console.log('Reset password for:', userIdentifier);
        // Restablecer el formulario después de enviar
        setUserIdentifier('');
        setErrorMessage(null);

        // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
        alert('Password reset link sent. Check your email.');
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{height: '100vh'}}>
            <div className="p-card">
                <h1>Forgot Password?</h1>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="userIdentifier">Username or email:</label>
                        <InputText
                            id="userIdentifier"
                            value={userIdentifier}
                            onChange={(e) => setUserIdentifier(e.target.value)}
                            className={errorMessage ? 'p-invalid' : ''}
                        />
                        {errorMessage && (
                            <Message severity="error" text={errorMessage}/>
                        )}
                    </div>
                    <div className="p-field p-d-flex p-jc-between">
                        <Button
                            label="Reset password"
                            onClick={handleResetPassword}
                            className="p-button-primary"
                        />
                        <Button
                            label="Cancel"
                            onClick={() => navigate('/login')}
                            className="p-button-secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;