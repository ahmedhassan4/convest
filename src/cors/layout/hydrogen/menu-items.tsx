import {
  CurrencyCircleDollar,
  DropboxLogo,
  Package,
  ShoppingCart,
} from "@phosphor-icons/react";
import { routes } from "@/config/routes";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: "Home",
  },
  // label end
  {
    name: "Orders",
    href: routes.dashboard.institutions,
    icon: <Package weight="duotone" />,
  },
  {
    name: "Shop",
    href: routes.dashboard.myAccount,
    icon: <ShoppingCart weight="duotone" />,
  },
  {
    name: "Supplier",
  },
  {
    name: "supplier Portal",
    href: routes.dashboard.institutions,
    icon: <DropboxLogo weight="duotone" />,
  },
  {
    name: "Admin",
  },
  {
    name: "All Transactions",
    href: routes.dashboard.all_courses.list,
    icon: <CurrencyCircleDollar weight="duotone" />,
  },
  {
    name: "All Orders",
    href: routes.dashboard.calendar,
    icon: <DropboxLogo weight="duotone" />,
  },
];
