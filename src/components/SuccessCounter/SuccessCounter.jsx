/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";
import { FaBox, FaRegUser, FaUser, FaUserCheck } from "react-icons/fa";

const CountingNumber = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const step = Math.ceil(endValue / (duration / 100));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + step, endValue));
    }, 20); // Adjusted the interval for slower counting

    return () => clearInterval(interval);
  }, [endValue, step]);

  return <span>{count}</span>;
};

const SuccessCounter = () => {
  const counterData = [
    { title: "Total Biodata", value: 300, duration: 5000, icon: <FaBox /> },
    { title: "Boys Biodata", value: 160, duration: 5000, icon: <FaRegUser /> },
    { title: "Girls Biodata", value: 140, duration: 5000, icon: <FaUser /> },
    { title: "Success Rate", value: 98, duration: 5000, icon: <FaUserCheck /> },
  ];

  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <PrimaryTitle>Success Counter</PrimaryTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            {counterData.map((item, index) => (
              <CounterCard
                key={index}
                title={item.title}
                value={item.value}
                duration={item.duration}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CounterCard = ({ title, value, duration, icon }) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="px-4 py-6">
        <div className="flex items-start">
          {icon}
          <div className="ml-4">
            <h4 className="text-4xl font-bold text-gray-900">
              <CountingNumber endValue={value} duration={duration} />
            </h4>
            <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
