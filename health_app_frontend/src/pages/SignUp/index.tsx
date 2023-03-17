import RegisterForm from "@components/form/SignUpForm";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[30rem]">
        <div className="flex justify-center items-center "></div>
        <RegisterForm />
        <div className="mt-6 h-0.5 bg-gray-300" />

        <p className=" text-center mt-8 font-bold">Already have an account?</p>
        <Link
          to="/auth/sign-in"
          className={
            "h-12 border border-black py-[7px] px-[31px] rounded-full w-full mb-5 flex items-center justify-center mt-5"
          }
        >
          <span
            className={
              "text-[0.875rem] font-CircularSp font-bold uppercase pl-2.5"
            }
          >
            Sign in
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
