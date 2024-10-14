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
      className="expand-row-icon ms-2"
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
          <article className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            <div className="flex items-center ml-5">
              <CustomExpandIcon
                expanded={expandedOrder[order.id]}
                onExpand={() => toggleExpand(order.id)}
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex-1">
                <Text className="text-sm font-medium">Order #{order.id}</Text>
                <Text className="text-xs text-gray-500">Omar El Olimi</Text>
              </div>
              <div className="flex-1 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                  <Text className="text-sm font-medium">Late Fee</Text>
                  <Text className="text-xs text-gray-500">
                    ${order.lateFee}
                  </Text>
                </div>
                <div className="flex flex-col mt-2 md:mt-0">
                  <Text className="text-sm font-medium">Delivery Status:</Text>
                  <Text className="text-xs text-[#0D9488] font-medium">
                    {order.deliveryStatus}
                  </Text>
                </div>
              </div>
            </div>
          </article>

          {expandedOrder[order.id] && (
            <div className="mt-3 pl-5 ">
              {order?.products.map((product: any) => (
                <article
                  key={record.id + product.name}
                  className="flex flex-col md:flex-row items-center justify-start py-4 first:pt-2.5 last:pb-2.5"
                >
                  <div className="flex items-start w-full md:w-[33%]">
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
                  <div className="flex-1 ml-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <Text className="text-sm text-[#111111] font-medium mb-1">
                          Color
                        </Text>
                        <Text className="text-xs text-[#666666]">
                          {product.color}
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 mt-2 md:mt-0">
                      <div>
                        <Text className="text-sm text-[#111111] font-medium mb-1">
                          Size
                        </Text>
                        <Text className="text-xs text-[#666666]">
                          {product.size}
                        </Text>
                      </div>
                    </div>
                    <Text className="text-xs text-[#0D9488] font-medium mt-2">
                      {product.status}
                    </Text>
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
