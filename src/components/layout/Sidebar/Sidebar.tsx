'use client'
import React from 'react';
import icon from '../../../../public/linear-icon.svg';
import Image from 'next/image';
import { Sun } from 'lucide-react';
import s from './Sidebar.module.css';
import { routeConfig } from '@/utils/config';345     
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={s.sidebar}>
      <Image src={icon} alt='logo.' priority width={45} height={45} />
      <div>
        {Object.values(routeConfig).map((item) => {
          return (
            <Link
              className={clsx(s.link, { [s.active]: pathname === item.path })}
              href={item.path}
              key={item.path}
            >
              {item.element}
            </Link>
          );
        })}
      </div>
      <Sun className={s.icon} size={35} />
    </aside>
  );
};

export default Sidebar;
