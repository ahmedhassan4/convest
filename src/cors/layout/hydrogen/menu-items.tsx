import {
  PiCalendarDuotone,
} from 'react-icons/pi';

import { Buildings, Cards, ChatTeardropText, CurrencyCircleDollar, DropboxLogo, Files, Folder, Gear, GearSix, Headset, Package, ProjectorScreenChart, ShoppingCart, UserCircle, UsersThree } from '@phosphor-icons/react';
import { routes } from '@/config/routes';


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
    dropdownItems: [
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
    ],
  },
  {
    name: "Items",
    href: routes.dashboard.institutions,
    icon: <DropboxLogo weight="duotone" />,
  },
  {
    name: "Cards",
    href: routes.dashboard.all_courses.list,
    icon: <Cards weight="duotone" />,
  },
  {
    name: "Payments",
    href: routes.dashboard.calendar,
    icon: <CurrencyCircleDollar weight="duotone" />,
  },
  {
    name: "Shop",
    href: routes.dashboard.myAccount,
    icon: <ShoppingCart weight="duotone" />,
  },
  {
    name: "Help Center",
  },
  {
    name: "Support",
    href: routes.dashboard.semesters,
    icon: <Headset weight="duotone" />,
    dropdownItems: [
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
    ],
  },
  {
    name: "Settings",
    href: routes.dashboard.users,
    icon: <GearSix weight="duotone" />,
    badge: "",
    dropdownItems: [
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
      {
        name: "Products",
        href: routes.eCommerce.products,
        badge: "",
      },
    ],
  },
];
