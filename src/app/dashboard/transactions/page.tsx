import { routes } from "@/config/routes";
import React from "react";
import PageHeader from "@/shared/page-header";
import { metaObject } from "@/config/site.config";
import TransactionsPageWraper from ".";

export const metadata = {
  ...metaObject("convest"),
};

const pageHeader = {
  title: "Transactions",
  breadcrumb: [
    {
      ref: routes.dashboard.orders,
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
