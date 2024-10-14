import { routes } from "@/config/routes";
import React from "react";
import PageHeader from "@/shared/page-header";
import { metaObject } from "@/config/site.config";
import SuppliersPageWraper from ".";

export const metadata = {
  ...metaObject("Checkout"),
};

const pageHeader = {
  title: "Suppliers",
  breadcrumb: [
    {
      href: routes.dashboard.orders,
      name: "Home",
    },
    {
      name: "Suppliers",
    },
  ],
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <SuppliersPageWraper />
    </>
  );
}
