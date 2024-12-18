import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
