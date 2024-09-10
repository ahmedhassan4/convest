import type { Schema } from "zod";
import { useEffect } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";

type ServerErrors<T> = {
  [Property in keyof T]: string;
};

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: Schema<TFormValues>;
  fieldErrors?: any[] | null;
  formError?: string | string[] | null | any;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?: any | null;
  className?: string;
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  children,
  useFormProps,
  validationSchema,
  fieldErrors,
  formError,
  resetValues,
  className,
  ...formProps
}: FormProps<TFormValues>) => {
  const path = usePathname();
  const methods = useForm<TFormValues>({
    ...useFormProps,
    ...(validationSchema && { resolver: zodResolver(validationSchema) }),
  });

  useEffect(() => {
    // If there is any resetValues provided, reset the form with them
    if (resetValues && Object.keys(resetValues).length > 0) {
      methods.reset(resetValues);
    }
  }, [resetValues]);


  // Clear local storage data on successful form submission
  const handleSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log("handle submit")
    onSubmit(data);
  };

  return (
    <form
      noValidate
      onSubmit={methods.handleSubmit(handleSubmit)}
      {...formProps}
      className={className}>
      {children(methods)}
    </form>
  );
};
