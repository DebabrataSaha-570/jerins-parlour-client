import React, { createContext } from 'react';
import useFirebse from '../Hooks/useFirebase';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const allContexts = useFirebse()

    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;