"use client";

import { Input, Text, Button } from "rizzui";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { routes } from "@/config/routes";
import Link from "next/link";

import { useMedia } from "react-use";
import { Form } from "@/ui/Form";
import {
  forgetPasswordSchema,
  ForgetPasswordSchema,
} from "./forget-password.schema";
import { useRouter } from "next-nprogress-bar";
import useSendEmail from "./useSendEmail";
import OrSeparation from "../../or-separation";

const initialValues = {
  phoneNumber: "",
};

export default function ForgetPasswordForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const [reset, setReset] = useState({});

  const router = useRouter();

  const { mutateAsync, isPending } = useSendEmail({
    navigate: true,
  });

  const onSubmit: SubmitHandler<ForgetPasswordSchema> = (data) => {
    console.log("Forgot password form data->", data);
    // mutateAsync(data);
    router.push(routes.auth.otp + `?phoneNumber=${data?.phoneNumber}`);
  };

  return (
    <>
      <div className="">
        <OrSeparation
          title="Happens to the best of us"
          className="my-7"
          isCenter={false}
        />
        {/* Other components */}
      </div>

      <Form<ForgetPasswordSchema>
        validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="text"
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
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <Text className="text-red-500">{errors.phoneNumber.message}</Text>
            )}
            <Button
              className="border-primary-light w-full border-2 text-base font-medium text-white"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              isLoading={isPending}
            >
              Reset
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Already have an account?{" "}
        <Link
          href={routes.auth.login}
          className="font-semibold text-[#2B90EC] transition-colors hover:text-blue"
        >
          Back to Login
        </Link>
      </Text>
    </>
  );
}
