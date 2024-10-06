"use client";

import { getColumns } from "@/app/dashboard/suppliers/suppliers-table/columns";
import { suppliersData } from "@/data/suppliers-data";
import { useCallback, useState, useMemo } from "react";
import { useColumn } from "@/hooks/use-column";
import { useTable } from "@/hooks/use-table";
import ControlledTable from "@/shared/controlled-table-not-modified/index";
import { PiMagnifyingGlassBold, PiPlusBold } from "react-icons/pi";
import { Button, Input } from "rizzui";
import cn from "@/utils/class-names";

const filterState = {
  date: [null, null],
  status: "",
};
export default function SuppliersHistoryTable({
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
  } = useTable(suppliersData, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data: suppliersData,
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
      <div className=" mt-4 flex w-full items-center justify-between  gap-3  my-6">
        <Input
          className="w-3/12 @[35rem]:w-auto @[70rem]:w-80 "
          type="search"
          inputClassName="h-9"
          placeholder="Search for user details..."
          value={searchTerm}
          onClear={() => handleSearch("")}
          onChange={(event) => handleSearch(event.target.value)}
          clearable
          prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
        />
        <Button
          as="span"
          className="w-[13%] @lg:w-auto  hover:bg-blue-500 cursor-pointer"
        >
          <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
          New Supplier
        </Button>
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
          "table-fixed w-full rounded-md border border-muted text-sm shadow-sm [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
        }
      />
    </div>
  );
}
