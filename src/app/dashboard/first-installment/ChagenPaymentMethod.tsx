"use client";

import { PiXBold } from "react-icons/pi";
import { ActionIcon, Avatar, Badge, Button, Text, Title } from "rizzui";
import { useModal } from "@/shared/modal-views/use-modal";
import Breadcrumb from "@/ui/breadcrumb";
import SimpleBar from "@/ui/simplebar";
import { GiHandTruck, GiMoneyStack, GiSwipeCard } from "react-icons/gi";
import Link from "next/link";
import { routes } from "@/config/routes";

const rows = [
  {
    id: 1,
    avatar: <GiMoneyStack size={24} />,
    name: "Pay with Cash (+30 EGP/Month)",
    description:
      "We will collect the cash from you every month at the billing address specified. ",
    price: "370 EGP",
  },
  {
    id: 2,
    avatar: <GiSwipeCard size={24} />,
    name: "Pay with Card",
    description:
      "We will charge your card each month until your instalments have been completed.",
    price: "20 EGP",
  },
];

const ChagenPaymentMethod = () => {
  const { closeModal } = useModal();
  return (
    <div className="m-auto p-4 md:px-7 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Title as="h3" className="text-lg">
            Change Payment Method
          </Title>
        </div>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <SimpleBar className="-mr-3 h-[300px] pr-3 md:h-[200px]">
        {/* rows*/}
        {rows.map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between pb-3 pt-2 lg:pb-5 lg:first:pt-4 gap-2"
          >
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F1F1F1]">
                {row.avatar}
              </div>
              <div className="flex flex-col gap-1 flex-grow overflow-hidden">
                <Text className="font-lexend font-medium text-sm capitalize text-[#111111] ">
                  {row.name}
                </Text>
                <Text className="font-lexend text-xs font-normal capitalize text-[#484848] ">
                  {row.description}
                </Text>
              </div>
            </div>
            <Link href={routes.dashboard.checkout}>
              <Button
                size="sm"
                rounded="pill"
                variant="outline"
                // onClick={() => setState(() => !state)}
                className="font-medium capitalize md:h-9 md:px-4"
              >
                Proceed
              </Button>
            </Link>
          </div>
        ))}
      </SimpleBar>

      <Button
        variant="outline"
        className="w-full @xl:w-auto dark:hover:border-gray-400"
        onClick={() => closeModal()}
      >
        Cancel
      </Button>
    </div>
  );
};

export default ChagenPaymentMethod;
