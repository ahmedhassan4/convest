'use client';

import React from "react";
import StatusField from "@/shared/controlled-table-not-modified/status-field";
import { Badge, Button, Text } from "rizzui";
import { PiTrashDuotone } from "react-icons/pi";

const statusOptions = [
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
  {
    value: "refunded",
    label: "Refunded",
  },
];

type FilterElementProps = {
  isFiltered: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
};

export default function FilterElement({
  isFiltered,
  filters,
  updateFilter,
  handleReset,
}: FilterElementProps) {
  return (
    <div className="flex w-full flex-col gap-3 @[29rem]:flex-row items-center @[42rem]:w-auto">
      <div className="flex items-center gap-3 w-full @[29rem]:w-auto">
        <Text className="font-semibold text-lg capitalize text-gray-700 flex-shrink-0">
          Sort By
        </Text>
        <StatusField
          dropdownClassName="!z-10"
          className="w-full min-w-[145px] sm:w-auto"
          options={statusOptions}
          value={filters["status"]}
          onChange={(value: string) => {
            updateFilter("status", value);
          }}
          getOptionValue={(option: { value: any }) => option.value}
          getOptionDisplayValue={(option: { value: any }) =>
            renderOptionDisplayValue(option.value as string)
          }
          displayValue={(selected: string) =>
            renderOptionDisplayValue(selected)
          }
        />
        {isFiltered ? (
          <Button
            size="sm"
            onClick={() => {
              handleReset();
            }}
            className="h-8 bg-gray-200/70 "
            variant="flat"
          >
            <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function renderOptionDisplayValue(value: string) {
  switch (value.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-orange-dark">
            {value}
          </Text>
        </div>
      );
    case 'completed':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-green-dark">
            {value}
          </Text>
        </div>
      );
    case 'cancelled':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-red-dark">
            {value}
          </Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium capitalize text-gray-600">
            {value}
          </Text>
        </div>
      );
  }
}
