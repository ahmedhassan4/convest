"use client";

import React, { useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn, FieldError, FieldHelperText, FieldClearButton } from "rizzui";

const labelClasses = {
  size: {
    sm: "text-xs mb-1",
    md: "text-sm mb-1.5",
    lg: "text-sm mb-1.5",
    xl: "text-base mb-2",
  },
};

const inputClasses = {
  base: "block peer !w-full focus:outline-none transition duration-200 disabled:!bg-gray-100 disabled:!text-gray-500 disabled:placeholder:!text-gray-500 disabled:!cursor-not-allowed disabled:!border-muted",
  error:
    "!border-red not-read-only:hover:enabled:!border-red not-read-only:focus:enabled:!border-red not-read-only:focus:!ring-red",
  size: {
    sm: "py-1 !text-xs !h-8 !leading-[32px]",
    md: "py-2 !text-sm !h-10 !leading-[40px]",
    lg: "py-2 !text-base !h-12 !leading-[48px]",
    xl: "py-2.5 !text-base !h-14 !leading-[56px]",
  },
  rounded: {
    none: "!rounded-none",
    sm: "!rounded-sm",
    md: "!rounded-md",
    lg: "!rounded-lg",
    pill: "!rounded-full",
  },
  variant: {
    flat: "!border-0 focus:ring-2 placeholder:!opacity-90 read-only:focus:!ring-0 focus:!bg-transparent !bg-primary-lighter/70 focus:!ring-primary/30 !text-primary-dark",
    outline:
      "!bg-transparent focus:ring-[0.6px] !border !border-muted read-only:!border-muted read-only:focus:!ring-0 placeholder:!text-gray-500 hover:!border-primary focus:!border-primary focus:!ring-primary",
    text: "!border-0 focus:ring-2 !bg-transparent hover:!text-primary-dark focus:!ring-primary/30 !text-primary",
  },
};

export interface PhoneNumberProps {
  /** Set field label */
  label?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** The size of the component. */
  size?: keyof typeof inputClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input field */
  inputClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Add custom classes into the component wrapper for extra style like spacing */
  className?: string;
  /** Callback to return the phone number and dial code */
  onPhoneNumberChange?: (parsedNumber: any) => void;
}

export const PhoneNumber = ({
  size = "md",
  rounded = "md",
  variant = "outline",
  label,
  helperText,
  error,
  clearable,
  onClear,
  labelClassName,
  inputClassName,
  helperClassName,
  errorClassName,
  className,
  onPhoneNumberChange,
  ...props
}: PhoneNumberProps) => {
  const [value, setValue] = useState<string | undefined>("");

  const handleClear = (event: React.MouseEvent) => {
    setValue("");
    if (onClear) onClear(event); // Ensure we pass the event to onClear
  };

  return (
    <div className={cn("rizzui-phone-number", className)}>
      {label ? (
        <label className={cn("block", labelClasses.size[size], labelClassName)}>
          {label}
        </label>
      ) : null}

      <div className="group/phone-number relative">
        <PhoneInput
          international
          defaultCountry="EG"
          value={value}
          onChange={value => {
            setValue(value);
            if (value) {
              const parsedNumber = parsePhoneNumber(value);
              onPhoneNumberChange?.(parsedNumber);
            }
          }}
          className={cn(
            inputClasses.base,
            inputClasses.size[size],
            inputClasses.rounded[rounded],
            inputClasses.variant[variant],
            error && inputClasses.error,
            inputClassName
          )}
          {...props}
        />

        {clearable && value ? (
          <FieldClearButton
            size={size}
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        ) : null}
      </div>

      {!error && helperText ? (
        <FieldHelperText size={size} className={helperClassName}>
          {helperText}
        </FieldHelperText>
      ) : null}

      {error ? (
        <FieldError size={size} error={error} className={errorClassName} />
      ) : null}
    </div>
  );
};
