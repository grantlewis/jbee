import React from "react"
import { useAuth } from "../hooks/useAuth"

export const AuthContext = React.createContext({
  user: null,
  signIn: async (input) => {},
  signOut: async () => {},
  deleteUser: async () => {},
});

export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}