"use client";

import { useForm } from "react-hook-form";
import { PiXBold } from "react-icons/pi";
import { ActionIcon, Button, Input, Text, Title } from "rizzui";
import { useModal } from "@/shared/modal-views/use-modal";
import { GoMail } from "react-icons/go";

type SupplierFormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
};

const AddSupplierForm = () => {
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierFormValues>();

  const onSubmit = (data: SupplierFormValues) => {
    // Handle form submission here, e.g., send to API or display in console
    console.log(data);
    closeModal();
  };

  return (
    <div className="m-auto p-4 md:px-7 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Title as="h3" className="text-lg">
            Add Supplier
          </Title>
        </div>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                label="First Name"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                error={errors.firstName?.message}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Last Name"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
                error={errors.lastName?.message}
              />
            </div>
          </div>

          <div>
            <Input
              label="Company Name"
              placeholder="Enter your company name"
              {...register("companyName", {
                required: "Company name is required",
              })}
              error={errors.companyName?.message}
            />
          </div>
          <div>
            <Input
              label="Email Address"
              type="email"
              prefix={<GoMail size={20} className="text-gray-500" />}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              error={errors.email?.message}
            />
          </div>

          <div>
            <Input
              label="Phone Number"
              prefix={<Text className="text-gray-500">+20</Text>}
              placeholder="Enter your phone number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              error={errors.phoneNumber?.message}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <Button
            variant="outline"
            className="w-full @xl:w-auto dark:hover:border-gray-400"
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
          <Button type="submit" className="hover:gray-700 w-full @xl:w-auto">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierForm;
