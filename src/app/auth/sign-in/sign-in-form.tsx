"use client";

import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { Input, Button, Text, Title } from "rizzui";
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
      const userInfo = JSON.stringify(data);
      setCookie("userInfo", userInfo, siteConfig.cookieOptions);
      setCookie("token", JSON.stringify(token), siteConfig.cookieOptions);
      router.push("/dashboard");
      setIsSuccess(true);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    // mutateAsync(data);
    console.log("Signed in phone number:", data.phone);
    router.push(routes.auth.authLogin);
  };

  return (
    <>
      <div className="">
        <OrSeparation
          title="LET'S GET STARTED!"
          className="my-7"
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
              prefix={<Text className="text-[#2B90EC] font-medium">+20</Text>}
              label="Phone Number"
              placeholder="Enter your phone number"
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Button
              className="border-primary-light w-full border-2 text-base font-bold text-primary-foreground"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              isLoading={isPending || isSuccess}
            >
              Sign in
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
