import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import CheckoutPageWrapper from "@/app/dashboard/checkout";
import InstallmentWrapper from ".";

const pageHeader = {
  title: "First Instalment",
  breadcrumb: [
    {
      name: "Home",
      href: routes.dashboard.orders,
    },
    {
      href: routes.dashboard.orders,
      name: "orders",
    },
    {
      name: "installment",
    },
  ],
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <InstallmentWrapper />
    </>
  );
}
