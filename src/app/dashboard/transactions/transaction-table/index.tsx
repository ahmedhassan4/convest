"use client";

import { getColumns } from "@/app/dashboard/transactions/transaction-table/columns";
import { transactionHistory } from "@/data/transaction-history";
import WidgetCard from "@/componnets/cards/widget-card";
import { useCallback, useState, useMemo } from "react";
import { useColumn } from "@/hooks/use-column";
import { useTable } from "@/hooks/use-table";
import ControlledTable from "@/shared/controlled-table-not-modified/index";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Input } from "rizzui";
import FilterElement from "@/app/dashboard/transactions/transaction-table/filter-element";
import cn from "@/utils/class-names";

const filterState = {
  date: [null, null],
  status: "",
};
export default function TransactionHistoryTable({
  className,
}: {
  className?: string;
}) {
  const [pageSize, setPageSize] = useState(7);

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
  } = useTable(transactionHistory, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data: transactionHistory,
        sortConfig,
        checkedItems: selectedRowKeys,
        onHeaderCellClick,
        onDeleteItem,
        onChecked: handleRowSelect,
        handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
    ]
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
