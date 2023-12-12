/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch user data from the API
    fetch("https://rb8a12.onrender.com/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleAdminToggle = async (id) => {
    try {
      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, isAdmin: !user.isAdmin } : user
      );

      setUsers(updatedUsers);

      // Send a PUT request to update isAdmin status
      await fetch(`https://rb8a12.onrender.com/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isAdmin: !users.find((user) => user._id === id).isAdmin,
        }),
      });

      console.log(`isAdmin toggled for user with id ${id}`);
    } catch (error) {
      console.error("Error updating isAdmin status:", error);
    }
  };

  const handlePremiumToggle = async (id) => {
    try {
      const updatedUsers = users.map((user) =>
        user._id === id ? { ...user, isPremium: !user.isPremium } : user
      );
      setUsers(updatedUsers);
      // Send a PUT request to update isPremium status
      await fetch(`https://rb8a12.onrender.com/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPremium: !users.find((user) => user._id === id).isPremium,
        }),
      });
    } catch (error) {
      console.error("Error updating isPremium status:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="m-8 font-sans">
      <h1 className="text-3xl text-pink-500 border-b-2 pb-2 mb-4">
        Manage Users
      </h1>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search by username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-2 rounded-md p-2 focus:outline-none focus:border-pink-500 flex-grow"
        />
        <button className="ml-2 p-2 bg-pink-500 rounded-md text-white hover:bg-pink-700 transition duration-300">
          <FaSearch />
        </button>
      </div>
      <table className="w-full border-collapse bg-white shadow-md rounded-md overflow-hidden">
        <thead className="bg-pink-500 text-white">
          <tr>
            <th className="py-2 px-4 text-left">User name</th>
            <th className="py-2 px-4 text-left">User email</th>
            <th className="py-2 px-4 text-left">Make admin</th>
            <th className="py-2 px-4 text-left">Make premium</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">
                <AdminButton
                  isAdmin={user.isAdmin}
                  onClick={() => handleAdminToggle(user._id)}
                />
              </td>
              <td className="py-3 px-4">
                <PremiumButton
                  isPremium={user.isPremium}
                  onClick={() => handlePremiumToggle(user._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AdminButton = ({ isAdmin, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full ${
        isAdmin ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
      }`}
    >
      {isAdmin ? "Admin" : "Make Admin"}
    </button>
  );
};

const PremiumButton = ({ isPremium, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full ${
        isPremium ? "bg-green-500 text-white" : "bg-pink-500 text-white"
      }`}
    >
      {isPremium ? "Premium" : "Make Premium"}
    </button>
  );
};

export default ManageUsers;
