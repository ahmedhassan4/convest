import { routes } from "@/config/routes";
import { useModal } from "@/shared/modal-views/use-modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Title } from "rizzui";
import ChagenPaymentMethod from "./ChagenPaymentMethod";

const InstallmentDetails = () => {
  const { openModal } = useModal();
  const router = useRouter();

  const handleInfoClick = () => {
    openModal({
      view: <ChagenPaymentMethod />,
      customSize: "550px",
      size: "sm",
    });
  };
  return (
    // const { total } = useCart();
    // const { price: totalPrice } = usePrice({
    // amount: total,
    // });
    <div>
      <Title as="h2" className="border-b border-muted pb-4 text-lg font-medium">
        Installment Details
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
          Amount Paid
          <span className="font-medium text-gray-1000">0 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Amount Outstanding
          <span className="font-medium text-gray-1000">2,890 EGP</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-muted py-4 font-semibold text-gray-1000">
          Next Instalment
          <span className="font-medium text-gray-1000">23/12/24 (30 Days)</span>
        </div>

        <Button
          size="xl"
          rounded="pill"
          variant="outline"
          onClick={handleInfoClick}
          className="w-full"
        >
          Change Payment Method
        </Button>
      </div>
    </div>
  );
};

export default InstallmentDetails;
