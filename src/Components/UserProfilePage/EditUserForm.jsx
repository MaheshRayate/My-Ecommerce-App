// import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useQueryClient } from "@tanstack/react-query";

import CircularProgress from "@mui/material/CircularProgress";
import useEditUser from "../../Custom Hooks/useEditUser";
import { toast } from "react-toastify";

const EditUserForm = ({ editUserFormOpen, setEditUserFormOpen }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const editUserMutation = useEditUser();

  const onSubmit = async (data) => {
    editUserMutation.mutate(data);
    setEditUserFormOpen(false);
    document.body.style.overflow = "auto";

    reset();
  };

  return (
    <section
      className={`${
        editUserFormOpen ? "translate-y-0" : "translate-y-full"
      } fixed bottom-0 left-1/2 -translate-x-1/2 transform
     transition-transform duration-1000 ease-linear
     lg:w-6/10 w-full z-[100] mx-auto border border-gray-300 bg-white rounded-md `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" shadow-xl px-4 py-3 my-3 w-full  lg:mx-auto"
      >
        <button
          className="cursor-pointer relative top-4"
          onClick={() => {
            document.body.style.overflow = "auto";
            setEditUserFormOpen(false);
          }}
        >
          <IoMdClose className="size-8" />
        </button>

        <h1 className="text-center text-3xl font-nata-sans font-semibold">
          Edit Profile
        </h1>
        {/* register your input into the hook by invoking the "register" function */}
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
          <label htmlFor="phone" className=" font-nata-sans">
            Phone
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            id="email"
            placeholder="Enter your Phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="my-2">
          <label htmlFor="dob" className=" font-nata-sans">
            DOB
          </label>
          <input
            className="block border px-2 border-gray-300 w-full"
            id="dob"
            type="date"
            placeholder="Enter your DOB"
            {...register("dob", { required: true })}
          />
          {errors.dob && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        <div className="my-2">
          <label className="font-nata-sans">Gender</label>

          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="Male"
                {...register("gender", { required: "Gender is required" })}
              />
              Male
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="Female"
                {...register("gender", { required: "Gender is required" })}
              />
              Female
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="Other"
                {...register("gender", { required: "Gender is required" })}
              />
              Other
            </label>
          </div>

          {errors.gender && (
            <span className="text-sm text-red-500">
              {errors.gender.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={editUserMutation?.isPending}
          className="border mt-4 w-full text-primary border-primary font-nata-sans font-semibold flex items-center justify-center"
        >
          {editUserMutation?.isPending ? (
            <CircularProgress size="24px" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </section>
  );
};

export default EditUserForm;
