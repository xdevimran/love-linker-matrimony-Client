import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";
import { AuthContext } from "../../Providers/AuthProvider";

const MyContactRequest = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  console.log("email", email);

  const [contactRequests, setContactRequests] = useState([]);
  console.log("contactRequests", contactRequests);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          `https://rb8a12.onrender.com/contactRequest/?reqEmail=${email}`
        );
        if (!response.ok) {
          throw new Error(
            `Error fetching contact requests: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        // Update the local state with the fetched data
        setContactRequests(data);
      } catch (error) {
        console.error(error);
        // You might want to show an error message to the user
      }
    };

    // Call the fetchData function
    fetchData();
  }, [email]);

  const handleDeleteButtonClick = (contactRequestId) => {
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
        console.log("Delete button clicked. Deleting contact request...");

        // Send DELETE request to the API
        fetch(
          `https://rb8a12.onrender.com/contactRequest/${contactRequestId}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server, if needed
            console.log("Contact request deleted successfully", data);

            // Update the local state to reflect the deleted contact request
            setContactRequests((prevRequests) =>
              prevRequests.filter((request) => request._id !== contactRequestId)
            );

            Swal.fire(
              "Deleted!",
              "Contact request has been deleted.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error deleting contact request:", error);
            Swal.fire("Error", "Failed to delete contact request.", "error");
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <PrimaryTitle>My Contact Requests</PrimaryTitle>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Biodata Id</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactRequests.map((request, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{request.name}</td>
              <td className="py-2 px-4 border-b">{request._id}</td>
              <td
                className={`py-2 px-4 border-b ${
                  request.status === "Approved"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {request.showContact}
              </td>
              <td className="py-2 px-4 border-b">{request.mobileNo}</td>
              <td className="py-2 px-4 border-b">{request.email}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDeleteButtonClick(request._id)}
                  className="bg-pink-500 text-white px-2 py-1 rounded"
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

export default MyContactRequest;
