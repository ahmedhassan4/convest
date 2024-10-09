import { routes } from "@/config/routes";
import React from "react";
import PageHeader from "@/shared/page-header";
import { metaObject } from "@/config/site.config";
import TransactionsPageWraper from ".";

export const metadata = {
  ...metaObject("Checkout"),
};

const pageHeader = {
  title: "Transactions",
  breadcrumb: [
    {
      name: "Home",
    },
    {
      name: "Transactions",
    },
  ],
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <TransactionsPageWraper />
    </>
  );
}
