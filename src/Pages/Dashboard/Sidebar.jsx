/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaUserFriends,
  FaHeart,
  FaSignOutAlt,
  FaRegCheckSquare,
  FaPhone,
  FaHome,
  FaInbox,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserDashboardWrapper = "flex h-screen"; // Make the wrapper full height
const DashboardContainer = "container mx-auto flex"; // Using Tailwind CSS classes
const Navigation = "bg-black text-white p-4"; // Using Tailwind CSS classes, added background color and width
const Content = "flex-1 p-4"; // Using Tailwind CSS classes
const MenuItem = "flex items-center mb-4 text-lg"; // Using Tailwind CSS classes, adjusted text size
const Icon = "mr-4"; // Using Tailwind CSS classes

const Sidebar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const email = user?.email;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://rb8a12.onrender.com/user/?email=${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);

        if (data.length > 0) {
          // Check if data is available and update isAdmin state
          setIsAdmin(data[0].isAdmin);
        }
      });
  }, [email]);

  if (loading || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={UserDashboardWrapper}>
      <div className={DashboardContainer}>
        <div className={Navigation}>
          {isAdmin ? (
            <>
              {/* Admin specific links */}
              <Link to="/dashboard/admin-dashboard" className={MenuItem}>
                <span className={Icon}>
                  <FaInbox />
                </span>{" "}
                Dashboard
              </Link>
              <Link to="/dashboard/manage-users" className={MenuItem}>
                <span className={Icon}>
                  <FaUserFriends />
                </span>{" "}
                Manage Users
              </Link>
              <Link to="/dashboard/approved-premium" className={MenuItem}>
                <span className={Icon}>
                  <FaRegCheckSquare />
                </span>{" "}
                Approved Premium
              </Link>
              <Link
                to="/dashboard/approved-contact-request"
                className={MenuItem}
              >
                <span className={Icon}>
                  <FaPhone />
                </span>{" "}
                Approved Contact Request
              </Link>
              {/* Admin specific links */}
            </>
          ) : (
            <>
              <Link to="/dashboard/edit-biodata" className={MenuItem}>
                <span className={Icon}>
                  <FaEdit />
                </span>{" "}
                Edit Biodata
              </Link>

              <Link to="/dashboard/view-biodata" className={MenuItem}>
                <span className={Icon}>
                  <FaEye />
                </span>{" "}
                View Biodata
              </Link>

              <Link to="/dashboard/contact-request" className={MenuItem}>
                <span className={Icon}>
                  <FaUserFriends />
                </span>{" "}
                My Contact Request
              </Link>

              <Link to="/dashboard/favourites" className={MenuItem}>
                <span className={Icon}>
                  <FaHeart />
                </span>{" "}
                Favourites Biodata
              </Link>
            </>
          )}

          <Link onClick={logOut} className={MenuItem}>
            <span className={Icon}>
              <FaSignOutAlt />
            </span>{" "}
            Logout
          </Link>

          <hr />
          <Link to={"/"} className={MenuItem}>
            <span className={Icon}>
              <FaHome />
            </span>{" "}
            Back to Home
          </Link>
        </div>

        <div className={Content}></div>
      </div>
    </div>
  );
};

export default Sidebar;
