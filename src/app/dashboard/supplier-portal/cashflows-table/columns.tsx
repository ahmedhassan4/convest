"use client";

import { HeaderCell } from "@/shared/table";
import { Text } from "rizzui";
import DateCell from "@/ui/date-cell";

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: (
      <HeaderCell
        title="Date"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "date"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("date"),
    dataIndex: "date",
    key: "date",
    width: 500,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      <HeaderCell
        title="Total Amount"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "totalAmount"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("totalAmount"),
    dataIndex: "totalAmount",
    key: "totalAmount",
    width: 150,
    render: (value: string, row: any) => (
      <div>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {value} EGP
        </Text>

        <Text className="text-[13px] text-gray-500">Paid {"500000"} EGP</Text>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Order size" />,
    dataIndex: "orderSize",
    key: "orderSize",
    width: 150,
    render: (_: any, row: any) => (
      <div>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {row.orderSize}{" "}
          <span className="text-gray-500 font-normal">Instalments</span>
        </Text>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 150,
    render: (_: any, row: any) => (
      <div>
        <Text
          className={`text-sm font-medium ${
            row.status === "Paid" ? "text-[#0D9488]" : "text-yellow-600"
          }`}
        >
          {row.status}
        </Text>
      </div>
    ),
  },
];
