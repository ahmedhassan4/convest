import {
  PiCalendarDuotone,
} from 'react-icons/pi';

import { Buildings, Cards, ChatTeardropText, CurrencyCircleDollar, DropboxLogo, Files, Folder, Gear, GearSix, Headset, Package, ProjectorScreenChart, ShoppingCart, UserCircle, UsersThree } from '@phosphor-icons/react';
import { routes } from '@/config/routes';


// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Home',
  },
  // label end
  {
    name: 'Orders',
    href: routes.dashboard.institutions,
    icon: <Package size={32} weight="duotone" />,
  },
  {
    name: 'Items',
    href: routes.dashboard.institutions,
    icon: <DropboxLogo size={32} weight="duotone"/>,
  },
  {
    name: 'Cards',
    href: routes.dashboard.all_courses.list,
    icon: <Cards size={32} weight="duotone"/>,
  },
  {
    name: 'Payments',
    href: routes.dashboard.calendar,
    icon: <CurrencyCircleDollar size={32} weight="duotone"/>,
  },
  {
    name: 'Shop',
    href: routes.dashboard.myAccount,
    icon: <ShoppingCart size={32} weight="duotone"/>,
  },
  {
    name: 'Help Center',
  },
  {
    name: 'Support',
    href: routes.dashboard.semesters,
    icon: <Headset size={32}  weight="duotone" />,
  },
  {
    name: 'Settings',
    href: routes.dashboard.users,
    icon: <GearSix size={32} weight="duotone"/>,
    badge: '',
  },
];
