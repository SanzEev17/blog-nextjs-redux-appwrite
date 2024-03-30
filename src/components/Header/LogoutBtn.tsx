import React from "react";
import DialogButton from "../utility/DialogButton";
import authService from "@/appwrite/authService";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import { Button } from "../ui/button";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  /**
   * Handles the logout action.
   */
  const handleLogout = async (): Promise<void> => {
    await authService.logout().then(() => dispatch(logout()));
  };
  return (
    <>
    <div className="md:hidden">
        <Button variant={"outline"} onClick={()=>handleLogout()}>Logout</Button>
    </div>
      <DialogButton className="hidden md:block" buttonVariant="outline" onClick={() => handleLogout()}>
        Logout
      </DialogButton>
    </>
  );
}
