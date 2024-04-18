const Newsletter = () => {
  return (
    <>
      <section className={'text-white w-full  py-5 px-4'}>
        <div className={'flex items-center flex-col md:flex-row'}>
          <div className={'w-full'}>
            <h1 className={'text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold py-5 pl-3'}>
              Want tips and tricks to become a cat?
            </h1>
            <p className={'text-base sm:text-lg md:text-xxl xl:text-2xl py-5 pl-3'}>
              Sign up to our newsletter and stay up to data.
            </p>
          </div>
          <div className={'w-full flex justify-end items-center'}>
            <input type='email' placeholder={'Enter your email.'} className={'p-3 w-3/5 rounded-md text-black'} />
            <button
              className={
                'mx-4 py-3 my-3 text-black bg-white rounded-2xl sm:text-xl md:text-2xl xl:text-2xl w-1/4  hover:border-gray-400 hover:bg-gray-300 hover:cursor-pointer  duration-500'
              }
            >
              Notify me
            </button>
          </div>
        </div>
        <div>
          <p className={'pl-4 py-2 text-lg'}>
            We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </section>
    </>
  );
};
export default Newsletter;
