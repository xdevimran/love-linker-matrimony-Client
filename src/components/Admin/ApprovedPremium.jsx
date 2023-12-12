import { useState, useEffect } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";
import Swal from "sweetalert2";

const ApprovedPremium = () => {
  const [premiumRequests, setPremiumRequests] = useState([]);
  const handleMakePremium = (biodataId, email, itemId) => {
    // Update premium by biodataId
    fetch(`https://rb8a12.onrender.com/biodata/${biodataId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        premium: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success (Biodata):", data);
        // show sweet alert
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Premium request approved successfully",
        });
      })
      .catch((error) => {
        console.error("Error (Biodata):", error);
      });

    // Update premium by itemId
    fetch(`https://rb8a12.onrender.com/biodataprorequest/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        premium: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success (Item):", data);
        // show sweet alert
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Premium request approved successfully",
        });
      })
      .catch((error) => {
        console.error("Error (Item):", error);
      });

    const updatedPremiumRequests = premiumRequests.map((request) =>
      request.biodataId === biodataId
        ? { ...request, isPremium: !request.isPremium }
        : request
    );

    setPremiumRequests(updatedPremiumRequests);
  };

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rb8a12.onrender.com/biodataprorequest"
        );
        const data = await response.json();
        setPremiumRequests(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch API data on component mount

  return (
    <div className="p-4">
      <div className="flex">
        <PrimaryTitle>Approved Biodata Premium</PrimaryTitle>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Biodata Id</th>
            <th className="py-2 px-4 border-b">Make Premium</th>
          </tr>
        </thead>
        <tbody>
          {premiumRequests.map(
            (request, index) => (
              console.log("request", request.premium),
              (
                <tr
                  key={request.biodataId}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-2 px-4 border-b">{request.name}</td>
                  <td className="py-2 px-4 border-b">{request.email}</td>
                  <td className="py-2 px-4 border-b">{request.biodataId}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className={`flex items-center rounded-full py-2 px-4 transition duration-300 ease-in-out ${
                        request.premium
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-pink-500 hover:bg-pink-600"
                      } text-white`}
                      onClick={() =>
                        handleMakePremium(
                          request.biodataId,
                          request.email,
                          request._id
                        )
                      }
                    >
                      {request.premium ? (
                        <RiCheckboxCircleLine className="text-white" />
                      ) : (
                        <RiCheckboxBlankCircleLine className="text-white" />
                      )}
                      <span className="ml-2">
                        {request.premium ? "Premium" : "Make Premium"}
                      </span>
                    </button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedPremium;
