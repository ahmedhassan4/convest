import { useMutation } from "@tanstack/react-query";
import { ForgetPasswordSchema } from "./forget-password.schema";
import axios from "axios";
import { endPoitsUrl } from "@/config/endPointsUrl";
import { toast } from "react-toastify";
import { Text } from "rizzui";
import { useRouter } from "next-nprogress-bar";
import { routes } from "@/config/routes";

const useSendEmail = ({navigate = true}: {navigate?: boolean}) => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: ForgetPasswordSchema) =>
      axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}${endPoitsUrl.auth.forgetPassword.email}`,
        data
      ),
    onSuccess: async (res: any, data) => {
      console.log("res", res);
      toast.success(
        <Text>
          Reset link sent to this email:{" "}
          <Text as="b" className="font-semibold">
            {res?.data?.message}
          </Text>
        </Text>
      );
      if(navigate){
        router.push(routes.auth.otp + `?email=${data?.email}`);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { mutateAsync, isPending };
};

export default useSendEmail;

