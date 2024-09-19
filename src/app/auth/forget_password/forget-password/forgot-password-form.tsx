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

const initialValues = {
  email: "",
};

export default function ForgetPasswordForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const [reset, setReset] = useState({});

  const router = useRouter();

  const { mutateAsync, isPending } = useSendEmail({
    navigate: true
  });

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: (data: ForgetPasswordSchema) =>
  //     axios.post(
  //       `${process.env.NEXT_PUBLIC_API_ENDPOINT}${endPoitsUrl.auth.forgetPassword.email}`, data
  //     ),
  //   onSuccess: async (res: any) => {
  //     console.log('res', res);
  //     toast.success(
  //       <Text>
  //         Reset link sent to this email:{' '}
  //         <Text as="b" className="font-semibold">
  //           {res?.data?.email}
  //         </Text>
  //       </Text>
  //     );
  //     setReset(initialValues);

  //     router.push(routes.auth.otp + `?email=${res?.data?.email}`);
  //   },
  //   onError: (err: any) => {
  //     toast.error(err?.response?.data?.message);
  //   },
  // });
  const onSubmit: SubmitHandler<ForgetPasswordSchema> = data => {
    console.log("Forgot password form data->", data);
    mutateAsync(data);
  };

  return (
    <>
    <div className="flex items-center mb-[28px]">
        <h1 className="mr-4 text-[#666666] font-[500] text-[14px] leading-[20px]">Happens to the best of us</h1>
        <div className="flex-grow border-t border-gray-200"></div>
    </div>
      <Form<ForgetPasswordSchema>
        validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}>
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
           <Input
              type="number"
              size={isMedium ? "lg" : "xl"}
              label="Phone Number"
              prefix={<span className="text-[#2B90EC] text-[16px] font-medium mr-2">+20</span>}
              placeholder="Enter your number"
              className="[&>label>span]:font-medium"
              rounded="pill"
            />
            <Button
              className="border-primary-light w-full border-2 text-base font-medium text-white"
              type="submit"
              size={isMedium ? "lg" : "xl"}
              rounded="pill"
              isLoading={isPending}>
              Reset
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Already have an account?{" "}
        <Link
          href={routes.auth.login}
          className="font-semibold text-[#2B90EC] transition-colors hover:text-blue">
          Back to Login
        </Link>
      </Text>
    </>
  );
}
