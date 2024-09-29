"use client";

import { PiXBold } from "react-icons/pi";
import { ActionIcon, Avatar, Badge, Button, Text, Title } from "rizzui";
import { useModal } from "@/shared/modal-views/use-modal";
import Breadcrumb from "@/ui/breadcrumb";
import SimpleBar from "@/ui/simplebar";
import { GiHandTruck } from "react-icons/gi";

const rows = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "King Size Bed Sheets",
    description: "2 Item(s)",
    price: "370 EGP",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    name: "Delivery",
    description: "For 21st December 2024",
    price: "20 EGP",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Delivery",
    description: "For 21st February 2025",
    price: "10 EGP",
  },
];

const OrderStatusInfo = () => {
  const { closeModal } = useModal();
  return (
    <div className="m-auto p-4 md:px-7 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Title as="h3" className="text-lg">
            Instalment Breakdown
          </Title>
          <div>
            <Breadcrumb
              separator=">"
              separatorVariant="circle"
              separatorClassName="text-gray-900"
            >
              <Breadcrumb.Item>19th of September</Breadcrumb.Item>
              <Breadcrumb.Item>450 EGP</Breadcrumb.Item>
              <Breadcrumb.Item>1 of 6</Breadcrumb.Item>
            </Breadcrumb>
          </div>
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

      <SimpleBar className="-mr-3 h-[300px] pr-3 md:h-[300px]">
        {/* rows*/}
        {rows.map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between pb-3 pt-2 lg:pb-5 lg:first:pt-4"
          >
            <div className="flex items-center gap-2">
              <Avatar size="lg" name={row.name} src={row.avatar} />
              <div className="flex flex-col gap-1">
                <Text className="font-lexend font-medium text-sm capitalize text-[#111111]">
                  {row.name}
                </Text>
                <Text className="font-lexend text-xs font-normal capitalize text-[#484848]">
                  {row.description}
                </Text>
              </div>
            </div>
            <Badge style={{ backgroundColor: "#666666" }}>{row.price}</Badge>
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

export default OrderStatusInfo;
