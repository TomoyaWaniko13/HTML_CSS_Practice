import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = () => {
  const [hamburgerNeedsToBeShown, setHamburgerNeedsToBeShown] = useState(true);

  const toggleHamburger = () => {
    return setHamburgerNeedsToBeShown((prevState) => !prevState);
  };

  return (
    <header className={'bg-black text-white h-24 w-full'}>
      <div className={'h-full flex justify-between items-center ml-10'}>
        <h1 className={'uppercase text-lime-200 font-extrabold text-2xl sm:text-4xl md:text-5xl hover:cursor-pointer'}>
          green cat
        </h1>
        <nav>
          <ul className={'hidden md:flex'}>
            <li className={'p-4 text-xl hover:cursor-pointer'}>Guides</li>
            <li className={'p-4 text-xl hover:cursor-pointer'}>Plus</li>
            <li className={'p-4 text-xl hover:cursor-pointer'}>Blog</li>
            <li className={'p-4 text-xl hover:cursor-pointer mr-10'}>Play</li>
          </ul>
          <div onClick={toggleHamburger} className={'md:hidden mr-10 hover:cursor-pointer'}>
            {hamburgerNeedsToBeShown ? <GiHamburgerMenu size={30} /> : <RxCross1 size={30} />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
