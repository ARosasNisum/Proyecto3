import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const SimplePage = () => {
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);

    const handleRedirect = () => {
        toast.current?.show({
            severity: 'info',
            summary: 'Redirecting',
            detail: 'Redirecting to login page...',
            life: 2000
        });
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{height: '100vh'}}>
            <Toast ref={toast}/>
            <div className="p-text-center">
                <p>Simple Page</p>
                <Button label="Redirect" onClick={handleRedirect}/>
            </div>
        </div>
    );
};

export default SimplePage;