import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./configs/AppRouter.tsx";
import {PrimeReactProvider} from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css'; // Puedes usar cupertino o cualquier tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './assets/features.css'
import {AuthProvider} from "./hooks/useAuth.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <AuthProvider>
                <AppRouter/>
            </AuthProvider>
        </PrimeReactProvider>
    </React.StrictMode>,
)
