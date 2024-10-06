"use client";

import { HeaderCell } from "@/shared/table";
import { Text, Checkbox, ActionIcon, Tooltip } from "rizzui";
import cn from "@/utils/class-names";
import { StatusType } from "@/data/transaction-history";
import PencilIcon from "@/componnets/icons/pencil";
import EyeIcon from "@/componnets/icons/eye";
import AvatarCard from "@/ui/avatar-card";
import DeletePopover from "@/shared/delete-popover";
import DateCell from "@/ui/date-cell";
import MasterCardIcon from "@/componnets/icons/mastercard";
import VisaIcon from "@/componnets/icons/visa";

const statusColorClassName = {
  Complete: "text-green-dark before:bg-green-dark",
  Pending: "before:bg-orange text-orange-dark",
  Canceled: "text-red-dark before:bg-red-dark",
};

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: <HeaderCell title="Process No." className="ps-4" />,
    onHeaderCell: () => onHeaderCellClick("Process_No"),
    dataIndex: "Process_No",
    key: "Process_No",
    width: 450,
    render: (Process_No: string) => <Text className="ps-4">#{Process_No}</Text>,
  },
  {
    title: (
      <HeaderCell title={<span className="whitespace-nowrap">Date</span>} />
    ),
    dataIndex: "date",
    key: "date",
    width: 450,
    render: (createdDate: Date) => <DateCell date={createdDate} />,
  },
  {
    title: <HeaderCell title="Customer" />,
    onHeaderCell: () => onHeaderCellClick("user.name"),
    dataIndex: "user",
    key: "user",
    width: 450,
    render: (user: { name: string; email: string; avatar: string }) => (
      <AvatarCard name={user.name} description={user.email} />
    ),
  },
  {
    title: (
      <HeaderCell
        title="Amount"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "amount"
        }
      />
    ),
    dataIndex: "amount",
    key: "amount",
    onHeaderCell: () => onHeaderCellClick("amount"),
    width: 300,
    render: (amount: number) => (
      <span className="whitespace-nowrap font-semibold">{amount} EGP</span>
    ),
  },
  {
    title: <HeaderCell title="Method" />,
    dataIndex: "paymentMethod",
    key: "paymentMethod",
    width: 300,
    render: ({
      cardType,
      lastCardNo,
    }: {
      cardType: "mastercard" | "visa";
      lastCardNo: string;
    }) => {
      return <PaymentMethodCell cardType={cardType} lastCardNo={lastCardNo} />;
    },
  },
  {
    title: (
      <HeaderCell
        title="Status"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "status"
        }
      />
    ),
    dataIndex: "status",
    key: "status",
    width: 300,
    onHeaderCell: () => onHeaderCellClick("status"),
    render: (status: StatusType) => {
      return (
        <Text
          className={cn(
            "relative w-[90px] whitespace-nowrap ps-3 font-medium before:absolute before:left-0 before:top-[7px] before:h-[6px] before:w-[6px] before:rounded-full",
            statusColorClassName[status]
          )}
        >
          {status}
        </Text>
      );
    },
  },

  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: "action",
    key: "action",
    width: 200,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-start gap-3 pe-3">
        <Tooltip
          size="sm"
          content={"View Customer"}
          placement="top"
          color="invert"
        >
          <ActionIcon
            as="span"
            size="sm"
            variant="outline"
            aria-label={"View Customer"}
            className="hover:!border-gray-900 hover:text-gray-700"
          >
            <EyeIcon className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
      </div>
    ),
  },
];

function PaymentMethodCell({
  cardType,
  lastCardNo,
}: {
  cardType: string;
  lastCardNo: string;
}) {
  return (
    <span className="flex gap-3">
      {cardType === "Mastercard" ? (
        <MasterCardIcon className="h-auto w-6" />
      ) : (
        <VisaIcon className="h-auto w-6" />
      )}
      <Text className="font-semibold text-gray-900">***{lastCardNo}</Text>
    </span>
  );
}
