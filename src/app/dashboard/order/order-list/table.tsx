'use client';

import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTable } from "@/hooks/use-table";
import { useColumn } from "@/hooks/use-column";
import {
  PiCaretDownBold,
  PiCaretUpBold,
  PiMagnifyingGlassBold,
} from "react-icons/pi";
import ControlledTable from "@/shared/controlled-table-not-modified/index";
import { getColumns } from "@/app/dashboard/order/order-list/columns";
import { ActionIcon, Input } from "rizzui";
import cn from "@/utils/class-names";
import ExpandedOrderRow from "@/app/dashboard/order/order-list/expanded-row";
// dynamic import
const FilterElement = dynamic(
  () => import("@/app/dashboard/order/order-list/filter-element"),
  { ssr: false }
);

function CustomExpandIcon(props: any) {
  return (
    <ActionIcon
      size="sm"
      variant="outline"
      rounded="full"
      className="expand-row-icon ms-2"
      onClick={(e) => {
        props.onExpand(props.record, e);
      }}
    >
      {props.expanded ? (
        <PiCaretUpBold className="h-3.5 w-3.5" />
      ) : (
        <PiCaretDownBold className="h-3.5 w-3.5" />
      )}
    </ActionIcon>
  );
}

const filterState = {
  price: ["", ""],
  createdAt: [null, null],
  updatedAt: [null, null],
  status: "",
};

export default function OrderTable({
  data = [],
  className,
}: {
  data: any[];
  className?: string;
}) {
  const [pageSize, setPageSize] = useState(10);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(data, pageSize, filterState);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns } = useColumn(columns);

  return (
    <div className={cn(className)}>
      <div className="mt-4 flex flex-col w-full items-center gap-3 my-6 sm:flex-row sm:items-center sm:justify-between">
        {" "}
        {/* Stack vertically on small screens, horizontal on larger screens */}
        <FilterElement
          isFiltered={isFiltered}
          filters={filters}
          updateFilter={updateFilter}
          handleReset={handleReset}
        />
        <Input
          className="w-full sm:w-5/12 md:w-4/12 @[70rem]:w-80"
          type="search"
          inputClassName="h-9"
          placeholder="Search for user details..."
          value={searchTerm}
          onClear={() => handleSearch("")}
          onChange={(event) => handleSearch(event.target.value)}
          clearable
          prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
        />
      </div>
      <ControlledTable
        variant="modern"
        data={tableData}
        isLoading={isLoading}
        showLoadingText={true}
        // @ts-ignore
        columns={visibleColumns}
        expandable={{
          expandIcon: CustomExpandIcon,
          expandedRowRender: (record) => <ExpandedOrderRow record={record} />,
        }}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        className={
          "rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
        }
      />
    </div>
  );
}
