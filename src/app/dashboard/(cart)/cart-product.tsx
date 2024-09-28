import Link from 'next/link';
import Image from 'next/image';
import isEmpty from 'lodash/isEmpty';
import { Title, Text, Button, Input, Badge } from "rizzui";

export default function CartProduct({ product }: { product: any }) {
  return (
    <div className="grid grid-cols-12 items-start gap-4 border-b border-muted py-6 first:pt-0 sm:flex sm:gap-6 2xl:py-8">
      <figure className="col-span-4 sm:max-w-[180px]">
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={180}
          className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
        />
      </figure>
      <div className="col-span-8 sm:block sm:w-full">
        <div className="flex flex-col-reverse gap-1 sm:flex-row sm:items-center sm:justify-between">
          <Title
            as="h3"
            className="truncate text-base font-medium transition-colors hover:text-primary 3xl:text-lg"
          >
            <Link href="" className="font-[500] text-base text-[#111111]">
              {product.name}
            </Link>
          </Title>
          <span className="inline-block  sm:font-medium text-base">
            210 EGP/Month
            <span className="inline-flex items-center text-[13px] font-medium text-[#484848]">
              <span className="scale-50">
                <Badge renderAsDot color="primary" className="mx-[10px]" />
              </span>
              990 EGP
            </span>
          </span>
        </div>
        <Text className="mt-1 w-full max-w-xs truncate leading-6 2xl:max-w-lg font-[400] text-sm">
          {product.description}
        </Text>

        {(!isEmpty(product.size) ||
          !isEmpty(product.color) ||
          !isEmpty(product.Receive_In)) && (
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-3 sm:mt-4 sm:gap-x-8">
            {product.size !== 0 && (
              <li className="flex items-center gap-3 text-gray-500">
                <span>Size :</span>
                <span className="text-gray-1000">{product.size}</span>
              </li>
            )}
            {!isEmpty(product.color) && (
              <li className="flex items-center text-gray-500">
                <span>Color :</span>
                <div className="flex items-center ">
                  <div
                    className="inline-block h-4 w-4 rounded-full"
                    style={{
                      backgroundColor: product.color.code,
                    }}
                  ></div>
                  <span className="text-gray-1000">{product.color.name}</span>
                </div>
              </li>
            )}
            {!isEmpty(product.color) && (
              <li className="flex items-center gap-3 text-gray-500">
                <span>Receive_In :</span>
                <span className="text-gray-1000">{product.Receive_In}</span>
              </li>
            )}
          </ul>
        )}

        <div className="mt-3 hidden items-center justify-between xs:flex sm:mt-6">
          {/* <Input label="Name" placeholder="Enter your name" /> */}
          <div className="flex gap-4">
            <Text className="border  border-[#E3E3E3] px-2 rounded py-[7px] text-[16px] font-normal">
              1 Item(s)
            </Text>
          </div>
          <div className="flex items-center gap-4"></div>
        </div>
      </div>
      <div className="col-span-full flex items-center justify-between xs:hidden">
        <div className="flex items-center gap-4"></div>
      </div>
    </div>
  );
}
