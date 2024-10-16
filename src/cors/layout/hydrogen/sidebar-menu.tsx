import {
  CurrencyCircleDollar,
  DropboxLogo,
  Package,
  ShoppingCart,
  SignOut,
} from "@phosphor-icons/react";
import { routes } from "@/config/routes";
import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Title, Collapse } from "rizzui";
import { PiCaretDownBold } from "react-icons/pi";
import { menuItems } from "./menu-items";
import cn from "@/utils/class-names";
import StatusBadge from "@/componnets/get-status-badge";

export function SidebarMenu() {
  const pathname = usePathname();

  return (
    <div className="mt-4 pb-3 3xl:mt-6">
      {menuItems.map((item, index) => {
        const isActive = pathname === (item?.href as string);

        return (
          <Fragment key={item.name + "-" + index}>
            {item?.href ? (
              <>
                {item.name === "Logout" && <div className="mt-20" />}
                <Link
                  href={item?.href}
                  className={cn(
                    "group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                    isActive
                      ? "before:top-2/5 text-blue before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-white 2xl:before:-start-5"
                      : "text-gray-700 transition-colors duration-200 hover:bg-[#2B90EC] hover:text-white dark:text-gray-700/90"
                  )}
                >
                  <div className="flex items-center truncate">
                    {item?.icon && (
                      <span
                        className={cn(
                          "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]",
                          isActive
                            ? "text-blue"
                            : "text-gray-800 group-hover:text-white dark:text-gray-500 dark:group-hover:text-white"
                        )}
                      >
                        {item?.icon}
                      </span>
                    )}
                    <span className="truncate">{item.name}</span>
                  </div>
                </Link>
              </>
            ) : (
              <Title
                as="h6"
                className={cn(
                  "mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8",
                  index !== 0 && "mt-6 3xl:mt-7"
                )}
              >
                {item.name}
              </Title>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
