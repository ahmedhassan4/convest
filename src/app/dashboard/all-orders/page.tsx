import { routes } from "@/config/routes";
import PageHeader from "@/shared/page-header";
import CheckoutPageWrapper from "@/app/dashboard/checkout";
import { metaObject } from "@/config/site.config";
import { CartProvider } from "@/store/quick-cart/cart.context";

export const metadata = {
  ...metaObject("Checkout"),
};

const pageHeader = {
  title: "All Orders",
  breadcrumb: [
    {
      name: "Home",
    },
    {
      href: routes.eCommerce.dashboard,
      name: "Orders",
    },
    {
      name: "All Orders",
    },
  ],
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <CartProvider>
        <CheckoutPageWrapper />
      </CartProvider>
    </>
  );
}
