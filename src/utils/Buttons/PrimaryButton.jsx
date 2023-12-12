/* eslint-disable react/prop-types */

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#ed137d] text-white py-2 px-4 font-bold rounded transition duration-300 hover:opacity-80 focus:outline-none focus:ring focus:border-[#ed137d] hover:border-[#ed137d] hover:bg-white hover:text-[#ed137d]"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
