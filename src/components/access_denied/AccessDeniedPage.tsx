import {Card} from "primereact/card";
import {FC} from "react";

interface AccessDeniedProps {
    errorMessage?: string;
}

const AccessDeniedPage: FC<AccessDeniedProps> = ({errorMessage}) => {
    return (
        <div className="section">
            <Card>
                <h1>Access Denied</h1>
                <p>You are not authorized to perform the requested action.</p>
                {errorMessage && <p>{errorMessage}</p>}
            </Card>
        </div>
    );
};

export default AccessDeniedPage;