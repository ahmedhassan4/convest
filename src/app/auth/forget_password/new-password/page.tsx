import { Suspense } from "react";
import AuthWrapperTwo from "../../auth-wrapper-two";
import NewPasswordForm from "./new-password-form";

export default function NewPassword() {
  return (
    <AuthWrapperTwo title="new password">
      <Suspense>
        <NewPasswordForm />
      </Suspense>
    </AuthWrapperTwo>
  );
}
