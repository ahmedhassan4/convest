"use client";

import Link from "next/link";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Password, Checkbox, Button, Input, Text } from "rizzui";
import { routes } from "@/config/routes";
import { useMedia } from "react-use";
import { Form } from "@/ui/Form";
import { signUpSchema, SignUpSchema } from "./signup.schema";
import { toast } from "react-toastify";
import { endPoitsUrl } from "@/config/endPointsUrl";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next-nprogress-bar";

export default function SignUpForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const [reset, setReset] = useState({});
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SignUpSchema) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}${endPoitsUrl.auth.signUp}`, data
      ),
    onSuccess: async (res: any) => {
      toast.success("Account created successfully");
      setReset({});
      router.push(routes.auth.login);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  const onSubmit: SubmitHandler<SignUpSchema> = data => {
    console.log("sign up form data", data);
    mutateAsync(data);
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}>
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="text"
              size={isMedium ? "lg" : "xl"}
              label="Login Code"
              placeholder="Institution Code (e.g FV15A)"
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register("code")}
              error={errors.code?.message}
            />
            <Password
              label="Create Password"
              placeholder="Enter your password"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register("password")}
              error={errors.password?.message}
            />
            <Password
              label="Confirm Password"
              placeholder="Confirm Password"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
            {/* <div className="flex items-start pb-2 text-gray-700">
              <Checkbox {...register('isAgreed')} variant="flat" />
              <p className="-mt-0.5 ps-2 text-sm leading-relaxed">
                By signing up you have agreed to our{' '}
                <Link
                  href="/"
                  className="font-semibold text-blue transition-colors hover:text-gray-1000"
                >
                  Terms
                </Link>{' '}
                &{' '}
                <Link
                  href="/"
                  className="font-semibold text-blue transition-colors hover:text-gray-1000"
                >
                  Privacy Policy
                </Link>
              </p>
            </div> */}
            <Button
              className="border-primary-light w-full border-2 text-base font-medium text-white"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              isLoading={isPending}
              rounded="pill">
              Create Account
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Already have an account?{" "}
        <Link
          href={routes.auth.login}
          className="font-semibold text-gray-700 transition-colors hover:text-blue">
          Sign In
        </Link>
      </Text>
    </>
  );
}
