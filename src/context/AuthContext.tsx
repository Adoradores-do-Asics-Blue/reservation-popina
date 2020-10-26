import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    // eslint-disable-next-line no-console
    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Ricardo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
