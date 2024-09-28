import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from "@/shared/page-header";
import OrdersTable from "@/app/dashboard/order/order-list/table";
import { PiPlusBold } from "react-icons/pi";
import { orderData } from "@/data/order-data";
import { metaObject } from "@/config/site.config";
import ExportButton from "@/shared/export-button";

export const metadata = {
  ...metaObject('Orders'),
};

const pageHeader = {
  title: 'Orders',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eCommerce.orders,
      name: 'Orders',
    },
    {
      name: 'List',
    },
  ],
};

export default function OrdersPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

      <OrdersTable data={orderData} />
    </>
  );
}
