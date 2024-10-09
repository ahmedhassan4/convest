"use client";

import { HeaderCell } from "@/shared/table";
import { Text, Checkbox, ActionIcon, Tooltip } from "rizzui";
import cn from "@/utils/class-names";
import { suppliersData } from "@/data/suppliers-data";
import PencilIcon from "@/componnets/icons/pencil";
import EyeIcon from "@/componnets/icons/eye";
import DeletePopover from "@/shared/delete-popover";
import DateCell from "@/ui/date-cell";
import MasterCardIcon from "@/componnets/icons/mastercard";
import VisaIcon from "@/componnets/icons/visa";
import { PiCopyDuotone } from "react-icons/pi";
import { Hand } from "@phosphor-icons/react";

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  handleCopy: (text: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  handleCopy,
}: Columns) => [
  {
    title: <HeaderCell title="ID" className="ps-4" />,
    onHeaderCell: () => onHeaderCellClick("id"),
    dataIndex: "id",
    key: "id",
    width: 80,
    render: (id: string) => (
      <div className="flex items-center gap-2">
        <Text className="ps-4">#{id}</Text>
        <PiCopyDuotone
          className="cursor-pointer"
          onClick={() => {
            handleCopy(`#${id}`); // Copy the ID to clipboard
          }}
          title="Copy ID"
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Supplier name" />,
    dataIndex: "name",
    key: "name",
    width: 150,
    render: (_: any, row: any) => (
      <div>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {row.name}
        </Text>
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="company"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "company"
        }
      />
    ),
    dataIndex: "company",
    key: "company",
    onHeaderCell: () => onHeaderCellClick("company"),
    width: 200,
    render: (company: string) => (
      <span className="whitespace-nowrap font-semibold">{company}</span>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Email address"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "email"
        }
      />
    ),
    dataIndex: "email",
    key: "email",
    onHeaderCell: () => onHeaderCellClick("email"),
    width: 120,
    render: (email: string) => (
      <span className="whitespace-nowrap font-semibold">{email}</span>
    ),
  },
  {
    title: <HeaderCell title="Phone number" />,
    dataIndex: "phone",
    key: "phone",
    width: 150,
    render: (_: any, row: any) => (
      <div>
        <Text className="whitespace-nowrap font-semibold">+2 {row.phone}</Text>
      </div>
    ),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: "action",
    key: "action",
    width: 100,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Tooltip
          size="sm"
          content={"Edit Customer"}
          placement="top"
          color="invert"
        >
          <ActionIcon
            as="span"
            size="sm"
            variant="outline"
            aria-label={"Edit Customer"}
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <PencilIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <DeletePopover
          title={`Delete the transaction`}
          description={`Are you sure you want to delete this #{row.id} transaction?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
