"use client";

import { Title, Text, Button, Radio } from "rizzui";
import React from "react";

import cn from "@/utils/class-names";
import DocIcon from "@/componnets/icons/doc-solid";
import ImageIcon from "@/componnets/icons/image-solid";
import MusicIcon from "@/componnets/icons/music-solid";
import VideoIcon from "@/componnets/icons/video-solid";
import DriveIcon from "@/componnets/icons/drive-solid";
import { useScrollableSlider } from "@/hooks/use-scrollable-slider";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import MetricCard from "@/componnets/cards/metric-card";


import { AdvancedCheckbox } from "rizzui";
import { PiCalendarBlank, PiCheckBold } from "react-icons/pi";
import DateCell from "@/ui/date-cell";
import SimpleBar from "simplebar-react";

type FileStatsType = {
  className?: string;
};

const data = [
  {
    id: 1,
    orderName: "Order# 11245",
    OrderStatus: "3rd Instalment",
    price: "150 EGP",
    date: "2022-11-10T06:22:01.621Z",
  },
  {
    id: 2,
    orderName: "Order# 11247",
    OrderStatus: " Out For Delivery",
    price: "150 EGP",
    date: "2022-11-10T06:22:01.621Z",
  },
  {
    id: 3,
    orderName: "Order# 11245",
    OrderStatus: "4th Instalment",
    price: "150 EGP",
    date: "2022-11-10T06:22:01.621Z",
  },
  {
    id: 4,
    orderName: "Order# 15874",
    OrderStatus: "4th Instalment",
    price: "150 EGP",
    date: "2022-11-10T06:22:01.621Z",
  },
  {
    id: 5,
    orderName: "Order# 18945",
    OrderStatus: "4th Instalment",
    price: "250 EGP",
    date: "2022-11-10T06:22:01.621Z",
  },
];

// @md:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @7xl:grid-cols-5
export default function OrderState({ className }: FileStatsType) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  return (
    <>
      <Title className="text-lg font-semibold text-[#111111] mb-4">
        Upcoming instalments and Delivery
      </Title>
      <div
        className={cn(
          "relative flex w-auto items-center overflow-hidden",
          className
        )}
      >
        <Button
          title="Prev"
          variant="text"
          ref={sliderPrevBtn}
          onClick={() => scrollToTheLeft()}
          className="!absolute left-0 top-0 z-10 !h-full w-8 !justify-start rounded-none bg-gradient-to-r from-white via-white to-transparent px-0  text-gray-500 hover:text-black 3xl:hidden dark:from-gray-50/80 dark:via-gray-50/80"
        >
          <PiCaretLeftBold className="h-5 w-5" />
        </Button>
        <div className="w-full overflow-hidden">
          <div
            ref={sliderEl}
            className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth"
          >
            {data.map((item) => (
              <AdvancedCheckbox
                name="currency"
                value="pound"
                key={item.id}
                className="relative z-5 mt-0.5 px-3 py-1.5 min-w-[400px]"
                inputClassName="[&:checked~.rizzui-advanced-checkbox]:ring-muted [&:checked~.rizzui-advanced-checkbox>span>svg]:opacity-100 [&:checked~.rizzui-advanced-checkbox>span]:border-[#2B7F75] [&:checked~.rizzui-advanced-checkbox>div>div>strong]:line-through [&:checked~.rizzui-advanced-checkbox>div>div>strong]:text-gray-500 [&:checked~.rizzui-advanced-checkbox>div>div>strong+span]:line-through"
                contentClassName="flex w-full bg-gray-0 dark:bg-gray-50 items-center @md:px-5 px-4 py-4 rounded-lg shadow hover:shadow-md transition-shadow border-0 @md:gap-5 gap-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#D9B34E]">
                  <PiCheckBold className="fill-[#2B7F75] opacity-0" />
                </span>
                <div className="block">
                  <div className="text-gray-600">
                    <strong className="font-semibold text-gray-900">
                      {item.orderName}
                    </strong>{" "}
                    <span>{item.OrderStatus}</span>{" "}
                    <span className="inline-block rounded-2xl bg-[#666666] px-2.5 font-medium text-white">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                    <PiCalendarBlank className="shrink-0 text-base text-gray-400" />
                    <DateCell
                      //@ts-ignore
                      date={item.date}
                      dateClassName="font-normal text-gray-500"
                      className="flex gap-2"
                      timeClassName="text-sm"
                      dateFormat="M/D/YYYY"
                    />
                  </div>
                </div>
              </AdvancedCheckbox>
            ))}
          </div>
        </div>
        <Button
          title="Next"
          variant="text"
          ref={sliderNextBtn}
          onClick={() => scrollToTheRight()}
          className="!absolute right-0 top-0 z-500 !h-full w-8 !justify-end rounded-none bg-gradient-to-l from-white via-white to-transparent px-0  text-gray-500 hover:text-black 3xl:hidden dark:from-gray-50/80 dark:via-gray-50/80"
        >
          <PiCaretRightBold className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
