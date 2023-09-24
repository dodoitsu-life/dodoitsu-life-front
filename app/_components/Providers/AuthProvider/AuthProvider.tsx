"use client";
import Cookies from "js-cookie";
import React, { createContext, useState, useEffect } from "react";
import { User } from "@/src/types/User";
import { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser === "undefined") {
      localStorage.removeItem("user");
      return;
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logIn = async (userData: User) => {
    await localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logOut = () => {
    fetch("/api/auth/logout", {
      method: "GET",
      credentials: "include",
    });
    localStorage.removeItem("user");
    setUser(null);

    Cookies.remove("auth_token");
    Cookies.remove("refresh_token");
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
