import { Button, Page, Text, Link } from '@geist-ui/react';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import features from '@/lib/features';
import Image from 'next/image';
import Logo from '../public/staticshield.png';
import Thumbnail from '../public/thumbnail.png';
import Banner from '../public/frameworks.png';
import Footer from '@/components/Footer';

export default function Home() {
  const { user } = useUser();
  const router = useRouter();
  const [isEmbedVideoVisible, setIsEmbedVideoVisible] =
    useState<boolean>(false);
  useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

  if (user) {
    router.push('/dashboard');
  }

  return (
    <div className='text-center text-gray-900 bg-gray-50'>
      <div className='block'>
        <Navbar />
      </div>
      <Page>
        <Head>
          <title>
          RobustaCrypt. The easiest way to password protect websites
          </title>
          <link rel='icon' href='/staticshield.png' />
        </Head>
        <div className='mx-auto mt-16'>
          <Image
            src={Logo}
            alt=''
            width='160px'
            height='160px'
            placeholder='blur'
            priority={true}
          />
        </div>
        <Text
          className='!font-extrabold mt-12 text-5xl sm:text-7xl bg-gradient-to-r from-black via-gray-600 to-gray-500 !text-transparent bg-clip-text'
          h1>
          Robusta
          <span className='px-2 bg-blue-900 rounded-xl text-gray-50'>
          Crypt
          </span>
        </Text>
        <Text className='text-2xl'>
        Fortify Your Website&apos;s Defense with RobustCrypt{' '}
          <span className='z-10 mx-1 heading-underline isolate whitespace-nowrap'>
            password protection
          </span>{' '}
          <br />
          your Static and Dynamic Sites.
        </Text>

        <div className='mt-12'>
          <Link href='/signup'>
            <Button
              size='large'
              type='success'
              className='!inline-block ml-2 bg-amber-300 text-white hover:bg-amber-400 hover:text-black'>
              Get Started &rarr;
            </Button>
          </Link>
        </div>
        <div className='mt-32'>
          <h2 className='mb-12 text-4xl font-extrabold'>
            Watch password protecting a website in record time
          </h2>
          <div
            style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}
            className='!max-w-5xl !mx-10'>
            {isEmbedVideoVisible ? (
              <iframe
                className='shadow-2xl rounded-2xl'
                src={process.env.NEXT_PUBLIC_LOOM_ID}
                frameBorder={0}
                // @ts-ignore
                webkitallowfullscreen
                // @ts-ignore
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            ) : (
              <div
                className='transition-all duration-300 cursor-pointer opacity-70 hover:opacity-100'
                onClick={() => {
                  setIsEmbedVideoVisible(true);
                }}>
                <Image src={Thumbnail} alt='View the demo' />
              </div>
            )}
          </div>
        </div>
        <div className='mt-32'>
          <h2 className='mb-12 text-4xl font-extrabold'>Explore the Benefits of RobustaCrypt</h2>
          <div className='flex flex-wrap'>
            {features.map((feature) => {
              return (
                <FeatureCard
                  key={feature.feature}
                  feature={feature.feature}
                  // eslint-disable-next-line react/no-children-prop
                  children={feature.children}
                />
              );
            })}
          </div>
        </div>
        <div className='mt-32'>
          <h2 className='mb-12 text-4xl font-extrabold'>
            Experience our seamless support & make Your online presence like never before!
          </h2>
          <Image src={Banner} alt='' placeholder='blur' />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/frameworks/frameworks.gif' alt='' />
        </div>
      </Page>
      <div className='flex flex-col flex-wrap items-baseline max-w-3xl py-10 mx-auto text-center bg-blue-600 rounded-lg shadow-lg px-14'>
        <div>
          <h2 className='mr-5 text-4xl font-extrabold text-white'>
            Start password protecting websites now
          </h2>
        </div>
        <div className='mx-auto my-5'>
          <Link href='/signup'>
            <Button type='secondary' size='large'>
              Sign up now
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        span.heading-underline {
          position: relative;
        }

        span.heading-underline::after {
          content: '';
          background-color: #bfdbfe;
          border-radius: 3px;
          transform: rotate(-2deg);
          margin: auto;
          position: absolute;
          bottom: -0.125rem;
          left: -0.5rem;
          right: -0.5rem;
          height: 2rem;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
