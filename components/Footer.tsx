import { Link } from '@geist-ui/react';

const Footer: React.FC<{ alignRight?: boolean }> = ({ alignRight = true }) => {
  return (
    <div className='py-10 mt-5 px-7 bg-warmgray-100'>
      <div
        className={`flex max-w-xl ${alignRight && 'sm:mx-auto'}`}>
        <div className={`justify-items-center items-center`}>
          <Link href='#' underline className='mt-2'>   
          Made by Robustify ❤️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
