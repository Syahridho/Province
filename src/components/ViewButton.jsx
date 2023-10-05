const ViewButton = ({ id, onView }) => {
  return (
    <button
      className="px-6 xl:px-0 xl:w-full xl:rounded xl:my-2 py-2 xl:py-1 bg-green-800 text-white rounded-full border-2 border-green-800 hover:text-green-800 hover:bg-neutral-100"
      onClick={() => onView(id)}
    >
      Visit
    </button>
  );
};

export default ViewButton;
