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

type FormValues = {
  couponCode: string;
};

const orderStatus = [
  { id: 1, label: "Order Created" },
  { id: 2, label: "1st Instalment (450 EGP)", description: "23rd March 2024" },
  {
    id: 3,
    label: "2nd Instalment (450 EGP)",
    description: "23rd March 2024",
  },
  {
    id: 4,
    label: "3rd Instalment (450 EGP) ",
    description: "23rd March 2024",
  },
  {
    id: 5,
    label: "5th Instalment (450 EGP) ",
    description: "23rd March 2024",
  },
  {
    id: 6,
    label: "6th Instalment (450 EGP) ",
    description: "23rd April 2024",
  },
  { id: 7, label: "Out For Delivery", description: "23rd May 2024" },
  { id: 8, label: "Delivered", description: "2 Item(s)" },
  {
    id: 9,
    label: "7th Instalment (220 EGP) ",
    description: "2 Item(s)",
  },
  {
    id: 10,
    label: "8th Instalment (220 EGP) ",
    description: "23rd June 2024",
  },
  {
    id: 11,
    label: "9th Instalment (220 EGP) ",
    description: "23rd June 2024",
  },
  {
    id: 12,
    label: "Out For Delivery",
    description: "1 Item(s)",
  },
  { id: 13, label: "Delivered" },
];

const currentOrderStatus = 3;

function CheckCoupon() {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setReset({ couponCode: "" });
  };

  return (
    <Form<FormValues>
      resetValues={reset}
      onSubmit={onSubmit}
      useFormProps={{
        defaultValues: { couponCode: "" },
      }}
      className="w-full"
    >
      {({ register, formState: { errors }, watch }) => (
        <>
          <div className="relative flex items-end">
            <Input
              type="text"
              placeholder="Enter coupon code"
              inputClassName="text-sm"
              className="w-full"
              label={<Text>Do you have a promo code?</Text>}
              {...register("couponCode")}
              error={errors.couponCode?.message}
            />
            <Button
              type="submit"
              className="ms-3"
              disabled={watch("couponCode") ? false : true}
            >
              Apply
            </Button>
          </div>
        </>
      )}
    </Form>
  );
}

// remove item

// cart product card

// total cart balance calculation
function CartCalculations() {
  const router = useRouter();

  return (
    <div>
      <Title as="h2" className="border-b border-muted pb-4 text-lg font-medium">
        Your Order{" "}
      </Title>
      <div className="mt-6 grid grid-cols-1 gap-4 @md:gap-6">
        <div className="flex items-center justify-between text-sm">
          Subtotal
          <span className="font-medium text-gray-1000">140.00 EGP</span>
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
          <span className="font-medium  text-[#0D9488]">330 EGP</span>
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
        {/* <CheckCoupon /> */}
        <div className="mt-3 flex items-center justify-between border-t text-gray-1000 pt-4 ">
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
        <Link href={""}>
          <Button
            size="xl"
            rounded="pill"
            onClick={() => router.push("")}
            className="w-full  text-white border-[2px]  hover:bg-transparent "
          >
            Continue
          </Button>
        </Link>
        <Link href={""}>
          <Button
            size="xl"
            rounded="pill"
            onClick={() => router.push("")}
            className="w-full bg-transparent text-[#2B90EC] border-[2px] border-[#2B90EC] hover:bg-transparent "
          >
            Cancel Order
          </Button>
        </Link>
      </div>
    </div>
  );
}

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
            <div className="">
              <div className="mb-3.5 @5xl:mb-5">
                <Title as="h3" className="text-base font-semibold @7xl:text-lg">
                  Balance
                </Title>
              </div>
              <div className="space-y-6 rounded-xl border border-muted px-5 py-6 @5xl:space-y-7 @5xl:p-7">
                <div className="flex justify-between font-medium">
                  Total Order <span>$5275.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  Total Return <span>$350.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  Paid By Customer <span>$3000.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  Refunded <span>$350.00</span>
                </div>
                <div className="flex justify-between font-medium">
                  Balance <span>$4975.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-24 mt-10 @container @5xl:col-span-4 @5xl:mt-0 @5xl:px-4 @6xl:col-span-3 2xl:top-28">
          <CartCalculations />
          <WidgetCard
            title="Order Status"
            childrenWrapperClass="py-5 @5xl:py-8 flex"
            className="mt-10"
          >
            <div className="ms-2 w-full space-y-7 border-s-2 border-gray-100">
              {orderStatus.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    `relative ps-6 text-sm before:absolute before:-start-[9px] before:top-px before:h-5 before:w-5 before:-translate-x-px before:rounded-full before:bg-gray-100 before:content-[''] after:absolute after:-start-px after:top-5 after:w-0.5  after:content-[''] last:after:hidden font-medium`,
                    currentOrderStatus > item.id
                      ? "before:bg-primary after:bg-primary"
                      : "after:hidden",
                    currentOrderStatus === item.id && "before:bg-primary",
                    { "after:h-14": Boolean(item.description) },
                    { "after:h-10": !Boolean(item.description) }
                  )}
                >
                  {currentOrderStatus >= item.id ? (
                    <span className="absolute -start-1.5 top-1 text-white">
                      <PiCheckBold className="h-auto w-3" />
                    </span>
                  ) : null}

                  {item.label}
                  <span className="block text-[13px] text-[#666666] font-normal">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </WidgetCard>
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
