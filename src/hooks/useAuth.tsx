import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface AuthContextType {
    isAuthenticated: boolean
    username: string | null
    roles: string[] | null
    login: (username: string, password: string) => boolean
    logout: () => void
    hasRole: (role: string) => boolean
}

interface IProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        return storedAuth === 'true';
    });
    const [username, setUsername] = useState<string | null>(() => {
        return localStorage.getItem('username');
    });
    const [roles, setRoles] = useState<string[]>(() => {
        const storedRoles = localStorage.getItem('roles');
        return storedRoles ? JSON.parse(storedRoles) : [];
    });

    useEffect(() => {
        localStorage.setItem('isAuthenticated', String(isAuthenticated));
        localStorage.setItem('username', username || '');
        localStorage.setItem('roles', JSON.stringify(roles));
    }, [isAuthenticated, username, roles]);

    const login = (username: string, password: string): boolean => {
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
            setUsername(username);
            setRoles(['ROLE_ADMIN']);
            return true;
        } else if (username === 'test' && password === 'test') {
            setIsAuthenticated(true);
            setUsername(username);
            setRoles(['ROLE_USER']);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername(null);
        setRoles([]);
        localStorage.clear();
    };

    const hasRole = (role: string): boolean => {
        return roles.includes(role);
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, username, roles, login, logout, hasRole}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
};

export {AuthProvider, useAuth}