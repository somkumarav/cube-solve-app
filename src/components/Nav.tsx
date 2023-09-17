'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  FaTh,
  FaAward,
  FaInfoCircle,
  FaCog,
  FaUserCircle,
} from 'react-icons/fa';

type Route = {
  name: string;
  link: string;
  icon: JSX.Element;
};

const routes: Route[] = [
  {
    name: 'Home',
    link: '/',
    icon: <FaTh size={20} />,
  },

  {
    name: 'Leaderboard',
    link: '/leaderboard',
    icon: <FaAward size={20} />,
  },

  {
    name: 'About',
    link: '/about',
    icon: <FaInfoCircle size={20} />,
  },

  {
    name: 'Setting',
    link: '/settings',
    icon: <FaCog size={20} />,
  },

  {
    name: 'User',
    link: '/user',
    icon: <FaUserCircle size={20} />,
  },
];

export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname === '/leaderboard' ? 'hello' : 'fakjd');

  return (
    <div className="nav">
      {routes.map((route) => {
        return (
          <Link
            className={`nav-item ${pathname === route.link && 'active'}`}
            href={route.link}
          >
            {route.icon}
          </Link>
        );
      })}
    </div>
  );
};
