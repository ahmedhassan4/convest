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
import { useModal } from "@/shared/modal-views/use-modal";
import AddSupplierForm from "../AddSupplierForm";
import useCopy from "@/hooks/use-copy";

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
  const { openModal } = useModal();
  const { handleCopy } = useCopy();

  const handleInfoClick = () => {
    openModal({
      view: <AddSupplierForm />,
      customSize: "550px",
      size: "sm",
    });
  };

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
        handleCopy,
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
      handleCopy,
    ]
  );

  const { visibleColumns } = useColumn(columns);
  return (
    <div className={cn(className)}>
      <div className="mt-4 flex flex-col w-full items-center gap-3 my-6 sm:flex-row sm:items-center sm:justify-between">
        <Input
          className="w-full sm:w-5/12 md:w-4/12 @[35rem]:w-auto @[70rem]:w-80" // Adjusted width for better appearance on md screens
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
          className="w-full sm:min-w-[150px] sm:w-auto hover:bg-blue-500 cursor-pointer"
          onClick={handleInfoClick}
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
