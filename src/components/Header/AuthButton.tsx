import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import LogoutBtn from "./LogoutBtn";
import { DarkModeToggle } from "../utility/DarkModeToggle";

export default function AuthButton(): JSX.Element {
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated
  );

  return isAuthenticated ? (
    <div className="hidden md:flex gap-4">
      <LogoutBtn />
      <DarkModeToggle />
    </div>
  ) : (
    <div className="flex gap-4">
      <Button variant="outline" asChild>
        <Link href={`/account/login`}>Login</Link>
      </Button>
      <DarkModeToggle />
    </div>
  );
}
