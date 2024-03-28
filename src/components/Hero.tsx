"use client"
import React from "react";
import { useAppSelector } from "@/redux/store";

export default function Hero() {
  const username = useAppSelector((state) => state.authReducer.userData?.name);
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-6">
      <div className="pt-8 text-center text-3xl md:text-[3.5rem] leading-normal tracking-wide">
        <h1 className="font-bold">Hello {username ? username : "Stranger"}!</h1>
        <h1>Discover your stories and creative ideas</h1>
      </div>
    </section>
  );
}