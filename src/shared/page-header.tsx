import { Title } from 'rizzui';
import cn from '@/utils/class-names';
import Breadcrumb from '@/ui/breadcrumb';
import React from "react";

export type PageHeaderTypes = {
  title: string | React.ReactNode | JSX.Element;
  breadcrumb: { name: string; href?: string }[];
  className?: string;
};

export default function PageHeader({
  title,
  breadcrumb,
  children,
  className,
}: React.PropsWithChildren<PageHeaderTypes>) {
  return (
    <header className={cn("mb-6 @container xs:-mt-2 lg:mb-7", className)}>
      <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between  items-center justify-center">
        <div>
          <Title
            as="h2"
            className="mb-2 text-[22px] lg:text-2xl 4xl:text-[26px] text-center sm:text-start"
          >
            {title}
          </Title>

          <Breadcrumb
            separator=""
            separatorVariant="circle"
            className="flex-wrap"
          >
            {breadcrumb.map((item) => (
              <Breadcrumb.Item
                key={item.name}
                {...(item?.href && { href: item?.href })}
              >
                {item.name}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
        {children}
      </div>
    </header>
  );
}
