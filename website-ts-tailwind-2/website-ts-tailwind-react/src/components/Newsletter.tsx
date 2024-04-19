const Newsletter = () => {
  return (
    <article className={'bg-black text-white text-xl p-10'}>
      <div className={'flex flex-col xl:flex-row items-center justify-evenly '}>
        <div className={'w-full'}>
          <h1 className={'text-3xl xl:text-4xl font-bold text-emerald-200'}>Want tips and tricks to become a cat?</h1>
          <p className={'text-2xl'}>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className={'h-36 flex flex-col sm:flex-row justify-between items-center  w-full text-black mt-3'}>
          <input
            type='email'
            placeholder={'Enter your email'}
            className={'border-2 border-white p-3 rounded-2xl w-full sm:w-8/12'}
          />
          <button
            className={
              'border-2 border-white rounded-2xl bg-white  p-2 w-6/12 sm:w-3/12 hover:bg-gray-200 hover:border-gray-200'
            }
          >
            Notify me
          </button>
        </div>
      </div>
      <p className={'pt-10'}>
        We care about the protection of your data. Read our{' '}
        <span className={'text-emerald-300 hover:cursor-pointer'}>privacy policy. </span>
      </p>
    </article>
  );
};

export default Newsletter;
