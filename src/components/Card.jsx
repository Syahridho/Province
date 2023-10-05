import ViewButton from "./ViewButton";

const Card = ({ id, image, title, capital, onView }) => {
  return (
    <div className="border border-slate-300 rounded-md">
      <div className="mx-6 mt-6 h-48 mb-4 rounded overflow-hidden shadow-sm sm:h-28 md:h-36 lg:h-28 xl:h-24">
        <img src={image} alt="" />
      </div>
      <div className="px-6 pb-4 flex  xl:flex-col">
        <div className="w-1/2 xl:w-full">
          <h1 className="text-base font-semibold text-slate-900">{title}</h1>
          <p className="text-slate-700 text-sm">{capital}</p>
        </div>
        <div className="w-1/2 flex justify-end xl:w-full">
          <ViewButton onView={onView} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
