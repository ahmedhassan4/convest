import React from "react";
import FileStats from "./transaction-states";
import { allOrders } from "@/data/all-orders";
import AllOrdersTable from "./all-orders-table/table";
import CashflowTable from "./cashflows-table/table";
import { cashflowData } from "@/data/cashflow-data";
import OrderDate from "./OrderDate";
import PorductDropdown from "./PorductDropdown";

const SupplierPortalPageWrapper = () => {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <PorductDropdown />
        <OrderDate />
      </div>
      <FileStats />
      <AllOrdersTable data={allOrders} />
      <CashflowTable data={cashflowData} />
    </>
  );
};

export default SupplierPortalPageWrapper;
