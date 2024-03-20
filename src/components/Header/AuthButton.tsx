import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import authService from "@/appwrite/authService";
import DialogButton from "../utility/DialogButton";

/**
 * Renders a button for either logging out or redirecting to login/signup pages based on the user's authentication status.
 * @returns {JSX.Element} The rendered component.
 */
export default function AuthButton(): JSX.Element {
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const authButtons = [
    { name: "Login", slug: "/account/login" },
    { name: "Signup", slug: "/account/signup" },
  ];
  const dispatch = useDispatch();

  /**
   * Handles the logout action.
   */
  const handleLogout = (): void => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <div className="flex gap-3">
      {isAuthenticated ? (
        <DialogButton
          buttonVariant="outline"
          onClick={() => handleLogout()}
        >
          Logout
        </DialogButton>
      ) : (
        authButtons.map((item, index) => (
          <Button key={index} variant="outline" asChild>
            <Link href={item.slug}>{item.name}</Link>
          </Button>
        ))
      )}
    </div>
  );
}
