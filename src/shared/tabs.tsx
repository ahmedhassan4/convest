"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import { Tab } from 'rizzui';

export interface TabsProps {
  listItems: Array<{
    listItem: string;
    tabsComponent: ReactNode;
  }>;
}
const Tabs = ({ listItems = [] }: TabsProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  return (
    <Tab selectedIndex={params.get('tap_index') ? Number(params.get('tap_index')) : 0}>
      <Tab.List className="fixed top-20 z-[99] w-full bg-white">
        {listItems?.map((item: any, i: number) => (
          <Tab.ListItem
            key={item?.listItem}
            onClick={() => router.replace(`?tap_index=${i}`)}
          >
            {item?.listItem}
          </Tab.ListItem>
        ))}
      </Tab.List>

      <Tab.Panels className=" mt-11">
        {listItems?.map((component: any) => (
          <Tab.Panel key={component?.listItem}>
            {component?.tabsComponent}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab>
  );
};
export default Tabs;
