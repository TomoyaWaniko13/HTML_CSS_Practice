import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [hamburgerNeedsToBeShown, setHamburgerNeedsToBeShown] = useState(true);

  const toggleHamburger = () => {
    setHamburgerNeedsToBeShown((prevState) => !prevState);
  };

  return (
    <nav className={'bg-black  text-white flex max-w-[1240px] h-24 items-center justify-around '}>
      <h1 className={'text-green-200 text-4xl font-extrabold lg:text-5xl  2xl:text-7xl'}>GREEN CAT</h1>
      <ul className={'hidden  md:flex md:border-b md:border-gray-600'}>
        <li className={'px-3 mr-1 2xl:text-2xl hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}>
          Docs
        </li>
        <li className={'px-3 mx-1 2xl:text-2xl hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}>
          Components
        </li>
        <li className={'px-3 mx-1 2xl:text-2xl hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}>
          Blog
        </li>
        <li className={'px-3 ml-1 2xl:text-2xl hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}>
          Showcase
        </li>
      </ul>
      <div onClick={toggleHamburger} className={'md:hidden'}>
        {hamburgerNeedsToBeShown ? <GiHamburgerMenu size={20} /> : <RxCross1 size={20} />}
      </div>
      <ul
        className={
          hamburgerNeedsToBeShown
            ? 'ease-in-out duration-500 fixed left-[-100%]'
            : 'fixed left-0 top-0 w-3/5 h-full border-r border-r-gray-300 bg-black ease-in-out duration-500 md:hidden'
        }
      >
        <h1 className={'p-4 text-4xl font-extrabold'}>My website</h1>
        <li
          className={'p-4 border-b border-gray-700 hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}
        >
          Docs
        </li>
        <li
          className={'p-4 border-b border-gray-700 hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}
        >
          Components
        </li>
        <li
          className={'p-4 border-b border-gray-700 hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}
        >
          Blog
        </li>
        <li
          className={'p-4 border-b border-gray-700 hover:bg-white hover:text-black hover:cursor-pointer  duration-500'}
        >
          Showcase
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
