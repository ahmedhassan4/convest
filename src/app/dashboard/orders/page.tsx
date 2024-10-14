import Link from 'next/link';
import React from "react";

import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from "@/shared/page-header";
import OrdersTable from "@/app/dashboard/order/order-list/table";
import { PiPlusBold } from "react-icons/pi";
import { orderData } from "@/data/order-data";
import { metaObject } from "@/config/site.config";
import ExportButton from "@/shared/export-button";
import OrderState from "@/app/dashboard/order/order-status/OrderState";

export const metadata = {
  ...metaObject("Orders"),
};

const pageHeader = {
  title: "All Orders",
  breadcrumb: [
    {
      href: routes.dashboard.orders,
      name: "Home",
    },
    {
      href: routes.dashboard.orders,
      name: "Orders",
    },
    {
      name: "All Orders",
    },
  ],
};

export default function OrdersPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

      <OrderState className="mb-6 @5xl:mb-8 @7xl:mb-11" />

      <OrdersTable data={orderData} />
    </>
  );
}
