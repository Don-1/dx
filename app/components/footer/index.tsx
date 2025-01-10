import { NavItems } from '../navigation/navitems';

const Footer = () => {
  return (
    <div className='w-full h-20 bg-sky-200 sticky bottom-0'>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex justify-center items-center h-full'>
          <ul className='hidden md:flex gap-x-6 text-white'>
            <NavItems />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
