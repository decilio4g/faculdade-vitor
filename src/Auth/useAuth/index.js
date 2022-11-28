import React, { useContext } from 'react';

import { fakeAuthProvider } from '../index'
import { useNavigate } from 'react-router-dom'


export const AuthContext = React.createContext(null);

export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const navigate = useNavigate()

    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

