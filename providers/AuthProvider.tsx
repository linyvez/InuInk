"use client";

import { createContext, useContext, useState } from "react";

type User = {
  login: string;
} | null;

interface AuthContextType {
  user: User;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: User;
}) {
  const [user, setUser] = useState(initialUser);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
}
