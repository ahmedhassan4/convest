import { Badge, Button } from "rizzui";
import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import Link from "next/link";
import CartPageWrapper from "@/app/dashboard/(cart)/index";

export default function OrderDetailsPage({ params }: any) {
  const pageHeader = {
    title: `Order #${params.id}`,
    breadcrumb: [
      {
        href: routes.dashboard.home,
        name: "Home",
      },
      {
        href: routes.eCommerce.orders,
        name: "Orders",
      },
      {
        name: params.id,
      },
    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.editOrder(params.id)}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        ></Link>
        <Badge renderAsDot />
      </PageHeader>
      <CartPageWrapper />
    </>
  );
}
