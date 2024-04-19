import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={'bg-gray-700 text-white text-3xl p-10'}>
      <div className={'flex flex-col xl:flex-row items-center justify-between '}>
        <div className={'w-full'}>
          <h1 className={'text-green-100 font-extrabold  lg:text-3xl  2xl:text-5xl pb-3'}>GREEN CAT</h1>
          <p>
            As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats
            owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a
            cat, with an estimated population of 10.9 million pet cats as of 2020. As of 2021, there were an estimated
            220 million owned and 480 million stray cats in the world.
          </p>
          <div className={'flex justify-evenly w-full xl:w-3/5 my-6'}>
            <FaFacebookSquare size={34} />
            <FaInstagram size={34} />
            <FaTwitterSquare size={34} />
            <FaGithubSquare size={34} />
            <FaDribbbleSquare size={34} />
          </div>
        </div>

        <div className={'flex justify-center items-center w-full'}>
          {/*<div className={'w-full'}>*/}
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
      </div>
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
