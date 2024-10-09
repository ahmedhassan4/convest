"use client";

import Link from "next/link";
import React from "react";
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
import OrSeparation from "../or-separation";

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
            phone: "0123456789", // Include dummy phone value in request data
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
      const userInfo = JSON.stringify(restData);
      const newToken = JSON.stringify(token);
      setCookie("userInfo", userInfo, siteConfig.cookieOptions);
      setCookie("token", newToken, siteConfig.cookieOptions);
      // router.push("/dashboard");
      setIsSuccess(true);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    // mutateAsync(data);
    router.push(routes.dashboard.orderDetails("0025895"));
  };

  return (
    <>
      <div className="">
        <OrSeparation
          title="LET'S GET STARTED!"
          className="my-7 "
          isCenter={false}
        />
      </div>

      <Form<LoginSchema>
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: "onChange",
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="number"
              size={isMedium ? "lg" : "xl"}
              label="Phone Number"
              disabled={true} // Disable the input field
              value="0123456789" // Dummy value
              prefix={
                <span className="text-[#2B90EC] text-[16px] font-medium mr-2">
                  +20
                </span>
              }
              className="[&>label>span]:font-medium"
              rounded="pill"
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
              <Link
                href={routes.auth.forgetPassword}
                className="h-auto p-0 leading-[24px] font-semibold text-[#2B90EC] transition-colors text-[14px] hover:text-gray-500 hover:no-underline"
              >
                Forget Password?
              </Link>
            </div>
            <Button
              className="border-primary-light w-full border-2 text-base font-bold text-primary-foreground"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              isLoading={isPending || isSuccess}
            >
              Continue
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Don&apos;t have an account?{" "}
        <Link
          href={"#"}
          className="font-semibold text-[#2B90EC] transition-colors hover:text-blue"
        >
          Sign Up
        </Link>
      </Text>
    </>
  );
}

