import { Link, Row, Text, useClickAway } from '@geist-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Popover } from '@geist-ui/react';
import Logo from '../public/staticshield.png';
import HamburgerMenu from 'react-hamburger-menu';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef();
  useClickAway(popoverRef, () => setIsVisible(false));
  const menuContent = () => {
    return (
      <div className='inline-block' ref={popoverRef}>
        <Popover.Item title className='-my-2'>
          <p className='!px-6 text-lg font-semibold'>Robusta Crypt</p>
        </Popover.Item>
        <div className='hover:!bg-blue-100'>
          <Link href='/login' className=''>
            <Popover.Item className='-my-1'>
              <p className='text-blue-600 !px-6'>Sign In</p>
            </Popover.Item>
          </Link>
        </div>
        <Popover.Item line />
        <div className='hover:!bg-blue-100'>
          <Link href='/login' className=''>
            <Popover.Item className='-my-1'>
              <p className='text-blue-600 !px-6'>Sign Up</p>
            </Popover.Item>
          </Link>
        </div>

      </div>
    );
  };

  return (
    <Row className=' border-b border-gray-200 !fixed !bg-gray-50 z-10'>
      <div className='text-gray-700 flex justify-around items-center !min-w-[100vw]'>
        <NextLink href='/'>
          <div className='flex items-center justify-around cursor-pointer select-none'>
            <Image src={Logo} alt='StaticShield' width='30px' height='30px' />
            <Text b p className='ml-2 text-2xl'>
              Robusta
              <span className='px-1 bg-blue-900 rounded-md text-gray-50'>
              Crypt
              </span>
            </Text>
          </div>
        </NextLink>
        <div className='hidden md:block'>
          <div className='inline-block'>
            <NextLink href='/login'>
              <a
                className='px-3 py-2 text-white bg-yellow-400 rounded-md shadow-md hover:bg-yellow-600'
                href='/login'>
                Sign Up
              </a>
            </NextLink>
          </div>
          <div className='inline-block'>
            <NextLink href='/login'>
              <a
                href='/login'
                className='px-3 py-2 ml-2 text-black border border-gray-500 rounded-md shadow bg-warmgray-50 hover:bg-warmgray-100'>
                Sign In
              </a>
            </NextLink>
          </div>
        </div>
        <div className='block cursor-pointer md:hidden'>
          <Popover content={menuContent} placement='leftStart'>
            <HamburgerMenu
              width={18}
              height={15}
              color='black'
              menuClicked={() => {
                {
                  setIsVisible(!isVisible);
                }
              }}
              isOpen={isVisible}
            />
          </Popover>
        </div>
      </div>
    </Row>
  );
}
