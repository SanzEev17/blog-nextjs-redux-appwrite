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
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "@/components/utility/FormInput";

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { register, watch, handleSubmit } = useForm<FormInputs>();

  const createUser: SubmitHandler<FormInputs> = async (data) => {
    setError("");
    try {
      setLoading(true);
      const newUser = await authService.createUser(data);
      if (newUser) {
        router.replace("/login");
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
            <FormInput
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: true,
              })}
            />
            <FormInput
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
            <FormInput
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <FormInput
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
