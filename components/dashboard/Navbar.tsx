import {
  Avatar,
  Badge,
  Button,
  Link,
  Popover,
  Spinner,
  Text,
  Textarea,
  Tooltip,
  useToasts,
} from '@geist-ui/react';
import { DashboardNavbarProps } from 'types/interfaces';
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from '../../public/staticshield.png';
import {
  LogOut,
  PlusSquare,
  Send,
  Smile,
  User,
} from '@geist-ui/react-icons';
import { useState } from 'react';
import useWeb3forms from 'use-web3forms';
import { useForm } from 'react-hook-form';

interface FormValues {
  feedback: string;
  email: string;
  name: string;
}

export default function DashboardNavbar(props: DashboardNavbarProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [_, setToast] = useToasts();
  const { user, isNewSiteButtonVisible } = props;

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      email: user?.email,
      name: user?.name,
    },
  });

  const { submit } = useWeb3forms<FormValues>({
    apikey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
    onSuccess: () => {
      setLoading(false);
      setToast({
        text: 'Your feedback was successfully delivered',
        type: 'success',
      });
      reset();
    },
    onError: () => {
      setLoading(false);
      setToast({
        text: 'Your feedback was successfully delivered',
        type: 'success',
      });
    },
  });

  const avatarPopoverContent = () => {
    return (
      <div className='!min-w-[200px]'>
        <Popover.Item>
          <p className='!block font-bold'>
            <User className='inline-block w-5 h-5 mr-3' />
            {user?.name}
          </p>
        </Popover.Item>
        <Popover.Item line />
        <Popover.Item className='md:!hidden'>
          <Link block href='/new' className='-mx-5'>
            <p className='!font-bold -my-1'>
              <PlusSquare className='inline-block w-5 h-5 mr-3' />
              Add new site
            </p>
          </Link>
        </Popover.Item>
        <Popover.Item line className='md:!hidden' />
        <Popover.Item>
          <Link block href='/logout' className='-mx-5'>
            <p className='!font-bold -my-1'>
              <LogOut className='inline-block w-5 h-5 mr-3' />
              Logout
            </p>
          </Link>
        </Popover.Item>
        <Popover.Item line />
        <Popover.Item>
          <Link block href='/support' className='font-bold'>
            <p className='-my-1 !font-bold'>
              <Smile className='inline-block w-5 h-5 mr-3' />
              Support
            </p>
          </Link>
        </Popover.Item>
        <Popover.Item line />
      </div>
    );
  };

  const feedbackPopover = () => (
    <>
      <form
        onSubmit={() => {
          setLoading(true);
          handleSubmit(submit)();
        }}>
        <Popover.Item>Thanks for giving feedback</Popover.Item>
        <Popover.Item>
          <Textarea
            {...register('feedback', {
              required: 'Please enter a valid feedback',
              minLength: '3',
            })}
          />
        </Popover.Item>
        <Popover.Item>
          <Button htmlType='submit' type='secondary'>
            {loading ? (
              <Spinner className='relative top-1' />
            ) : (
              <>
                Send Feedback <Send className='p-1' />
              </>
            )}
          </Button>
        </Popover.Item>
      </form>
    </>
  );

  return (
    <div className='fixed z-30 flex items-center justify-between w-full px-16 mb-12 border-b border-gray-200 bg-gray-50'>
      <NextLink href='/dashboard'>
        <div className='flex items-center justify-between cursor-pointer select-none'>
          <Image src={Logo} alt='StaticShield' width='30px' height='30px' />
          <Text b p className='ml-2 text-2xl'>
            Robusta
            <span className='px-1 bg-blue-900 rounded-md text-gray-50'>
              Crypt
            </span>
          </Text>
          <Badge
            type='success'
            size='small'
            className='invisible ml-2 sm:visible'>
            <strong>DASHBOARD</strong>
          </Badge>
        </div>
      </NextLink>
      <div className='absolute right-48'>
        <div className='flex items-center justify-between'>
          <Popover content={feedbackPopover} className='invisible sm:visible'>
            <Button size='small' auto className='!cursor-text mr-3'>
              Feedback
            </Button>
          </Popover>
          {isNewSiteButtonVisible && (
            <Tooltip
              text='Password protect a new website'
              placement='leftStart'
              enterDelay={200}
              type='dark'>
              <NextLink href='/new'>
                <Button
                  size='small'
                  auto
                  type='default'
                  className='flex items-center justify-center invisible mr-3 sm:visible'>
                  <PlusSquare className='mt-1 -mx-2' />
                </Button>
              </NextLink>
            </Tooltip>
          )}
          <div className='-mt-2'>
            <Popover content={avatarPopoverContent} placement='leftStart'>
              <Tooltip
                text={user?.email}
                type='dark'
                className='!-my-5'
                placement='leftStart'>
                <Avatar
                  src={user?.picture}
                  size='small'
                  className='cursor-pointer'
                />
              </Tooltip>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
