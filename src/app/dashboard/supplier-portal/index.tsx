import React from "react";
import FileStats from "./transaction-states";
import { allOrders } from "@/data/all-orders";
import AllOrdersTable from "./all-orders-table/table";
import CashflowTable from "./cashflows-table/table";
import { cashflowData } from "@/data/cashflow-data";

const SupplierPortalPageWrapper = () => {
  return (
    <>
      <FileStats />
      <AllOrdersTable data={allOrders} />
      <CashflowTable data={cashflowData} />
    </>
  );
};

export default SupplierPortalPageWrapper;
