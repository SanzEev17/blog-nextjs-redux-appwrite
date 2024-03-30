import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import LogoutBtn from "./LogoutBtn";

export default function AuthButton(): JSX.Element {
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const authButtons = [
    { name: "Login", slug: "/account/login" },
    { name: "Signup", slug: "/account/signup" },
  ];

  return isAuthenticated ? (
    <div className="hidden md:block">
      <LogoutBtn />
    </div>
  ) : (
    <div className="flex gap-3">
      {authButtons.map((item, index) => (
        <Button key={index} variant="outline" asChild>
          <Link href={item.slug}>{item.name}</Link>
        </Button>
      ))}
    </div>
  );
}
