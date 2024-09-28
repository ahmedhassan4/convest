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
      id: 1,
      name: "King Size Bed Sheets",
      description: "IKEA",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/products/details/1.jpg",
      size: "M",
      color: { name: "Blue" },
      Receive_In: "6 Months",
    },
    {
      id: 2,
      name: "Casio Watch",
      description: "Casio",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/products/details/2.jpg",
      size: 42,
      color: { name: "Red" },
      Receive_In: "6 Months",
    },
  ];
  return (
    <div className="@container">
      <div className="mx-auto w-full max-w-[1536px] items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
        <div className="@5xl:col-span-8 @6xl:col-span-7">
          {mockProducts.length ? (
            mockProducts.map((item) => (
              <CartProduct key={item.id} product={item} />
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
