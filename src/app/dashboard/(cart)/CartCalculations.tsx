import { routes } from "@/config/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Title } from "rizzui";

const CartCalculations = () => {
  const router = useRouter();
  return (
    // const { total } = useCart();
    // const { price: totalPrice } = usePrice({
    // amount: total,
    // });
    <div>
      <Title as="h2" className="border-b border-muted pb-4 text-lg font-medium">
        Your Order
      </Title>
      <div className="mt-6 grid grid-cols-1 gap-4 @md:gap-6">
        <div className="flex items-center justify-between">
          Subtotal
          <span className="font-medium text-gray-1000">2,890 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Tax (included)
          <span className="font-medium text-gray-1000">320 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Shipping
          <span className="font-medium text-gray-1000">120 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          You Have Saved
          <span className="font-medium text-[#0D9488]">330 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Cash Collection
          <span className="font-medium text-gray-1000">330 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Amount Paid
          <span className="font-medium text-gray-1000">0 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Amount Outstanding
          <span className="font-medium text-gray-1000">2,890 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Expiring In
          <span className="font-medium text-[#C50000]">24 Hours</span>
        </div>
        <div className="flex items-center justify-between mt-3 border-t border-muted pt-4">
          Instalment Subtotal
          <span className="font-medium text-gray-1000">450 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Instalment Cash Collection
          <span className="font-medium text-gray-1000">30 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Late Fee
          <span className="font-medium text-[#C50000]">300 EGP</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-muted py-4 font-semibold text-gray-1000">
          Total Due Today
          <span className="font-medium text-gray-1000">480 EGP</span>
        </div>
        <Link href={routes.eCommerce.checkout}>
          <Button
            size="xl"
            rounded="pill"
            onClick={() => router.push(routes.eCommerce.checkout)}
            className="w-full"
          >
            Continue
          </Button>
        </Link>
        <Button
          size="xl"
          variant="outline"
          rounded="pill"
          className="w-full text-[#2B90EC] dark:bg-gray-100 dark:active:bg-gray-100"
        >
          Cancel Order
        </Button>
      </div>
    </div>
  );
};

export default CartCalculations;
