'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Title, Text } from 'rizzui';
import cn from '@/utils/class-names';
import WishlistButton from '@/componnets/wishlist-button';

interface ProductProps {
  product: any;
  className?: string;
  routes: any;
}

export default function ProductModernCard({
  product,
  className,
  routes,
}: ProductProps) {
  const {
    title,
    thumbnail,
    slug,
    description,
    price,
    sale_price,
    colors = [],
  } = product;
  return (
    <div className={cn(className)}>
      <div className="relative">
        <div className="relative mx-auto aspect-[4/5.06] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            alt={title}
            src={thumbnail}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <WishlistButton className="absolute end-3 top-3" />
      </div>

      <div className="pt-3">
        <Link
          href={""}
        >
          <Title
            as="h6"
            className="mb-1 truncate font-semibold transition-colors hover:text-primary"
          >
            {title}
          </Title>
        </Link>

        <Text as="p" className="truncate">
          {description}
        </Text>
        <div className="mt-2 flex items-center font-semibold text-gray-900">
         price
        </div>

        {/* {colors?.length ? <ColorSwatch colors={product?.colors} /> : null} */}
      </div>
    </div>
  );
}
