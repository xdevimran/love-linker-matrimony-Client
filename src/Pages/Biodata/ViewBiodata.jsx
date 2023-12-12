/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import SecondaryButton from "../../utils/Buttons/SecondaryButton";

const ViewBiodata = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://rb8a12.onrender.com/biodata/?email=${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [email]);

  const pureData = data[0];

  if (!pureData) {
    return (
      <div className="flex pt-20 justify-center w-full font-bold text-5xl text-center">
        <h1 className="text-pink-400">
          You haven't submitted <br /> your biodata yet.
        </h1>
      </div>
    );
  }

  if (Object.keys(pureData).length === 0) {
    return <div>You haven't submitted your biodata yet.</div>;
  }
  const proRequest = {
    name: pureData.name,
    email: pureData.email,
    biodataId: pureData._id,
    premium: pureData.premium,
  };
  const {
    _id,
    biodataType,
    name,
    profileImage,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    mobileNumber,
    premium,
  } = pureData;

  const handlePremiumButtonClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send a request for Premium biodata?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send request!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Add code to send the request here
        console.log(proRequest);
        fetch("https://rb8a12.onrender.com/biodataprorequest", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(proRequest),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire(
                "Request Sent!",
                "Your request has been sent.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex">
        <PrimaryTitle>View Biodata</PrimaryTitle>
      </div>

      {/* Biodata Container */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {/* Column 1: Image */}
        <div className="col-span-1">
          <img
            src={profileImage} // Make sure to provide the correct image source
            alt="Profile"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Column 2: Personal Information */}
        <div className="col-span-1">
          <label className="text-gray-600">Name:</label>
          <p>{name}</p>
          <label className="text-gray-600">Age:</label>
          <p>{age}</p>
          {/* Add more fields as needed */}
          <label className="text-gray-600">Date of Birth:</label>
          <p>{dateOfBirth}</p>
          <label className="text-gray-600">Height:</label>
          <p>{height}</p>
        </div>

        {/* Column 3: Additional Information */}
        <div className="col-span-1">
          <label className="text-gray-600">Occupation:</label>
          <p>{occupation}</p>
          <label className="text-gray-600">Race:</label>
          <p>{race}</p>
          {/* Add more fields as needed */}
          <label className="text-gray-600">Father's Name:</label>
          <p>{fathersName}</p>
          <label className="text-gray-600">Mother's Name:</label>
          <p>{mothersName}</p>
        </div>

        {/* Column 4: Division Information and Contact */}
        <div className="col-span-1">
          <label className="text-gray-600">Permanent Division:</label>
          <p>{permanentDivision}</p>
          <label className="text-gray-600">Present Division:</label>
          <p>{presentDivision}</p>
          {/* Partner Preferences */}
          <label className="text-gray-600">Expected Partner Age:</label>
          <p>{expectedPartnerAge}</p>
          <label className="text-gray-600">Expected Partner Height:</label>
          <p>{expectedPartnerHeight}</p>
          <label className="text-gray-600">Expected Partner Weight:</label>
          <p>{expectedPartnerWeight}</p>
          {/* Contact Information */}
          <label className="text-gray-600">Email:</label>
          <p>{contactEmail}</p>
          <label className="text-gray-600">Mobile Number:</label>
          <p>{mobileNumber}</p>
        </div>
      </div>

      {/* Premium Button */}
      <div className="flex justify-center">
        {pureData.premium ? (
          <SecondaryButton disabled>
            Your Biodata is Already Premium
          </SecondaryButton>
        ) : (
          <PrimaryButton onClick={handlePremiumButtonClick}>
            Send Premium Request
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default ViewBiodata;
