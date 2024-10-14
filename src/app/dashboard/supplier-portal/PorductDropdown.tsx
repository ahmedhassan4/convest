"use client";

import React, { useState } from "react";
import { Select, type SelectProps } from "rizzui";
import { Text } from "rizzui";
import cn from "@/utils/class-names";

interface StatusOption {
  value: string;
  label: string;
  category: string;
  image?: string;
}

const statusOptions: StatusOption[] = [
  {
    value: "publish",
    label: "Stylish Denim Jacket",
    category: "Jacket",
    image:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/8.webp",
  },
  {
    value: "pending",
    label: "Cool Graphic Tee",
    category: "T-Shirt",
    image:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/9.webp",
  },
  {
    value: "draft",
    label: "Comfy Sweatshirt",
    category: "Sweatshirt",
    image:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/6.webp",
  },
];

interface StatusFieldProps extends SelectProps<StatusOption> {
  placeholder?: string;
  dropdownClassName?: string;
}

const StatusField: React.FC<StatusFieldProps> = ({
  placeholder = "Select status",
  dropdownClassName,
  ...props
}) => {
  return (
    <Select
      inPortal={false}
      placeholder={placeholder}
      selectClassName="h-9 w-full min-w-[150px] max-w-[500px]" // Full width and responsive sizing
      dropdownClassName={cn(
        "p-1.5 !z-50 max-h-[130px] overflow-y-auto",
        dropdownClassName
      )}
      optionClassName="h-9"
      {...props}
    />
  );
};

const PorductDropdown = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    console.log("Selected Status:", value);
  };

  return (
    <StatusField
      options={statusOptions}
      value={selectedStatus}
      className="w-full mx-auto"
      onChange={handleStatusChange}
      getOptionValue={(option) => option.value}
      getOptionDisplayValue={(option) => renderOptionDisplayValue(option)}
      displayValue={(selected) => {
        const selectedOption = statusOptions.find(
          (option) => option.value === selected
        );
        return selectedOption ? renderOptionDisplayValue(selectedOption) : null;
      }}
    />
  );
};

function renderOptionDisplayValue(option: StatusOption) {
  return (
    <div className="flex items-center">
      <img
        src={option.image}
        alt={option.label}
        className="w-8 h-8 mr-2 rounded-full"
      />
      <Text className="font-medium capitalize">{option.label}</Text>
      <Text className="ml-2 text-sm text-gray-500">{option.category}</Text>
    </div>
  );
}

export default PorductDropdown;
