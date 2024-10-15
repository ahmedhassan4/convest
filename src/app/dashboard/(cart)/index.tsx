'use client';

import { Empty, EmptyProductBoxIcon, Title, Text, Input, Button } from "rizzui";
import CartProduct from "./cart-product";
import { useAtomValue } from "jotai";

import {
  billingAddressAtom,
  orderNoteAtom,
  shippingAddressAtom,
} from "@/store/checkout";
import CartCalculations from "./CartCalculations";
import OrderStatus from "./OrderStatus";
import Balance from "./Balance";
import { useRouter } from "next/router";
import { routes } from "@/config/routes";
import Link from "next/link";

type FormValues = {
  couponCode: string;
};

// remove item
// cart product card
// total cart balance calculation

export default function CartPageWrapper() {
  const orderNote = useAtomValue(orderNoteAtom);
  const billingAddress = useAtomValue(billingAddressAtom);
  const shippingAddress = useAtomValue(shippingAddressAtom);

  const deliveries = [
    {
      delivery_by_date: "03 Oct 2024",
      delivery_fee: 60,
      tracking_number: null,
      vendor: "H&M",
      items: [
        {
          title: "Test Sheets",
          brand: "IKEA",
          total_price: "800.00 EGP",
          quantity: 1,
          installment_duration: 0,
          amount_paid: 0,
          amount_outstanding: 0,
          installment_price: "800.00 EGP/Month",
          image:
            "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/2.webp",
          options: [
            {
              name: "Bedding size",
              value: "Double",
            },
            {
              name: "Receive In",
              value: "Now",
            },
          ],
        },
        {
          title: "Test Sheets",
          brand: "IKEA",
          total_price: "800.00 EGP",
          quantity: 1,
          installment_duration: 6,
          amount_paid: 0,
          amount_outstanding: 0,
          installment_price: "133.33 EGP/Month",
          image:
            "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp",
          options: [
            {
              name: "Bedding size",
              value: "King",
            },
            {
              name: "Receive In",
              value: "6 Months",
            },
          ],
        },
      ],
    },
    {
      delivery_by_date: "02 Apr 2025",
      delivery_fee: 60,
      tracking_number: null,
      vendor: "H&M",
      items: [
        {
          title: "Test Sheets",
          brand: "IKEA",
          total_price: "800.00 EGP",
          quantity: 1,
          installment_duration: 6,
          amount_paid: 0,
          amount_outstanding: 0,
          installment_price: "133.33 EGP/Month",
          image:
            "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp",
          options: [
            {
              name: "Bedding size",
              value: "King",
            },
            {
              name: "Receive In",
              value: "6 Months",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="@container">
      <div className="mx-auto w-full max-w-[1536px] items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
        <div className="my-6 grid grid-cols-1 gap-4 @md:gap-6 md:hidden ">
          <Link href={routes.dashboard.checkout}>
            <Button
              size="xl"
              rounded="pill"
              className="w-full hover:bg-[#3489d7]"
            >
              Continue
            </Button>
          </Link>
          <Link href={routes.dashboard.orders}>
            <Button
              size="xl"
              variant="outline"
              rounded="pill"
              className="w-full text-[#2B90EC] dark:bg-gray-100 dark:active:bg-gray-100"
            >
              Cancel Order
            </Button>
          </Link>
        </div>
        <div className="@5xl:col-span-8 @6xl:col-span-7">
          {deliveries && deliveries.length ? (
            deliveries.map((delivery: any, index: number) => (
              <div key={index}>
                <div>
                  <Title
                    as="h3"
                    className={`text-base font-semibold text-[#111111]" ${
                      index > 0 ? "mt-4" : "mt-0"
                    }`}
                  >
                    Delivery By {delivery.delivery_by_date}
                  </Title>
                  <div className="flex text-[#484848]">
                    <Text className="text-sm font-medium mr-4">
                      Shipping Fee:{" "}
                      <span className="font-bold text-sm">
                        {delivery.delivery_fee} EGP
                      </span>
                    </Text>
                    <Text className="text-sm font-medium">
                      Vendor:{" "}
                      <span className="font-bold text-sm">
                        {delivery.vendor}
                      </span>
                    </Text>
                  </div>
                </div>
                {delivery.items.length ? (
                  delivery.items.map((item: any) => (
                    <CartProduct key={item.title} item={item} />
                  ))
                ) : (
                  <Empty
                    image={<EmptyProductBoxIcon />}
                    text="No Product in the Cart"
                  />
                )}
              </div>
            ))
          ) : (
            <Empty
              image={<EmptyProductBoxIcon />}
              text="No Product in the Cart"
            />
          )}
          <div className="@5xl:col-span-8 @5xl:space-y-10 @6xl:col-span-7 mt-10 mb-5">
            <Balance />
          </div>
        </div>

        <div className="sticky top-24 mt-10 @container @5xl:col-span-4 @5xl:mt-0 @5xl:px-4 @6xl:col-span-3 2xl:top-28">
          <CartCalculations />
          <OrderStatus />
        </div>
      </div>
    </div>
  );
}
