import React from "react";
import Image from "next/image";
import { Title, Text, Button } from "rizzui";

const transitions = [
  {
    id: 1,
    paymentMethod: {
      name: "MasterCard",
      description: "Card Payment on Aug 23",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/payment/master.png",
    },
    price: "$1575.00",
  },
  {
    id: 2,
    paymentMethod: {
      name: "MasterCard",
      description: "Card Payment on Sep 24",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/payment/master.png",
    },
    price: "$75.00",
  },
  {
    id: 2,
    paymentMethod: {
      name: "Stripe",
      description: "Cash Collection on Oct 24",
      image:
        "https://isomorphic-furyroad.s3.amazonaws.com/public/payment/stripe.png",
    },
    price: "$375.00",
  },
];

const Transaction = () => {
  return (
    <div className="">
      <Title
        as="h3"
        className="mb-3.5  text-base font-semibold @5xl:mb-5 @7xl:text-lg"
      >
        Transactions
      </Title>

      <div className="space-y-4">
        {transitions.map((item) => (
          <div
            key={item.paymentMethod.name}
            className="flex items-center justify-between rounded-lg border border-gray-100 px-5 py-5 font-medium shadow-sm transition-shadow @5xl:px-7"
          >
            <div className="flex w-1/3 items-center">
              <div className="shrink-0">
                <Image
                  src={item.paymentMethod.image}
                  alt={item.paymentMethod.name}
                  height={60}
                  width={60}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col ps-4">
                <Text as="span" className="font-lexend text-gray-700">
                  {item.paymentMethod.description}
                </Text>
                <span className="pt-1 text-[13px] font-normal text-gray-500">
                  Via {item.paymentMethod.name}
                </span>
              </div>
            </div>

            <div className="w-1/3 text-end flex flex-col items-end">
              <div>{item.price}</div>
              <Button
                variant="text"
                className="text-[#2B90EC] mt-2 mx-0 px-0 hover:underline"
              >
                View Invoice
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
