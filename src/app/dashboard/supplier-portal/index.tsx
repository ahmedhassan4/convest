import React from "react";
import FileStats from "./transaction-states";
import { orderData } from "@/data/order-data";
import { allOrders } from "@/data/all-orders";
import AllOrdersTable from "./all-orders-table/table";
// import SuppliersHistoryTable from "./suppliers-table";
// import TransactionHistoryTable from "./transaction-table";

const SupplierPortalPageWrapper = () => {
  return (
    <>
      <FileStats />
      <AllOrdersTable data={allOrders} />
    </>
  );
};

export default SupplierPortalPageWrapper;
