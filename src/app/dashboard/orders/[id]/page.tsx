import { Badge, Button } from "rizzui";
import React from "react";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import Link from "next/link";
import CartPageWrapper from "@/app/dashboard/(cart)/index";
export default function OrderDetailsPage({ params }: any) {
  const pageHeader = {
    title: `Order #${params.id}`,
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
        name: params.id,
      },
    ],
  };
  return (
    <>
      <PageHeader
        title={
          <div className="flex flex-col items-center justify-center xs:flex-row sm:items-center">
            <div className="flex items-center">
              {pageHeader.title}
              <Badge
                renderAsDot
                className="mx-2 bg-black hidden xs:inline"
              />{" "}
            </div>
            <span className="font-medium md:mt-0 md:ml-2">
              {" "}
              23rd March 2024
            </span>
          </div>
        }
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CartPageWrapper />
    </>
  );
}
