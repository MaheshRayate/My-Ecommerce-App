import { useForm } from "react-hook-form";
import logo1 from "./../../assets/logo1.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import useLogin from "../../Custom Hooks/useLogin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const loginMutation = useLogin();

  const onSubmit = async (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-300 shadow-xl px-4 py-5 lg:w-4/10 lg:mx-auto mx-4 lg:my-30 my-30"
      >
        <img src={logo1} alt="" className="block mx-auto" />
        <h1 className="text-center text-3xl font-nata-sans font-semibold">
          Welcome Back
        </h1>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="my-2">
          <label htmlFor="email" className=" font-nata-sans">
            Email
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            id="email"
            placeholder="Enter your Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="my-2">
          <label htmlFor="password" className=" font-nata-sans">
            Password
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            placeholder="Enter your Password"
            id="password"
            {...register("password", {
              required: "This is a required Field",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loginMutation?.isPending}
          className="border py-1 mt-4 w-full text-primary border-primary font-nata-sans font-semibold flex items-center justify-center"
        >
          {loginMutation?.isPending ? (
            <CircularProgress size="24px" />
          ) : (
            "Submit"
          )}
        </button>

        <p className="text-center text-md font-nata-sans my-2">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold">
            Create Now
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
