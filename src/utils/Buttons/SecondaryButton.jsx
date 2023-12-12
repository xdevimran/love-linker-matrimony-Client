/* eslint-disable react/prop-types */

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-[#ed137d] border border-[#ed137d] py-2 px-4 font-bold rounded transition duration-300  focus:outline-none focus:ring focus:border-[#ed137d] hover:bg-[#ed137d] hover:text-white"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
