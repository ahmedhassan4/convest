import Link from 'next/link';
import Image from 'next/image';
import isEmpty from 'lodash/isEmpty';
import { Title, Text, Button, Input, Badge } from "rizzui";

export default function CartProduct({ item }: { item: any }) {
  return (
    <div className="grid grid-cols-12 items-start gap-4 border-b border-muted py-6 first:pt-0 sm:flex sm:gap-6 2xl:py-8">
      <figure className="col-span-4 sm:max-w-[180px]">
        <Image
          src={item.image}
          alt={item.title}
          width={150}
          height={150}
          className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
        />
      </figure>
      <div className="col-span-8 sm:block sm:w-full">
        <div className="flex flex-col-reverse gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <Title
              as="h3"
              className="truncate text-base font-medium transition-colors hover:text-primary 3xl:text-lg"
            >
              <Link href="" className="font-[500] text-base text-[#111111]">
                {item.title}
              </Link>
            </Title>
            <span>{item.brand}</span>
          </div>
          <span className="inline-block sm:font-medium text-base">
            {item.installment_price}
            <span className="inline-flex items-center text-[13px] font-medium text-[#484848]">
              <span className="scale-50">
                <Badge renderAsDot color="primary" className="mx-[10px]" />
              </span>
              {item.total_price}
            </span>
          </span>
        </div>
        <Text className="mt-1 w-full max-w-xs truncate leading-6 2xl:max-w-lg font-[400] text-sm">
          {item.description}
        </Text>
        {item.options && item.options.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-3 sm:mt-4 sm:gap-x-8">
            {item.options.map((option: any, index: number) => (
              <li key={index} className="flex items-center gap-3 text-gray-500">
                <span>{option.name} :</span>
                <span className="text-gray-1000">{option.value}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3 hidden items-center justify-between xs:flex sm:mt-6">
          <div className="flex gap-4">
            <Text className="border border-[#E3E3E3] px-2 rounded py-[7px] text-[16px] font-normal">
              {item.quantity} Item(s)
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}