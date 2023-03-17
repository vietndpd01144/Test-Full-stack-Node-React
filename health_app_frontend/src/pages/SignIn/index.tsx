import { LoginForm } from "@components/form";
import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[30rem]">
        <LoginForm />
        <div className="mt-6 h-0.5 bg-gray-300" />
        <p className=" text-center mt-8 font-bold">Don't have an account?</p>
        <Link
          to="/auth/sign-up"
          className={
            "h-12 border border-black py-[7px] px-[31px] rounded-full w-full mb-5 flex items-center justify-center mt-5"
          }
        >
          <span
            className={
              "text-[0.875rem] font-CircularSp font-bold uppercase pl-2.5"
            }
          >
            Sign up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
