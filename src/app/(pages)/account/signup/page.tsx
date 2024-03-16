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
import { SubmitHandler, useForm } from "react-hook-form";

type formInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, watch, handleSubmit } = useForm<formInputs>();
  const createUser: SubmitHandler<formInputs> = async (data) => {
    setError("");
    try {
      setLoading(true);
      const newUser = await authService.createUser(data);
      if (newUser) {
        router.push("/login");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(createUser)}>
        <CardHeader>
          <CardTitle className="title-text">Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value: string) =>
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
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (value: string) => {
                  if (watch("password") !== value) {
                    return "Your passwords do not match!!!";
                  }
                },
              })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="submit">
            {loading ? "Loading..." : "Submit"}
          </Button>
          <div>{error}</div>
        </CardFooter>
      </form>
    </>
  );
}
