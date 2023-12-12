import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/FirebaseConfig";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import Swal from "sweetalert2";

const SignUp = () => {
  const auth = getAuth(app);
  const { createUser } = useContext(AuthContext);

  const Navigate = useNavigate();

  const showError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const photoURL = data.get("photoURL");

    if (password.length < 6) {
      showError("Password must be at least 6 characters.");
    } else if (!/[A-Z]/.test(password)) {
      showError("Password must contain at least one capital letter.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      showError("Password must contain at least one special character.");
    } else {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);

          if (auth.currentUser) {
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photoURL,
            })
              .then(() => {
                console.log("Profile updated!");
                // Send user data to the database
                const userData = {
                  name: name,
                  email: email,
                  isPremium: false,
                  isAdmin: false,
                };

                fetch("https://rb8a12.onrender.com/user", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("User data sent to the database:", data);
                  })
                  .catch((error) => {
                    console.error(
                      "Error sending user data to the database:",
                      error
                    );
                  });

                // Show SweetAlert for successful sign-up
                Swal.fire({
                  icon: "success",
                  title: "Success!",
                  text: "User created successfully.",
                });

                // navigate after sign-up
                Navigate("/");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>PHero | Sign Up</title>
      </Helmet>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Form fields */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="text"
              required
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Photo URL"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-gray-500">
                Already have an account?{" "}
                <Link to="/signin" className="font-medium text-[#ed137d]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          {/* ... */}
          <div className="flex justify-center">
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
