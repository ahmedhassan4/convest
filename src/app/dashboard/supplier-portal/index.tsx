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
      <div className="mb-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Product Dropdown */}
        <div className="w-full md:w-96 flex justify-center md:justify-start">
          <PorductDropdown />
        </div>

        {/* Order Date */}
        <div className="w-full md:w-80 flex justify-center md:justify-end">
          <OrderDate className="w-full md:w-80 mx-auto md:mx-0" />
        </div>
      </div>

      <FileStats />
      <AllOrdersTable data={allOrders} />
      <CashflowTable data={cashflowData} />
    </>
  );
};

export default SupplierPortalPageWrapper;
