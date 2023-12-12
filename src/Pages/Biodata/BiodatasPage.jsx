import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BiodatasPage = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [biodatas, setBiodatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBiodatas = async () => {
    try {
      const response = await fetch("https://rb8a12.onrender.com/biodata");
      const data = await response.json();
      setBiodatas(data);
    } catch (error) {
      console.error("Error fetching biodatas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBiodatas();
  }, []);

  const [filters, setFilters] = useState({
    age: { min: 18, max: 40 },
    type: "",
    division: "",
  });

  const handleFilterChange = (filter, value) => {
    setCurrentPage(1);
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredBiodatas = biodatas.filter((biodata) => {
    const ageCheck =
      Number(biodata.age) >= filters.age.min &&
      Number(biodata.age) <= filters.age.max;
    const typeCheck =
      filters.type === "" || biodata.biodataType === filters.type;
    const divisionCheck =
      filters.division === "" || biodata.presentDivision === filters.division;

    return ageCheck && typeCheck && divisionCheck;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBiodatas.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredBiodatas.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      {/* Filter Section */}
      <div className="w-1/4 p-4 border-r border-gray-200">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age Range
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min"
              className="form-input focus:ring focus:border-pink-300 border border-pink-200 w-16"
              value={filters.age.min}
              onChange={(e) =>
                handleFilterChange("age", {
                  ...filters.age,
                  min: +e.target.value,
                })
              }
            />
            <input
              type="number"
              placeholder="Max"
              className="form-input focus:ring focus:border-pink-300 border border-pink-200 w-16"
              value={filters.age.max}
              onChange={(e) =>
                handleFilterChange("age", {
                  ...filters.age,
                  max: +e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Biodata Type
          </label>
          <select
            className="form-select focus:ring focus:border-pink-300 border border-pink-200"
            onChange={(e) => handleFilterChange("type", e.target.value)}
            value={filters.type}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Division
          </label>
          <select
            className="form-select focus:ring focus:border-pink-300 border border-pink-200"
            onChange={(e) => handleFilterChange("division", e.target.value)}
            value={filters.division}
          >
            <option value="">All</option>
            {/* Add division options */}
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Maymansign">Maymansign</option>
            <option value="Sylhet">Sylhet</option>
          </select>
          {/* Add more options... */}
        </div>
      </div>

      {/* Biodata List */}
      <div className="flex-grow p-4">
        <h2 className="text-lg font-bold mb-4">All Created Biodatas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((biodata) => (
            <div key={biodata._id} className="border p-4 rounded-md">
              <p className="font-bold text-pink-600">
                Biodata ID: {biodata._id}
              </p>
              <p>Biodata Type: {biodata.biodataType}</p>
              <img
                src={biodata.profileImage}
                alt={`Profile ${biodata.biodataType}`}
                className="my-2 w-20 h-20 object-cover rounded-full"
              />
              <p>Division: {biodata.presentDivision}</p>
              <p>Age: {biodata.age}</p>
              <p>Occupation: {biodata.occupation}</p>
              <Link to={`/biodata-details/${biodata._id}`}>
                <button className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 focus:outline-none focus:ring focus:border-pink-300">
                  View Profile
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-pink-600 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
