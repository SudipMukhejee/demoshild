import { Link } from '@geist-ui/react';

const Footer: React.FC<{ alignCenter?: boolean }> = ({ alignCenter = true }) => {
  return (
    <div className='p-10 mt-5 bg-slate-300'>
      <div className={`flex ${alignCenter ? 'justify-center items-center' : 'justify-items-center items-center'}`}>
        <Link href='#' underline className='mt-2'>   
          &copy; Copyright Made by Robustify ❤️
        </Link>
      </div>
    </div>
  );
};

export default Footer;
