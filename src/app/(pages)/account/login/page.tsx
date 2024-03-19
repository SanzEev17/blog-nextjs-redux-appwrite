"use client";
import React, { useState } from "react";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import authService from "@/appwrite/authService";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/authSlice";
import { AppDispatch } from "@/redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "@/components/utility/FormInput";

interface FormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm<FormInputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const loginUser: SubmitHandler<FormInputs> = async (data) => {
    setError("");
    try {
      setLoading(true);
      const userSession = await authService.loginUser(data);
      if (userSession) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          const { $id, name, email } = userData;
          dispatch(login({ $id, name, email }));
        }
        router.replace("/");
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
            <FormInput
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
            <FormInput
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
