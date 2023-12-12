/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const EditBiodata = () => {
  const { user } = useContext(AuthContext);
  const [biodata, setBiodata] = useState({
    biodataType: "",
    name: "",
    profileImage: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    age: "",
    occupation: "",
    race: "",
    fathersName: "",
    mothersName: "",
    permanentDivision: "",
    presentDivision: "",
    expectedPartnerAge: "",
    expectedPartnerHeight: "",
    expectedPartnerWeight: "",
    contactEmail: "user@example.com", // Assuming this is fetched from user data
    mobileNumber: "",
    premium: false,
    email: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prevBiodata) => ({
      ...prevBiodata,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your server is running on https://rb8a12.onrender.com
      const apiUrl = "https://rb8a12.onrender.com/biodata";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(biodata),
      });

      if (response.ok) {
        // sweetaleart2
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Biodata updated successfully",
        });
      } else {
        console.error("Failed to submit biodata:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting biodata:", error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <PrimaryTitle>Edit Biodata</PrimaryTitle>
      </div>
      <form onSubmit={handleSubmit}>
        {/* row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="mb-4">
            <label htmlFor="biodataType" className="block text-gray-700">
              Biodata Type
            </label>
            <select
              id="biodataType"
              name="biodataType"
              value={biodata.biodataType}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Biodata Type</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={biodata.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block text-gray-700">
              Profile Image Link
            </label>
            <input
              type="text"
              id="profileImage"
              name="profileImage"
              value={biodata.profileImage}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={biodata.dateOfBirth}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700">
              Height
            </label>
            <input
              type="text"
              id="height"
              name="height"
              value={biodata.height}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700">
              Weight
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={biodata.weight}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={biodata.age}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="occupation" className="block text-gray-700">
              Occupation
            </label>
            <select
              id="occupation"
              name="occupation"
              value={biodata.occupation}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Occupation</option>
              {/* Add occupation options */}
              <option value="Doctor">Doctor</option>
              <option value="Engineer">Engineer</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>
        {/* row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <label htmlFor="race" className="block text-gray-700">
              Race
            </label>
            <select
              id="race"
              name="race"
              value={biodata.race}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Race</option>
              {/* Add race options */}
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Indian">Indian</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="fathersName" className="block text-gray-700">
              Father's Name
            </label>
            <input
              type="text"
              id="fathersName"
              name="fathersName"
              value={biodata.fathersName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mothersName" className="block text-gray-700">
              Mother's Name
            </label>
            <input
              type="text"
              id="mothersName"
              name="mothersName"
              value={biodata.mothersName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        {/* row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <label htmlFor="presentDivision" className="block text-gray-700">
              Present Division
            </label>
            <select
              id="presentDivision"
              name="presentDivision"
              value={biodata.presentDivision}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Present Division</option>
              {/* Add division options */}
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="expectedPartnerAge" className="block text-gray-700">
              Expected Partner Age
            </label>
            <input
              type="text"
              id="expectedPartnerAge"
              name="expectedPartnerAge"
              value={biodata.expectedPartnerAge}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expectedPartnerHeight"
              className="block text-gray-700"
            >
              Expected Partner Height
            </label>
            <input
              type="text"
              id="expectedPartnerHeight"
              name="expectedPartnerHeight"
              value={biodata.expectedPartnerHeight}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        {/* row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <label htmlFor="permanentDivision" className="block text-gray-700">
              Permanent Division
            </label>
            <select
              id="permanentDivision"
              name="permanentDivision"
              value={biodata.permanentDivision}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Permanent Division</option>
              {/* Add division options */}
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={biodata.mobileNumber}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expectedPartnerWeight"
              className="block text-gray-700"
            >
              Expected Partner Weight
            </label>
            <input
              type="text"
              id="expectedPartnerWeight"
              name="expectedPartnerWeight"
              value={biodata.expectedPartnerWeight}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        {/* ... submit button */}
        <div className="mt-4 flex gap-4">
          <PrimaryButton
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
          >
            Save Biodata
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default EditBiodata;
