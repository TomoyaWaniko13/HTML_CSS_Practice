import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={'bg-gray-800 text-white w-full  p-10 flex flex-col lg:flex-row'}>
      <div>
        <h1
          className={
            'uppercase text-emerald-200 font-extrabold text-2xl sm:text-4xl md:text-5xl hover:cursor-pointer pb-3'
          }
        >
          green cat
        </h1>
        <p className={'text-center text-lg xl:text-2xl'}>
          As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats
          owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a
          cat, with an estimated population of 10.9 million pet cats as of 2020. As of 2021, there were an estimated 220
          million owned and 480 million stray cats in the world.
        </p>

        <div className={'flex justify-evenly w-full xl:w-3/5 my-6'}>
          <FaFacebookSquare size={34} />
          <FaInstagram size={34} />
          <FaTwitterSquare size={34} />
          <FaGithubSquare size={34} />
          <FaDribbbleSquare size={34} />
        </div>
      </div>
      <div className={'flex flex-col justify-between items-center w-full'}>
        <ul className={'mx-10'}>
          <li className='py-2 text-2xl font-bold'>Analytics</li>
          <li className='py-2 text-2xl font-bold'>Marketing</li>
          <li className='py-2 text-2xl font-bold'>Commerce</li>
          <li className='py-2 text-2xl font-bold'>Insights</li>
        </ul>
        <ul className={'mx-10'}>
          <li className='py-2 text-2xl font-bold'>Analytics</li>
          <li className='py-2 text-2xl font-bold'>Marketing</li>
          <li className='py-2 text-2xl font-bold'>Commerce</li>
          <li className='py-2 text-2xl font-bold'>Insights</li>
        </ul>
        <ul className={'mx-10'}>
          <li className='py-2 text-2xl font-bold'>Analytics</li>
          <li className='py-2 text-2xl font-bold'>Marketing</li>
          <li className='py-2 text-2xl font-bold'>Commerce</li>
          <li className='py-2 text-2xl font-bold'>Insights</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
