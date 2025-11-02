'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RiHome6Line } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { VscGithubProject } from 'react-icons/vsc';
import { BsChatSquareText } from 'react-icons/bs';


type NavListType = {
    activeRoute: string;
    setActiveRoute: (id: string) => void;
    isVertical?: boolean;
  }

const routes = [
  { id: 'home', value: 'Home', iconSrc: RiHome6Line },
  { id: 'about', value: 'About', iconSrc: FaRegCircleUser },
  { id: 'projects', value: 'Projects', iconSrc: VscGithubProject },
  { id: 'contact', value: 'Contact', iconSrc: BsChatSquareText },
];

const NavList = ({activeRoute, setActiveRoute, isVertical = true}: NavListType) => {
  return (
    <ul
      className={`flex ${
        isVertical ? 'flex-1  flex-col justify-center items-center space-y-4' : 'justify-around'
      } items-center px-3 py-2`}
    >
      {routes.map((route) => {
        const Icon = route.iconSrc;
        const isActive = activeRoute === route.id;
        return (
          <li
            key={route.id}
            onClick={() => setActiveRoute(route.id)}
            className={`p-3 rounded-md cursor-pointer border border-gray-500 transition-all
              ${isActive ? 'text-blue-400 border-blue-400' : 'hover:text-blue-400 hover:border-blue-400'}
              ${!isVertical ? 'p-2 border-none' : ''}`}
          >
            <Link href={`#${route.id}`}>
              <Icon className="text-2xl" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const SideNav = () => {
  const [activeRoute, setActiveRoute] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const route of routes) {
        const section = document.getElementById(route.id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveRoute(route.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:flex fixed top-0 right-0 h-screen w-20 py-6 px-0 lg:px-4 z-40 flex-col gap-4 items-center bg-slate-900 border-l border-gray-700">
        <NavList activeRoute={activeRoute} setActiveRoute={setActiveRoute} isVertical />
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-gray-700">
        <NavList activeRoute={activeRoute} setActiveRoute={setActiveRoute} isVertical={false} />
      </div>
    </>
  );
};

export default SideNav;
