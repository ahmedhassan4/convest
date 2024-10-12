import {
  CurrencyCircleDollar,
  DropboxLogo,
  Package,
  ShoppingCart,
  SignOut,
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
    href: routes.dashboard.home,
    icon: <Package weight="duotone" />,
  },
  {
    name: "Shop",
    href: "#",
    icon: <ShoppingCart weight="duotone" />,
  },
  {
    name: "Supplier",
  },
  {
    name: "suppliers",
    href: routes.dashboard.suppliers,
    icon: <DropboxLogo weight="duotone" />,
  },
  {
    name: "supplier Portal",
    href: routes.dashboard.supplierPortal,
    icon: <DropboxLogo weight="duotone" />,
  },
  {
    name: "Admin",
  },
  {
    name: "All Transactions",
    href: routes.dashboard.transactions,
    icon: <CurrencyCircleDollar weight="duotone" />,
  },
  {
    name: "All Orders",
    href: routes.dashboard.orders,
    icon: <DropboxLogo weight="duotone" />,
  },
  {
    name: "Logout",
    href: "#",
    icon: <SignOut weight="duotone" />,
  },
];
