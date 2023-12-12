/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";

const UserCard = ({ user }) => {
  // const { biodataId, biodataType, permanentDivision, age, occupation, role } =
  //   user;
  const {
    _id,
    biodataType,
    permanentDivision,
    age,
    occupation,
    role,
    profileImage,
  } = user;

  return (
    <div className="w-96 mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        {/* Placeholder Image */}
        <img
          className="w-full h-48 object-cover"
          src={profileImage}
          alt="Profile Image"
        />

        {/* Role Badge */}
        <span className="absolute top-2 right-2 inline-block bg-green-500 text-white px-2 py-1 text-xs font-semibold uppercase rounded-full">
          {role}
        </span>
      </div>

      <div className="px-6 py-4">
        {/* Biodata Id and Type */}
        <div className="text-xs text-gray-500 mb-2">
          Biodata Id: {_id} | Biodata Type: {biodataType}
        </div>

        {/* Permanent Division Name */}
        <div className="text-sm font-semibold text-pink-500 mb-2">
          Permanent Division: {permanentDivision}
        </div>

        {/* Age and Occupation */}
        <div className="text-xs text-gray-500 mb-2">
          Age: {age} | Occupation: {occupation}
        </div>

        {/* View Profile Button */}
        <Link to={`/biodata-details/${_id}`}>
          <PrimaryButton>View Profile</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
