"use client";
import React, { useState } from "react";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import authService from "@/appwrite/authService";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/authSlice";
import { AppDispatch } from "@/redux/store";
import { SubmitHandler, useForm } from "react-hook-form";

type formInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm<formInputs>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const loginUser: SubmitHandler<formInputs> = async (data) => {
    setError("");
    try {
      setLoading(true);
      const userSession = await authService.loginUser(data);
      if (userSession) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          const { name, email } = userData;
          dispatch(login({ name, email }));
        }
        router.push("/");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)}>
        <CardHeader>
          <CardTitle className="title-text">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                      value
                    ) || "Email address must be a valid address",
                },
              })}
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="submit">
            {loading ? "Loading..." : "Login"}
          </Button>
          <div>{error}</div>
        </CardFooter>
      </form>
    </>
  );
}
