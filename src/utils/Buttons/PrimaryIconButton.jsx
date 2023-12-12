/* eslint-disable react/prop-types */

const PrimaryIconButton = ({ children, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-[#ed137d] text-white py-2 px-4 font-bold rounded transition duration-300 hover:opacity-80 focus:outline-none focus:ring focus:border-[#ed137d]"
    >
      <span className="mr-2">{icon}</span>
      {children}
    </button>
  );
};

export default PrimaryIconButton;
