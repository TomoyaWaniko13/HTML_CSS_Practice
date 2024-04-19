import { CiUser } from 'react-icons/ci';

interface CardProps {
  type: string;
  price: string;
  storage: string;
  users: string;
  fileSize: string;
}

const cardData: CardProps[] = [
  {
    type: 'Single User',
    price: '$149',
    storage: '500 GB Storage',
    users: '1 Granted User',
    fileSize: 'Send up to 2GB',
  },
  {
    type: 'Team User',
    price: '$299',
    storage: '2 TB Storage',
    users: '5 Granted Users',
    fileSize: 'Send up to 10GB',
  },
  {
    type: 'Enterprise User',
    price: '$499',
    storage: 'Unlimited Storage',
    users: 'Unlimited Users',
    fileSize: 'Send up to 20GB',
  },
];

const Card: React.FC<CardProps> = ({ type, price, storage, users, fileSize }) => {
  return (
    <div
      className={
        'flex flex-col  w-full text-center text-2xl sm:text-3xl xl:text-4xl font-lg p-5 lg:p-8 my-10 shadow-2xl'
      }
    >
      <div className={'flex flex-col items-center mb-4'}>
        <CiUser size={30} />
        <p>{type}</p>
        <p>{price}</p>
      </div>
      <div>
        <p>{storage}</p>
        <p>{users}</p>
        <p>{fileSize}</p>
      </div>
    </div>
  );
};

const Cards: React.FC = () => {
  return (
    <article className={'flex flex-col lg:flex-row justify-evenly p-10'}>
      {cardData.map((card: CardProps, index: number) => (
        <Card key={index} {...card} />
      ))}
    </article>
  );
};

export default Cards;
