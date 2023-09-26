"use client";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { useQuery } from "react-query";
import { User } from "@/src/types/User";
import { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useQuery(
    "me",
    async () => {
      localStorage.removeItem("user");
      const res = await fetch("/api/auth/me", {
        credentials: "include",
        cache: "no-cache",
      });
      if (!res.ok) {
        throw new Error("ログインに失敗しました");
      }

      const resJson = await res.json();
      return resJson.data;
    },
    {
      onSuccess: (data) => {
        logIn(data);
      },
      onError: () => {
        alert("ログインに失敗しました。\nログインし直してください。");
      },
    }
  );

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
