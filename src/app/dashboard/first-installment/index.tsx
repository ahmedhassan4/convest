"use client";

import { Empty, EmptyProductBoxIcon, Title, Text, Input, Button } from "rizzui";
import CartProduct from "../(cart)/cart-product";
import { useAtomValue } from "jotai";

import {
  billingAddressAtom,
  orderNoteAtom,
  shippingAddressAtom,
} from "@/store/checkout";
import CartCalculations from "../(cart)/CartCalculations";
import OrderStatus from "../(cart)/OrderStatus";
import Balance from "../(cart)/Balance";
import InstallmentDetails from "./InstallmentDetails";
import Transaction from "./Transaction";

type FormValues = {
  couponCode: string;
};

// remove item
// cart product card
// total cart balance calculation

export default function InstallmentWrapper() {
  const orderNote = useAtomValue(orderNoteAtom);
  const billingAddress = useAtomValue(billingAddressAtom);
  const shippingAddress = useAtomValue(shippingAddressAtom);

  const mockProducts = [
    {
      title: "Test Sheets",
      brand: "IKEA",
      total_price: "800.00 EGP",
      quantity: 2,
      installment_duration: 3,
      amount_paid: 0,
      amount_outstanding: 0,
      installment_price: "533.33 EGP/Month",
      image:
        "https://cdn.shopify.com/s/files/1/0665/3024/6794/files/charlesdeluvio-OtC8kRzlbqo-unsplash.jpg?v=1727163982",
      options: [
        {
          name: "Bedding size",
          value: "Queen",
        },
        {
          name: "Receive In",
          value: "3 Months",
        },
      ],
    },
    {
      title: "Test Sheets",
      brand: "IKEA",
      total_price: "800.00 EGP",
      quantity: 2,
      installment_duration: 3,
      amount_paid: 0,
      amount_outstanding: 0,
      installment_price: "533.33 EGP/Month",
      image:
        "https://cdn.shopify.com/s/files/1/0665/3024/6794/files/charlesdeluvio-OtC8kRzlbqo-unsplash.jpg?v=1727163982",
      options: [
        {
          name: "Bedding size",
          value: "Queen",
        },
        {
          name: "Receive In",
          value: "3 Months",
        },
      ],
    },
  ];
  return (
    <div className="@container">
      <div className="mx-auto w-full max-w-[1536px] items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
        <div className="@5xl:col-span-8 @6xl:col-span-7">
          {mockProducts.length ? (
            mockProducts.map((item, index) => (
              <CartProduct key={index} item={item} />
            ))
          ) : (
            <Empty
              image={<EmptyProductBoxIcon />}
              text="No Product in the Cart"
            />
          )}

          <div className="@5xl:col-span-8 @5xl:space-y-10 @6xl:col-span-7 mt-10 mb-5">
            <Transaction />
          </div>
          <div className="@5xl:col-span-8 @5xl:space-y-10 @6xl:col-span-7 mt-10 mb-5">
            <Balance />
          </div>
        </div>

        <div className="sticky top-24 mt-10 @container @5xl:col-span-4 @5xl:mt-0 @5xl:px-4 @6xl:col-span-3 2xl:top-28">
          <InstallmentDetails />
          <OrderStatus />
        </div>
      </div>
    </div>
  );
}
