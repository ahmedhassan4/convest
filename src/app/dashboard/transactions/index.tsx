import React from "react";
import TransactionHistoryTable from "./transaction-table";

const TransactionsPageWraper = () => {
  return (
    <>
      <TransactionHistoryTable className="col-span-full" />
    </>
  );
};

export default TransactionsPageWraper;
