"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "@/redux/features/authSlice";
import Header from "@/components/Header/Header";
import authService from "@/appwrite/authService";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          const { name, email } = userData;
          dispatch(login({ name, email }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return null
  }

  return (
    <>
      <Header />
      <main className="px-8 lg:px-48">{children}</main>
    </>
  );
}
