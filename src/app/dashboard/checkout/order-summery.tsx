"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { routes } from "@/config/routes";
import usePrice from "@/hooks/use-price";
import OrderProducts from "./order-products";
import { Button, Title, Text } from "rizzui";
import cn from "@/utils/class-names";
import { toCurrency } from "@/utils/to-currency";
import { useCart } from "@/store/quick-cart/cart.context";


const fakeCartItems = [
  {
    id: 1,
    name: "King Size Bed Sheets",
    image:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/2.webp",
    price: 50,
    quantity: 2,
  },
  {
    id: 2,
    name: "King Size Bed Sheets",
    image:
      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/2.webp",
    price: 30,
    quantity: 1,
  },
];

const fakeTotal = fakeCartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

export default function OrderSummery({
  isLoading,
  className,
}: {
  className?: string;
  isLoading?: boolean;
}) {
  const params = useParams();
  // const { items, total, addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useCart();

  const items = fakeCartItems;
  const total = fakeTotal;

  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );
  const { price: totalPrice } = usePrice({
    amount: total,
  });

  return (
    <div
      className={cn(
        "sticky top-24 mt-8 @5xl:col-span-4 @5xl:mt-0 @6xl:col-span-3 2xl:top-28",
        className
      )}
    >
      <Title as="h4" className="mb-3 font-semibold border-b border-muted pb-4">
        Your Order
      </Title>
      <div className="rounded-lg border border-muted p-4 @xs:p-6 @5xl:rounded-none @5xl:border-none @5xl:px-0">
        <div className="pt-4 @xl:pt-6">
          {/* <OrderProducts
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            clearItemFromCart={clearItemFromCart}
            items={items}
            className="mb-5 border-b border-muted pb-5"
          /> */}
          <OrderProducts
            addItemToCart={() => {}}
            removeItemFromCart={() => {}}
            clearItemFromCart={() => {}}
            items={items}
            className="mb-5 border-b border-muted pb-5"
          />
          <div className="mb-4 flex items-center justify-between last:mb-0">
            Subtotal
            <Text as="span" className="font-medium text-gray-900">
              {subtotal}
            </Text>
          </div>
          <div className="mb-4 flex items-center justify-between last:mb-0">
            Tax
            <Text as="span" className="font-medium text-gray-900">
              {toCurrency(0)}
            </Text>
          </div>
          <div className="mb-4 flex items-center justify-between last:mb-0">
            Shipping
            <Text as="span" className="font-medium text-gray-900">
              {toCurrency(0)}
            </Text>
          </div>
          <div className="flex items-center justify-between border-t border-muted py-4 text-base font-bold text-gray-1000">
            Total
            <Text>{totalPrice}</Text>
          </div>

          {/* {items.length ? (
            <Button
              type="submit"
              isLoading={isLoading}
              className="mt-3 w-full text-base @md:h-12"
            >
              {params?.id ? "Update Order" : "Place Order"}
            </Button>
          ) : ( */}
          <Link href={routes.dashboard.firstInstallment}>
            <Button
              as="span"
              className="mt-3 w-full text-base @md:h-12 rounded-full hover:bg-[#3489d7]"
            >{`Confirm`}</Button>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
