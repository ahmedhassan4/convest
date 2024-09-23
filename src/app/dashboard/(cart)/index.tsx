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
  { id: 1, label: "Order Pending" },
  { id: 2, label: "Order Processing" },
  { id: 3, label: "Order At Local Facility" },
  { id: 4, label: "Order Out For Delivery" },
  { id: 5, label: "Order Completed" },
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
        Installment Details
      </Title>
      <div className="mt-6 grid grid-cols-1 gap-4 @md:gap-6">
        <div className="flex items-center justify-between">
          Subtotal
          <span className="font-medium text-gray-1000">140.00 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Tax
          <span className="font-medium text-gray-1000">0.18 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Shipping
          <span className="font-medium text-gray-1000">50.00 EGP</span>
        </div>
        <div className="flex items-center justify-between">
          Amount Outstanding
          <span className="font-medium text-gray-1000">150.00 EGP</span>
        </div>
        {/* <CheckCoupon /> */}
        <div className="mt-3 flex items-center justify-between border-t border-muted py-4 font-semibold text-gray-1000">
          Total
          <span className="font-medium text-gray-1000">{""}</span>
        </div>
        <Link href={""}>
          <Button
            size="xl"
            rounded="pill"
            onClick={() => router.push("")}
            className="w-full bg-transparent text-[#2B90EC] border-[2px] border-[#2B90EC] hover:bg-transparent "
          >
            Proceed To Checkout
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
      name: "Stylish T-shirt",
      description: "A stylish t-shirt made from soft cotton fabric.",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/products/details/1.jpg",
      size: "M",
      color: { name: "Blue" },
    },
    {
      id: 2,
      name: "Running Shoes",
      description: "Comfortable running shoes with good grip.",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/products/details/2.jpg",
      size: 42,
      color: { name: "Red" },
    },
    {
      id: 3,
      name: "Leather Wallet",
      description: "Genuine leather wallet with multiple compartments.",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/products/details/3.jpg",
      size: "",
      color: { name: "Brown" },
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

          <div className="space-y-7 @5xl:col-span-8 @5xl:space-y-10 @6xl:col-span-7">
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
          >
            <div className="ms-2 w-full space-y-7 border-s-2 border-gray-100">
              {orderStatus.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "relative ps-6 text-sm font-medium before:absolute before:-start-[9px] before:top-px before:h-5 before:w-5 before:-translate-x-px before:rounded-full before:bg-gray-100 before:content-[''] after:absolute after:-start-px after:top-5  after:h-10 after:w-0.5  after:content-[''] last:after:hidden",
                    currentOrderStatus > item.id
                      ? "before:bg-primary after:bg-primary"
                      : "after:hidden",
                    currentOrderStatus === item.id && "before:bg-primary"
                  )}
                >
                  {currentOrderStatus >= item.id ? (
                    <span className="absolute -start-1.5 top-1 text-white">
                      <PiCheckBold className="h-auto w-3" />
                    </span>
                  ) : null}

                  {item.label}
                </div>
              ))}
            </div>
          </WidgetCard>
          <WidgetCard
            title="Customer Details"
            childrenWrapperClass="py-5 @5xl:py-8 flex"
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
          </WidgetCard>
          <WidgetCard
            title="Shipping Address"
            childrenWrapperClass="@5xl:py-6 py-5"
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
          )}
        </div>
      </div>
    </div>
  );
}
