import AuthWrapperTwo from '../auth-wrapper-two';
import SignInForm from './sign-in-form';


export default function SignIn() {
  return (
    <AuthWrapperTwo title="Log In to Continue">
      <SignInForm />
    </AuthWrapperTwo>
  );
}
