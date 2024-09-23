'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';
import { Empty, EmptyProductBoxIcon, Title, Text, Input, Button } from 'rizzui';
import { PiCheckBold } from "react-icons/pi";
import { Form } from "@/ui/Form";
import CartProduct from "./cart-product";
import ProductCarousel from "@/shared/product-carousel";
import { recentlyProducts, recommendationProducts } from "@/data/shop-products";
import WidgetCard from "./WidgetCard";
import cn from "@/utils/class-names";

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
  return (
    <div className="@container">
      <div className="mx-auto w-full max-w-[1536px] items-start @5xl:grid @5xl:grid-cols-12 @5xl:gap-7 @6xl:grid-cols-10 @7xl:gap-10">
        <div className="@5xl:col-span-8 @6xl:col-span-7">
          {[].length ? (
            [].map((item) => <CartProduct key={item} product={item} />)
          ) : (
            <Empty
              image={<EmptyProductBoxIcon />}
              text="No Product in the Cart"
            />
          )}
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
        </div>
      </div>

      {/* <ProductCarousel
        title={'Recommendations'}
        data={recommendationProducts}
      /> */}
      {/* <ProductCarousel title={"Recently Viewed"} data={recentlyProducts} /> */}
    </div>
  );
}
