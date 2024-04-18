import Nekos from '../assets/Nekos.png';

const Analytics = () => {
  return (
    <section className={' w-full py-16 px-4 text-black bg-white'}>
      <div className={'xl:flex'}>
        <img src={Nekos} alt={'image of Nekos'} className={'w-4/5 sm:w-3/5 mx-auto xl:my-52 xl:mr-10'} />
        <div className={'py-4'}>
          <h1 className={'text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-green-700'}>
            Manage Cat Points Centrally
          </h1>
          <h2 className={'text-xl sm:text-2xl md:text-3xl xl:text-4xl py-5'}>GCT: Green Cat Transformation.</h2>
          <p className={'text-lg sm:text-xl md:text-2xl xl:text-3xl py-5 tracking-wider leading-loose'}>
            The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated
            species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication
            of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but
            also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its
            ability to kill vermin. Its retractable claws are adapted to killing small prey like mice and rats. It has a
            strong, flexible body, quick reflexes, sharp teeth, and its night vision and sense of smell are well
            developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication
            includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body
            language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small
            mammals. It also secretes and perceives pheromones.
          </p>
          <div className={'text-center'}>
            <button
              className={
                'text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl border border-green-700 rounded-2xl bg-green-700 w-1/2 sm:w-56  py-3 my-3 hover:bg-green-800 hover:border-green-800 hover:cursor-pointer  duration-500 mx-0'
              }
            >
              Get started!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
