import { useState, useEffect } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import Chance from "chance";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";

const chance = new Chance();

const generateFakeContactRequests = () => {
  const fakeData = [];
  for (let i = 0; i < 10; i++) {
    fakeData.push({
      name: chance.name(),
      email: chance.email(),
      biodataId: chance.integer({ min: 10000, max: 99999 }).toString(),
      isApproved: false,
    });
  }
  return fakeData;
};

const ApprovedContactRequests = () => {
  const [contactRequests, setContactRequests] = useState(
    generateFakeContactRequests()
  );

  const handleApproveContact = (biodataId) => {
    const updatedContactRequests = contactRequests.map((request) =>
      request.biodataId === biodataId
        ? { ...request, isApproved: !request.isApproved }
        : request
    );

    setContactRequests(updatedContactRequests);
  };

  useEffect(() => {
    setContactRequests(generateFakeContactRequests());
  }, []); // Fetch new fake data on component mount

  return (
    <div className="p-4">
      <div className="flex">
        <PrimaryTitle>Approved Contact Requests</PrimaryTitle>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Biodata Id</th>
            <th className="py-2 px-4 border-b">Approve Contact</th>
          </tr>
        </thead>
        <tbody>
          {contactRequests.map((request, index) => (
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
                    request.isApproved
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-pink-500 hover:bg-pink-600"
                  } text-white`}
                  onClick={() => handleApproveContact(request.biodataId)}
                >
                  {request.isApproved ? (
                    <RiCheckboxCircleLine className="text-white" />
                  ) : (
                    <RiCheckboxBlankCircleLine className="text-white" />
                  )}
                  <span className="ml-2">
                    {request.isApproved ? "Approved" : "Approve Contact"}
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedContactRequests;
