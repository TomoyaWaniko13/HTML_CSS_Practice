import { CiUser } from 'react-icons/ci';

const Cards = () => {
  return (
    <section className={'bg-white p-20 text-2xl sm:text-3xl lg:text-4xl'}>
      <div className={'flex flex-col xl:flex-row p-4 m-4 justify-center items-center text-center h-full w-full'}>
        <div className={'shadow-xl w-11/12 flex flex-col items-center hover:scale-105 duration-300'}>
          <CiUser size={50} />
          <h2 className={'mb-2'}>Single User</h2>
          <p>$149</p>
          <div className={'my-5'}>
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2GB</p>
          </div>
        </div>
        <div className={'shadow-xl my-10 w-11/12 flex flex-col items-center hover:scale-105 duration-300'}>
          <CiUser size={50} />
          <h2 className={'mb-2'}>Single User</h2>
          <p>$149</p>
          <div className={'my-5'}>
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2GB</p>
          </div>
        </div>
        <div className={'shadow-xl my-10 w-11/12 flex flex-col items-center hover:scale-105 duration-300'}>
          <CiUser size={50} />
          <h2 className={'mb-2'}>Single User</h2>
          <p>$149</p>
          <div className={'my-5'}>
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2GB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
