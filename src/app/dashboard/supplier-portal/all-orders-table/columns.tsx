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
        title="Expected Pick Up"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "createdAt"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("createdAt"),
    dataIndex: "createdAt",
    key: "createdAt",
    width: 500,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="No. of Orders" />,
    dataIndex: "orders",
    key: "orders",
    width: 150,
    render: (_: any, row: any) => (
      <div>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {row.orders} <span className="text-gray-500 font-normal">orders</span>
        </Text>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Total Items" />,
    dataIndex: "totalItems",
    key: "totalItems",
    width: 150,
    render: (_: any, row: any) => (
      <div>
        <Text className="text-sm font-medium text-gray-900 dark:text-gray-700">
          {row.totalItems}{" "}
          <span className="text-gray-500 font-normal">items</span>
        </Text>
      </div>
    ),
  },
];
