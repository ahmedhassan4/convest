import Image from "next/image";
import { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { ActionIcon, Text, Title } from "rizzui";

function CustomExpandIcon(props: any) {
  return (
    <ActionIcon
      size="sm"
      variant="outline"
      rounded="full"
      className="expand-row-icon ms-2 pl-[3px] pt-1"
      onClick={(e) => {
        props.onExpand(props.record, e);
      }}
    >
      {props.expanded ? (
        <PiCaretUpBold className="h-3.5 w-3.5" />
      ) : (
        <PiCaretDownBold className="h-3.5 w-3.5" />
      )}
    </ActionIcon>
  );
}

export default function ExpandedOrderRow({ record }: any) {
  const [expandedOrder, setExpandedOrder] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (orderId: string) => {
    setExpandedOrder((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  if (!record?.order?.length) {
    return <Text>No products available</Text>;
  }

  return (
    <div className="grid grid-cols-1 divide-y bg-gray-0 px-3.5 dark:bg-gray-50">
      {record.order.map((order: any) => (
        <div key={order.id} className="py-4 first:pt-2.5 last:pb-2.5">
          {" "}
          {/* modefied needed*/}
          <article className="flex items-center justify-between py-6 first-of-type:pt-2.5 last-of-type:pb-2.5">
            <div className="flex items-center">
              <div className="flex mx-5">
                <CustomExpandIcon
                  expanded={expandedOrder[order.id]}
                  onExpand={() => toggleExpand(order.id)}
                />
              </div>
              <div className="flex-1">
                <Text className="text-sm font-medium">Order #{order.id}</Text>
                <Text className="text-xs text-gray-500">Omar El Olimi</Text>
              </div>
            </div>
            <div className="flex w-full max-w-lg items-center justify-between">
              <div className="flex flex-col">
                <Text className="text-sm font-medium">Late Fee</Text>
                <Text className="text-xs text-gray-500">${order.lateFee}</Text>
              </div>
              <div className="flex flex-col">
                <Text className="text-sm font-medium">Order Amount</Text>
                <Text className="text-xs text-gray-500">
                  {order.orderAmount} EGP
                </Text>
              </div>
              <div className="flex flex-col mt-2 md:mt-0">
                <Text className="text-sm font-medium">Payment Status</Text>
                <Text
                  className={`text-sm font-medium ${
                    order.paymentStatus === "Paid"
                      ? "text-[#0D9488]"
                      : "text-yellow-600"
                  }`}
                >
                  {order.paymentStatus}
                </Text>
              </div>
            </div>
          </article>
          {/* place the nested expanded row */}
          {expandedOrder[order.id] && (
            <div className="grid grid-cols-1 divide-y bg-gray-0 px-3.5 dark:bg-gray-50">
              {order?.products.map((product: any) => (
                <article
                  key={record.id + product.name}
                  className="flex items-center justify-between py-6 first-of-type:pt-2.5 last-of-type:pb-2.5"
                >
                  <div className="flex items-start">
                    <div className="relative me-4 aspect-[80/60] w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                      <Image
                        fill
                        className="object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <header className="flex flex-col">
                      <Title as="h4" className="mb-1 text-sm font-medium">
                        {product.name}
                      </Title>
                      <Text className="mb-1 text-gray-500">
                        {product.category}
                      </Text>
                      <Text className="text-xs text-gray-500">
                        Quantity: {product.quantity}
                      </Text>
                    </header>
                  </div>
                  <div className="flex w-full max-w-lg items-center justify-between gap-4">
                    <div>
                      <Text className="text-sm text-[#111111] font-medium mb-1">
                        Color
                      </Text>
                      <Text className="text-xs text-[#666666]">
                        {product.color}
                      </Text>
                    </div>

                    <div>
                      <Text className="text-sm text-[#111111] font-medium mb-1">
                        Size
                      </Text>
                      <Text className="text-xs text-[#666666]">
                        {product.size}
                      </Text>
                    </div>

                    <div>
                      <Text className="text-sm text-[#111111] font-medium mb-1">
                        Price
                      </Text>
                      <Text className="text-xs text-[#666666]">
                        {product.price} EGP
                      </Text>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
