"use client";

import Cookies from "js-cookie";
import React, { createContext, useState, useEffect } from "react";
import { User } from "@/src/types/User";
import { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logOut = () => {
    fetch("/api/auth/logout", { method: "GET", credentials: "include" });
    localStorage.removeItem("user");
    setUser(null);
    Cookies.remove("auth_token");
    Cookies.remove("refresh_token");
  };

  const refreshToken = async () => {
    if (!Cookies.get("refresh_token")) return;

    try {
      const res = await fetch("/api/auth/token-refresh", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        const { access_token, refresh_token } = await res.json();
        Cookies.set("auth_token", access_token);
        Cookies.set("refresh_token", refresh_token);
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logOut();
    }
  };

  const getMe = async () => {
    if (!localStorage.getItem("user")) return;

    localStorage.removeItem("user");
    const res = await fetch("/api/auth/me", {
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("ログインに失敗しました");
    }

    const resJson = await res.json();
    logIn(resJson.data);
  };

  useEffect(() => {
    const intervalId = setInterval(refreshToken, 1000 * 60 * 30);
    const getMeTimeoutId = setTimeout(getMe, 500);
    const tokenRefreshTimeoutId = setTimeout(refreshToken, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(getMeTimeoutId);
      clearTimeout(tokenRefreshTimeoutId);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
