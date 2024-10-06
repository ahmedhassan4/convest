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
      name: "Home",
    },
    {
      href: routes.eCommerce.dashboard,
      name: "E-Commerce",
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
