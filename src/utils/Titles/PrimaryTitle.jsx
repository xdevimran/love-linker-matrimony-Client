/* eslint-disable react/prop-types */
// Title.jsx

const PrimaryTitle = ({ children }) => {
  return (
    <div className="my-4 flex items-center justify-center">
      <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-[#ed137d]  dark:text-gray-200">
        {children}
      </h1>
    </div>
  );
};

export default PrimaryTitle;
