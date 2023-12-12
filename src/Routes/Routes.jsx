// YourRouter.js
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import NotFound404 from "../components/NotFound404/NotFound404";
import BiodatasPage from "../Pages/Biodata/BiodatasPage";
import BiodataDetails from "../Pages/Biodata/BiodataDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import EditBiodata from "../Pages/Biodata/EditBiodata";
import ViewBiodata from "../Pages/Biodata/ViewBiodata";
import FavouritesBiodata from "../Pages/Biodata/FavouritesBiodata";
import MyContactRequest from "../Pages/Biodata/MyContactRequest";
import ManageUsers from "../components/Admin/ManageUsers";
import ApprovedPremium from "../components/Admin/ApprovedPremium";
import ApprovedContactRequest from "../components/Admin/ApprovedContactRequest";
import AdminDashboard from "../components/Admin/AdminDashboard";
import PrivetRoute from "./PrivetRoute";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
  {
    // Dashboard layout(User Dashboard)
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "edit-biodata",
        element: (
          <PrivetRoute>
            <EditBiodata />
          </PrivetRoute>
        ),
      },
      {
        path: "view-biodata",
        element: (
          <PrivetRoute>
            <ViewBiodata />
          </PrivetRoute>
        ),
      },
      {
        path: "favourites",
        element: (
          <PrivetRoute>
            <FavouritesBiodata />
          </PrivetRoute>
        ),
      },
      {
        path: "contact-request",
        element: (
          <PrivetRoute>
            <MyContactRequest />
          </PrivetRoute>
        ),
      },
      // dashboard layout admin layout
      {
        path: "admin-dashboard",
        element: (
          <PrivetRoute>
            <AdminDashboard />
          </PrivetRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivetRoute>
            <ManageUsers />
          </PrivetRoute>
        ),
      },
      {
        path: "approved-premium",
        element: (
          <PrivetRoute>
            <ApprovedPremium />
          </PrivetRoute>
        ),
      },
      {
        path: "approved-contact-request",
        element: (
          <PrivetRoute>
            <ApprovedContactRequest />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biodatapage",
        element: <BiodatasPage />,
      },
      {
        path: "/biodata-details/:id",
        element: (
          <PrivetRoute>
            <BiodataDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
