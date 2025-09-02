import { useForm } from "react-hook-form";
import logo1 from "./../../assets/logo1.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import useRegister from "../../Custom Hooks/useRegister";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const registerMutation = useRegister();

  const onSubmit = async (data) => {
    registerMutation.mutate(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-300 shadow-xl px-4 py-5 lg:w-4/10 lg:mx-auto mx-4  my-10"
      >
        <img src={logo1} alt="" className="block mx-auto" />
        <h1 className="text-center text-3xl font-nata-sans font-semibold">
          We're Happy to Onboard You
        </h1>

        <div className="my-2">
          <label htmlFor="firstName" className=" font-nata-sans">
            First Name
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            id="firstName"
            placeholder="Enter your First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="my-2">
          <label htmlFor="lastName" className=" font-nata-sans">
            Last Name
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            id="lastName"
            placeholder="Enter your Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

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

          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="my-2">
          <label htmlFor="passwordConfirm" className=" font-nata-sans">
            Confirm Password
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            placeholder="Confirm Your Passwords"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This is a required Field",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />

          {errors.passwordConfirm && (
            <span className="text-sm text-red-500">
              {errors.passwordConfirm.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={registerMutation?.isPending}
          className="border mt-4 w-full text-primary border-primary font-nata-sans font-semibold flex items-center justify-center py-1"
        >
          {registerMutation?.isPending ? (
            <CircularProgress size="24px" />
          ) : (
            "Submit"
          )}
        </button>

        <p className="text-center text-md font-nata-sans my-2">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold">
            Create Now
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
