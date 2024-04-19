import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <article className={'bg-black text-white flex flex-col items-center text-xl xl:text-2xl  py-2'}>
      <h1 className={'text-4xl  md:text-5xl xl:text-6xl font-extrabold text-center text-emerald-100'}>
        Grow with a green cat.
      </h1>
      <div className={'p-4 flex flex-col items-center'}>
        <div className={'text-center text-2xl sm:text-3xl'}>
          <p className={'text-center my-3'}>A game-changer for:</p>
          <ReactTyped
            strings={['ultimate neko san.', 'basic neko san.', 'kerokero neko san.']}
            typeSpeed={50}
            backSpeed={70}
            loop
            className={'text-center'}
          />
        </div>
      </div>
      <p className={'text-gray-400 text-center text-lg xl:text-2xl'}>Best tool in the market.</p>
      <button className={'m-3 bg-white text-black p-2 rounded-2xl hover:bg-gray-200'}>Get started</button>
    </article>
  );
};

export default Hero;
