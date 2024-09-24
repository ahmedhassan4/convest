'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import { Empty, EmptyProductBoxIcon, Title, Text, Input, Button } from "rizzui";
import { PiCheckBold } from "react-icons/pi";
import { Form } from "@/ui/Form";
import CartProduct from "./cart-product";
import ProductCarousel from "@/shared/product-carousel";
import { recentlyProducts, recommendationProducts } from "@/data/shop-products";
import WidgetCard from "./WidgetCard";
import cn from "@/utils/class-names";
import { useAtomValue } from "jotai";

import {
  billingAddressAtom,
  orderNoteAtom,
  shippingAddressAtom,
} from "@/store/checkout";
import CartCalculations from "./CartCalculations";
import OrderStatus from "./OrderStatus";
import Balance from "./Balance";

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
    {
      id: 3,
      name: "Casio Watch",
      description: "Casio Classic Watch",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/products/details/3.jpg",
      size: "lg",
      color: { name: "Brown" },
      Receive_In: "12 Months",
    },
  ];

  return (
    <div className="@container">
      <div className="mx-auto w-full max-w-[1536px] items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
        <div className="@5xl:col-span-8 @6xl:col-span-7">
          <div>
            <Title as="h3" className="text-base font-semibold text-[#111111]">
              Delivery By 12 June 2025
            </Title>
            <div className="flex text-[#484848]">
              <Text className="text-sm font-medium mr-4">
                Shipping Fee: <span className="font-bold text-sm">60 EGP</span>
              </Text>
              <Text className="text-sm font-medium">
                Vendor: <span className="font-bold text-sm">HnM</span>
              </Text>
            </div>
          </div>
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
            <Balance />
          </div>
        </div>

        <div className="sticky top-24 mt-10 @container @5xl:col-span-4 @5xl:mt-0 @5xl:px-4 @6xl:col-span-3 2xl:top-28">
          <CartCalculations />
          <OrderStatus />
          {/* <WidgetCard
            title="Customer Details"
            childrenWrapperClass="py-5 @5xl:py-8 flex"
            className="mt-7"
          >
            <div className="relative aspect-square h-16 w-16 shrink-0 @5xl:h-20 @5xl:w-20">
              <Image
                fill
                alt="avatar"
                className="object-cover"
                sizes="(max-width: 768px) 100vw"
                src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatar.png"
              />
            </div>
            <div className="ps-4 @5xl:ps-6">
              <Title
                as="h3"
                className="mb-2.5 text-base font-semibold @7xl:text-lg"
              >
                Leslie Alexander
              </Title>
              <Text as="p" className="mb-2 break-all last:mb-0">
                nevaeh.simmons@example.com
              </Text>
              <Text as="p" className="mb-2 last:mb-0">
                (316) 555-0116
              </Text>
            </div>
          </WidgetCard> */}
          {/* <WidgetCard
            title="Shipping Address"
            childrenWrapperClass="@5xl:py-6 py-5"
            className="mt-7"
          >
            <Title
              as="h3"
              className="mb-2.5 text-base font-semibold @7xl:text-lg"
            >
              {billingAddress?.customerName}
            </Title>
            <Text as="p" className="mb-2 leading-loose last:mb-0">
              {billingAddress?.street}, {billingAddress?.city},{" "}
              {billingAddress?.state}, {billingAddress?.zip},{" "}
              {billingAddress?.country}
            </Text>
          </WidgetCard>
          {!isEmpty(shippingAddress) && (
            <WidgetCard
              title="Billing Address"
              childrenWrapperClass="@5xl:py-6 py-5"
            >
              <Title
                as="h3"
                className="mb-2.5 text-base font-semibold @7xl:text-lg"
              >
                {shippingAddress?.customerName}
              </Title>
              <Text as="p" className="mb-2 leading-loose last:mb-0">
                {shippingAddress?.street}, {shippingAddress?.city},{" "}
                {shippingAddress?.state}, {shippingAddress?.zip},{" "}
                {shippingAddress?.country}
              </Text>
            </WidgetCard>
          )} */}
        </div>
      </div>
    </div>
  );
}
