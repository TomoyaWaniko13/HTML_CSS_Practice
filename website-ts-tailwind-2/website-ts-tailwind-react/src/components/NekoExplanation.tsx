import NekoImage from '../assets/Nekos.png';

const NekoExplanation = () => {
  return (
    <article className={'w-full flex flex-col  xl:flex-row'}>
      <div className={'flex w-full justify-center 2xl:w-3/5'}>
        <img src={NekoImage} alt='image of nekos(cats)' className={'w-3/5 sm:w-2/5 xl:w-4/5 2xl:w-3/5'} />
      </div>
      <div className={'w-full'}>
        <h1 className={'m-3  font-extrabold text-3xl'}>Manage Cat Points Centrally</h1>
        <h2 className={'m-3 text-2xl text-emerald-700 font-bold'}>GCT: Green Cat Transformation.</h2>
        <p className={'m-1 leading-8 text-lg'}>
          The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species
          in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the
          cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges
          freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill
          vermin. Its retractable claws are adapted to killing small prey like mice and rats. It has a strong, flexible
          body, quick reflexes, sharp teeth, and its night vision and sense of smell are well developed. It is a social
          species, but a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like
          meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds
          too faint or too high in frequency for human ears, such as those made by small mammals. It also secretes and
          perceives pheromones.
        </p>
      </div>
    </article>
  );
};

export default NekoExplanation;
