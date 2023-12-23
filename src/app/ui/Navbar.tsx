'use client';
import {useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {classes, icons, images, navLinks} from '../lib/constants';
import {Button, Separator} from './components';

export const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`sm:px-16 px-6 w-full flex py-5 ${'bg-white'} lg:mb-6`}>
      <div className="w-full flex justify-between items-center  mx-auto">
        <div className="flex items-center ">
          <button className="lg:hidden mr-2" onClick={() => setToggle(!toggle)}>
            <Image src={icons.menu} alt="menu" className={classes.icon} />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 bg-white absolute top-20 left-10 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map(nav => (
                  <li
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.id);
                    }}
                    key={nav.id}
                    className={`${
                      active === nav.id
                        ? 'text-primary font-bold'
                        : 'text-gray3 font-normal'
                    }  text-[18px] cursor-pointer`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li
                  onClick={() => {
                    setToggle(!toggle);
                  }}>
                  <Image
                    src={icons.language}
                    alt="current-language"
                    className={classes.icon}
                  />
                </li>
              </ul>
            </div>
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 pr-8"
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <Image
              src={icons.logo}
              alt="logo"
              className="w-[108px] h-[43px] object-contain"
            />
          </Link>
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLinks.map(nav => (
              <li
                onClick={() => setActive(nav.id)}
                key={nav.id}
                className={`${
                  active === nav.id
                    ? 'text-primary font-bold'
                    : 'text-gray3 font-normal'
                }  text-[18px] cursor-pointer relative`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
                {active === nav.id && <span className="active-indicator" />}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center lg:pe-6 h-10">
            <Image
              src={icons.search}
              alt="search"
              className={classes.icon + ' me-4 lg:me-0'}
            />
            <div className="hidden lg:flex">
              <Separator color="bg-orange2" gap={'mx-[24px]'} />
            </div>
            <Image
              src={icons.bell}
              alt="notification"
              className={classes.icon + ' me-4 lg:me-0'}
            />
            <div className="hidden lg:flex">
              <Separator color="bg-orange2" gap={'mx-[24px]'} />
            </div>
            <Image
              src={images.user}
              alt="current-user"
              className="w-10 h-10 object-contain rounded-[40px]"
            />
          </div>
          <div className="hidden lg:flex">
            <Button title="Add New Product" icon={icons.add} />
          </div>
          <div className="lg:flex items-center ps-8 h-6 hidden">
            <Image src={icons.global} alt="language" className={classes.icon} />
            <Separator color="bg-gray5" />
            <Image
              src={icons.language}
              alt="current-language"
              className={classes.icon}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
