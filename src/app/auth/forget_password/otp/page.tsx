import { Text } from 'rizzui';
import AuthWrapperTwo from '../../auth-wrapper-two';
import { Suspense } from 'react';
import OtpForm from './otp-form';
import Link from "next/link";
import { routes } from "@/config/routes";

export default function OtpPage() {
  return (
    <AuthWrapperTwo title="Verify It's You">
      <div className="max-w-md xl:pe-7">
        <Text className="-mt-1 mb-9 text-center text-[15px] leading-[1.85] text-gray-700 md:text-base md:!leading-loose lg:text-start xl:-mt-3">
          We’ve sent an OTP to +201276585137.
        </Text>
        <Suspense>
          <OtpForm />
        </Suspense>
        <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
          Wrong Number?{" "}
          <Link
            href={routes.auth.forgetPassword}
            className="font-semibold text-[#2B90EC] transition-colors hover:text-blue"
          >
            Go Back
          </Link>
        </Text>
      </div>
    </AuthWrapperTwo>
  );
}
