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
import OrSeparation from "../or-separation";

export default function SignUpForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const [reset, setReset] = useState({});
  const router = useRouter();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SignUpSchema) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}${endPoitsUrl.auth.signUp}`,
        data
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

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log("sign up form data", data);
    mutateAsync(data);
  };

  return (
    <>
      <div className="">
        <OrSeparation
          title="LET'S GET STARTED!"
          className="my-7 "
          isCenter={false}
        />
        {/* Other components */}
      </div>

      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="number"
              size={isMedium ? "lg" : "xl"}
              label="Phone Number"
              prefix={
                <span className="text-[#2B90EC] text-[16px] font-medium mr-2">
                  +20
                </span>
              }
              placeholder="Enter your number"
              className="[&>label>span]:font-medium"
              rounded="pill"
              {...register("code")}
              error={errors.code?.message}
            />
            <Button
              className="border-primary-light w-full border-2 text-base font-medium text-white"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              isLoading={isPending}
              rounded="pill"
            >
              Continue
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Don&apos;t have an account?{" "}
        <Link
          href={routes.auth.login}
          className="font-semibold text-[#2B90EC] transition-colors hover:text-blue"
        >
          Sign Up
        </Link>
      </Text>
    </>
  );
}
