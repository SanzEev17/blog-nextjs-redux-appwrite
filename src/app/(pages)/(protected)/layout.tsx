"use client"
import React, { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated
  );
  if (!isAuthenticated){
    router.replace("/account/login")
    return null
  }
  return children
}
