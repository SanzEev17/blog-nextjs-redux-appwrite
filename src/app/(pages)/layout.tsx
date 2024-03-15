"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "@/redux/features/authSlice";
import Header from "@/components/Header/Header";
import authService from "@/appwrite/authService";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        const { name, email } = userData;
        dispatch(login({ name, email }));
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main className="px-8 lg:px-48">{children}</main>
    </>
  );
}
