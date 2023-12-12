import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";

const FavouritesBiodata = () => {
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://rb8a12.onrender.com/favorite")
      .then((response) => response.json())
      .then((data) => setFavoritesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDeleteButtonClick = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this contact request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the item using the API endpoint
        fetch(`https://rb8a12.onrender.com/favorite/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Item deleted successfully:", data);
            // Update the state to reflect the changes
            setFavoritesData((prevData) =>
              prevData.filter((item) => item._id !== _id)
            );
          })
          .catch((error) => console.error("Error deleting item:", error));
      }
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <PrimaryTitle>My Favourites Biodata</PrimaryTitle>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">NO</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Biodata Id</th>
            <th className="py-2 px-4 border-b">Permanent Address</th>
            <th className="py-2 px-4 border-b">Occupation</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>

        <tbody>
          {favoritesData.map((favorite, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{favorite.name}</td>
              <td className="py-2 px-4 border-b">{favorite._id}</td>
              <td className="py-2 px-4 border-b">{favorite.address}</td>
              <td className="py-2 px-4 border-b">{favorite.skinColor}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDeleteButtonClick(favorite._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavouritesBiodata;
