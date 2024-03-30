"use client";
import React from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.authReducer.isAuthenticated);

  if (isAuthenticated) {
    router.replace("/");
    return null;
  }

  return (
    <section className="h-svh md:h-screen flex justify-center items-center">
      <Card className="w-96 bg-primary-foreground">{children}</Card>
    </section>
  );
}
