import Image from 'next/image';
import { PiXBold } from 'react-icons/pi';
import { Title, Text } from 'rizzui';

export default function ExpandedOrderRow({ record }: any) {
  if (record?.products?.length === 0) {
    return <Text>No product available</Text>;
  }
  return (
    <div className="grid grid-cols-1 divide-y bg-gray-0 px-3.5 dark:bg-gray-50">
      {record?.products.map((product: any) => (
        <article
          key={record.id + product.name}
          className="flex items-center justify-center py-4 first:pt-2.5 last:pb-2.5 "
        >
          <div className="flex items-start w-[33%]">
            <div className="relative me-4 aspect-[80/60] w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
              <Image
                fill
                className="object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <header>
              <Title as="h4" className="mb-1 text-sm font-medium">
                {" "}
                {/* Adjusted margin-bottom */}
                {product.name}
              </Title>
              <Text className="mb-1 text-gray-500">{product.category}</Text>
              <Text className="text-xs text-gray-500">
                Unit Price: ${product.price}
              </Text>
            </header>
          </div>

          <div className="flex-1 ml-4 w-3/4">
            <div className="flex items- center justify-between gap-6">
              <div>
                <Text className="text-sm text-[#111111] font-medium mb-1">
                  Inst. Price
                </Text>
                <Text className="text-xs text-[#666666]">$210.00/month</Text>
              </div>
              <div>
                <Text className="text-sm text-[#111111] font-medium mb-1">
                  Inst. Duration
                </Text>
                <Text className="text-xs text-[rgb(102,102,102)]">
                  12 Months
                </Text>
              </div>
              <div>
                <Text className="text-sm text-[#111111] font-medium mb-1">
                  Amount Paid
                </Text>
                <Text className="text-xs text-[#666666]">$420.00</Text>
              </div>
              <div>
                <Text className="text-sm text-[#111111] font-medium mb-1">
                  Amount Outstanding
                </Text>
                <Text className="text-xs text-[#666666]">$840.00</Text>
              </div>
              <Text className="text-xs text-[#0D9488] font-medium ">
                Out For Delivery
              </Text>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
