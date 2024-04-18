import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div
      className={
        'border-2 border-yellow-300 text-white mt-3 2xl:mt-10 w-full  mx-auto text-center flex flex-col justify-center '
      }
    >
      <h1 className={'text-3xl sm:text-4xl md:text-5xl xl:text-6xl  font-bold text-green-300'}>
        Grow with default neko san.
      </h1>
      <div className={'flex flex-col justify-center items-center'}>
        <p className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl  pt-10 text-bg'}>Fast, flexible neko san for:</p>
        <ReactTyped
          className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl  py-5'}
          strings={['kerokero neko san.', 'baseball neko san.', 'layoff neko san.']}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
      </div>
      <p className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl py-3 text-gray-400'}>
        The best tool for calculating cat points in the market.
      </p>
      <button
        className={
          'text-xl sm:text-2xl md:text-3xl xl:text-4xl border border-green-600 rounded-2xl bg-green-900 w-1/2 sm:w-56 mx-auto py-3 my-3 hover:bg-white hover:border-white hover:text-black hover:cursor-pointer  duration-500'
        }
      >
        Get started!
      </button>
    </div>
  );
};

export default Hero;
