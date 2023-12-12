/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// BiodataDetails.jsx
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const BiodataDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState("");
  const email = user.email;

  const [userData, setUserData] = useState({});
  const premiumStatus = userData[0]?.isPremium;
  console.log("premiumStatus:", premiumStatus);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rb8a12.onrender.com/user/?email=${email}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [email]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rb8a12.onrender.com/biodata/${id}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleFavoritesClick = () => {
    const apiUrl = "https://rb8a12.onrender.com/favorite";
    const dataToSend = {
      name: data?.name,
      age: data?.age,
      address: data?.permanentDivision,
      phone: data?.mobileNumber,
      skinColor: data?.race,
    };

    // Use fetch
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the server response if needed
        console.log("Server response:", responseData);

        // Show SweetAlert for success
        Swal.fire({
          title: "Success!",
          text: "Added to Favorites!",
          icon: "success",
        });

        // Disable the button
        const favoritesButton = document.getElementById("favoritesButton");
        if (favoritesButton) {
          favoritesButton.disabled = true;
        }
      })
      .catch((error) => {
        // Handle errors during the fetch
        console.error("Error during fetch:", error);
      });
  };

  const handleRequestClick = () => {
    const apiUrl = "https://rb8a12.onrender.com/contactRequest";
    const dataToSend = {
      name: data?.name,
      email: data?.email,
      id: data?.id,
      reqEmail: email,
      mobileNo: data?.mobileNumber,
      showContact: "Available",
    };

    // Use fetch for contact request
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the server response if needed
        console.log("Server response:", responseData);

        // Show SweetAlert for success
        Swal.fire({
          title: "Success!",
          text: "Contact request sent!",
          icon: "success",
        });

        // Disable the button
        const requestButton = document.getElementById("requestButton");
        if (requestButton) {
          requestButton.disabled = true;
        }
      })
      .catch((error) => {
        // Handle errors during the fetch
        console.error("Error during fetch:", error);
      });
  };

  return (
    <div className="bg-red-100 ">
      <div className="flex container mx-auto">
        {/* Left side - Biodata Details */}
        <div className="w-1/2 p-4 bg-gray-100">
          <h2 className="text-gray-800 text-lg font-bold mb-4">
            Biodata Details {id}
          </h2>
          <div className="flex gap-4">
            <div className="">
              <img
                src={data?.profileImage || "https://placekitten.com/300/200"} // Example image URL (replace with actual image URL)
                alt="Profile"
                className=" w-32 border-4 border-pink-500"
              />
            </div>

            <div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Name:</span> {data?.name}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Biodata Type:</span>{" "}
                  {data?.biodataType}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Date of Birth:</span>{" "}
                  {data?.dateOfBirth}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Height:</span> {data?.height}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Weight:</span> {data?.weight}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Age:</span> {data?.age}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Occupation:</span>{" "}
                  {data?.occupation}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Race:</span> {data?.race}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Father:</span> {data?.fathersName}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Mother:</span> {data?.mothersName}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Permanent Division:</span>{" "}
                  {data?.permanentDivision}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Present Division:</span>{" "}
                  {data?.presentDivision}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Expected Partner Age:</span>{" "}
                  {data?.expectedPartnerAge}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Expected Partner Height:</span>{" "}
                  {data?.expectedPartnerHeight}
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="mb-2">
                  <span className="font-bold">Expected Partner Weight:</span>{" "}
                  {data?.expectedPartnerWeight}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Expected Partner Height:</span>{" "}
                  {data?.expectedPartnerHeight}
                </div>
              </div>
            </div>
          </div>
          <hr className="py-[1px] mt-7 bg-pink-400" />
          <div className="mt-4 flex justify-between gap-5">
            <button
              id="favoritesButton"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
              onClick={handleFavoritesClick}
            >
              Add to Favorites
            </button>

            {premiumStatus ? (
              <div className="mb-2">
                <span className="font-bold">Mobile Number:</span>{" "}
                {data?.mobileNumber}
              </div>
            ) : (
              <button
                id="requestButton"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleRequestClick}
              >
                Request Contact
              </button>
            )}
          </div>
        </div>
        {/* Right side - Similar Biodata */}
        <div className="w-1/2 p-4">
          <h2 className="text-gray-800 text-lg font-bold mb-4">
            Similar Biodata
          </h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-2 font-bold">{data?.name}</div>
            <div className="mb-2">
              <span className="font-bold">Age:</span> {data?.age}
            </div>
            <div className="mb-2">
              <span className="font-bold">Address:</span> {data?.address}
            </div>
            <div className="mb-2">
              <span className="font-bold">Phone:</span> {data?.phone}
            </div>
            <div className="mb-2">
              <span className="font-bold">Skin Color:</span> {data?.skinColor}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
