import { FaUsers, FaMale, FaFemale, FaGem, FaDollarSign } from "react-icons/fa";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex">
        <PrimaryTitle>Admin Dashboard</PrimaryTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-6">
        {/* Total Biodata Count */}
        <div className="bg-pink-200 p-6 rounded-md shadow-md flex items-center justify-center text-pink-600">
          <FaUsers className="text-3xl mr-2" />
          <div>
            <p className="text-lg font-bold mb-2">Total Biodata Count</p>
            <p className="text-xl">100</p>
          </div>
        </div>

        {/* Male Biodata Count */}
        <div className="bg-blue-200 p-6 rounded-md shadow-md flex items-center justify-center text-blue-600">
          <FaMale className="text-3xl mr-2" />
          <div>
            <p className="text-lg font-bold mb-2">Male Biodata Count</p>
            <p className="text-xl">50</p>
          </div>
        </div>

        {/* Female Biodata Count */}
        <div className="bg-purple-200 p-6 rounded-md shadow-md flex items-center justify-center text-purple-600">
          <FaFemale className="text-3xl mr-2" />
          <div>
            <p className="text-lg font-bold mb-2">Female Biodata Count</p>
            <p className="text-xl">50</p>
          </div>
        </div>

        {/* Premium Biodata Count */}
        <div className="bg-green-200 p-6 rounded-md shadow-md flex items-center justify-center text-green-600">
          <FaGem className="text-3xl mr-2" />
          <div>
            <p className="text-lg font-bold mb-2">Premium Biodata Count</p>
            <p className="text-xl">25</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 bg-yellow-200 p-6 rounded-md shadow-md flex items-center justify-center text-yellow-600">
          <FaDollarSign className="text-3xl mr-2" />
          <div>
            <p className="text-lg font-bold mb-2">Total Revenue</p>
            <p className="text-xl">$1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
