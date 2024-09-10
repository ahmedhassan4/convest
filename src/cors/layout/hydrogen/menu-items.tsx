import {
  PiCalendarDuotone,
} from 'react-icons/pi';

import { Buildings, ChatTeardropText, Files, Folder, Gear, ProjectorScreenChart, UserCircle, UsersThree } from '@phosphor-icons/react';
import { routes } from '@/config/routes';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Main',
  },
  // label end
  {
    name: 'Institutions',
    href: routes.dashboard.institutions,
    icon: <Buildings size={32} />,
  },
  {
    name: 'All Courses',
    href: routes.dashboard.all_courses.list,
    icon: <Files size={32} />,
  },
  {
    name: 'Calendar',
    href: routes.dashboard.calendar,
    icon: <PiCalendarDuotone />,
  },
  {
    name: 'Profile',
    href: routes.dashboard.myAccount,
    icon: <UserCircle size={32} />,
  },
  {
    name: 'Files',
    href: routes.dashboard.files,
    icon: <Folder size={32} />,
  },
  {
    name: 'Chat',
    href: '/',
    icon: <ChatTeardropText size={32} />
  },
  {
    name: 'Report Cards',
    href: '/',
    icon: <ProjectorScreenChart size={32} />,
  },
  {
    name: 'Admin Controls',
  },
  {
    name: 'Semesters',
    href: routes.dashboard.semesters,
    icon: <ProjectorScreenChart size={32} />,
  },
  {
    name: 'Users',
    href: routes.dashboard.users,
    icon: <UsersThree size={32} />,
    badge: '',
  },
  {
    name: 'Settings',
    href: '/',
    icon: <Gear size={32} />,
  }
];
