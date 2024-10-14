import { routes } from "@/config/routes";
import React from "react";
import PageHeader from "@/shared/page-header";
import { metaObject } from "@/config/site.config";
import SupplierPortalPageWrapper from ".";

export const metadata = {
  ...metaObject("Checkout"),
};

const pageHeader = {
  title: "Supplier Portal",
  breadcrumb: [
    {
      name: "Home",
      href: routes.dashboard.orders,
    },
    {
      name: "Supplier Portal",
    },
  ],
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <SupplierPortalPageWrapper />
    </>
  );
}
