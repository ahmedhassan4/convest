'use client';

import { useCallback, useMemo, useState } from 'react';

import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { ActionIcon } from 'rizzui';
import { useTable } from '@/hooks/use-table';
import cn from '@/utils/class-names';
import { useColumn } from '@/hooks/use-column';
import ControlledTable from '@/shared/controlled-table';
// dynamic import
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


export default function TableCom({
  data = [],
  variant = 'modern',
  className,
  getColumns,
  onExpand,
  pageSize = 15,
  setPageSize,
  total,
  currentPage,
  handlePaginate,
  isLoading
}: {
  data: any[];
  variant?: 'modern' | 'minimal' | 'classic' | 'elegant' | 'retro';
  className?: string;
  getColumns: any;
  onExpand?: any;
  pageSize?: number
  setPageSize?: any,
  total?: number
  currentPage?: number
  handlePaginate?: any
  isLoading: boolean
}) {
  // const [pageSize, setPageSize] = useState(10);

  const ExpendedComponent = onExpand

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
    isFiltered,
    tableData,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    handleDelete,
  } = useTable(data, pageSize);

  const columns = useMemo(
    () => getColumns({ sortConfig, onHeaderCellClick, onDeleteItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  return (
    <div className={cn(className)}>
      <ControlledTable
        variant={variant}
        isLoading={isLoading}
        showLoadingText={true}
        data={tableData}
        // @ts-ignore
        columns={visibleColumns}
        expandable={ExpendedComponent && {
          expandIcon:  CustomExpandIcon,
          expandedRowRender: (record) => <ExpendedComponent record={record} />,
        }}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch('');
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          hideIndex: 1,
          columns,
          checkedColumns,
          setCheckedColumns,
          enableDrawerFilter: true,
        }}
        className={
          'rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0'
        }
      />
    </div>
  );
}
