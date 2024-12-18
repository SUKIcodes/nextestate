import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <SignIn />
    </div>
  );
};

export default SignInPage;
