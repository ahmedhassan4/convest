'use client';

import { PinCode, Button, Text } from 'rizzui';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/ui/Form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { endPoitsUrl } from '@/config/endPointsUrl';
import { toast } from 'react-toastify';
import { useRouter } from 'next-nprogress-bar';
import { routes } from '@/config/routes';
import useHandleFilter from '@/hooks/use-handle-filter';
import useSendEmail from '../forget-password/useSendEmail';

type FormValues = {
  otp: string;
};

export default function OtpForm() {
  const router = useRouter()
  const { email } = useHandleFilter();
  const { mutateAsync: resendOtp, isPending: isResendOtp } = useSendEmail({
    navigate: false
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormValues) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}${endPoitsUrl.auth.forgetPassword.otp}`, {
          email: email,
          otp: data.otp
        }
      ),
    onSuccess: async (res: any) => {
      console.log('res', res);
      toast.success(
        <Text>
          Reset link sent to this email:{' '}
          <Text as="b" className="font-semibold">
            {res?.data?.email}
          </Text>
        </Text>
      );
      router.push(routes.auth.newPassword + `?token=${res?.data?.token}`);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    mutateAsync(data);
  };
  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ setValue }) => (
        <div className="space-y-10">
          <PinCode
            variant="outline"
            setValue={(value) => setValue("otp", String(value))}
            size="lg"
            className="lg:justify-start "
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Button
              className="w-full text-base font-medium"
              type="button"
              size="xl"
              rounded="pill"
              variant="outline"
              isLoading={isResendOtp}
              onClick={() => resendOtp({ email: email })}
            >
              RESEND
            </Button>
            <Button
              className="w-full text-base font-medium"
              type="submit"
              size="xl"
              rounded="pill"
              isLoading={isPending}
            >
              VERIFY
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
}
