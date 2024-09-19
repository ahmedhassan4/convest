"use client";

import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { Input, Button, Password, Checkbox, Text, Title } from "rizzui";
import { routes } from "@/config/routes";
import { useMedia } from "react-use";
import { Form } from "@/ui/Form";
import { loginSchema, LoginSchema } from "./login.schema";
import { Slide, toast } from "react-toastify";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { endPoitsUrl } from "@/config/endPointsUrl";
import { setCookie } from "cookies-next";
import { siteConfig } from "@/config/site.config";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

const WelcomeMessage = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Title as="h6" className="text-center">
        Welcome {name}
      </Title>
      <Text as="p" className="text-center">
        You have successfully logged in.
      </Text>
    </div>
  );
};

export default function SignInForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const isMedium = useMedia("(max-width: 1200px)", false);
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: LoginSchema) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}${endPoitsUrl.auth.login}`,
        {
          fcmToken: process.env.NEXT_PUBLIC_FCM_TOKEN,
          login_data: {
            fcmToken: process.env.NEXT_PUBLIC_FCM_TOKEN,
            ...data,
          },
        }
      ),
    onSuccess: async (res: any) => {
      toast(<WelcomeMessage name={res?.data?.data?.first_name} />, {
        position: "top-center",
        autoClose: 5000,
        transition: Slide,
        hideProgressBar: true,
      });
      const { token, data } = res?.data;
      const { notificationsSettings, ...restData } = data;
      console.log("res >>>>", res);
      const userInfo = JSON.stringify(restData);
      const newToken = JSON.stringify(token);
      setCookie("userInfo", userInfo, siteConfig.cookieOptions);
      setCookie("token", newToken, siteConfig.cookieOptions);
      router.push("/dashboard");
      setIsSuccess(true);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = data => {
    mutateAsync(data);
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: "onChange",
        }}>
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="email"
              size={isMedium ? "lg" : "xl"}
              label="Email"
              placeholder="Enter your email"
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register("email")}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-2">
              <Checkbox
                {...register("rememberMe")}
                label="Remember Me"
                variant="flat"
                className="[&>label>span]:font-medium"
              />
              <Link
                href={routes.auth.forgetPassword}
                className="h-auto p-0 text-sm font-semibold text-blue underline transition-colors hover:text-gray-900 hover:no-underline">
                Forget Password?
              </Link>
            </div>
            <Button
              className="border-primary-light w-full border-2 text-base font-bold text-primary-foreground"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              isLoading={isPending || isSuccess}>
              Sign in
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Don’t have an account?{" "}
        <Link
          href={routes.auth.signUp}
          className="font-semibold text-gray-700 transition-colors hover:text-blue">
          Create Account
        </Link>
      </Text>
    </>
  );
}
