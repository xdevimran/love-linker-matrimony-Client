import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import PrimaryIconButton from "../../utils/Buttons/PrimaryIconButton";
import { FaGoogle } from "react-icons/fa";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import SecondaryButton from "../../utils/Buttons/SecondaryButton";

const SignIn = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await logInWithGoogle();
      const user = result.user;
      console.log("Google login successful:", user);

      // Extract relevant user data
      const { displayName, email } = user;

      // Check if user data has already been sent
      const isUserDataSent = localStorage.getItem("userDataSent");

      if (!isUserDataSent) {
        // Send user data to the server
        const userData = {
          name: displayName,
          email: email,
          isPremium: false,
          isAdmin: false,
        };

        await fetch("https://rb8a12.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        console.log("User data sent to the database:", userData);

        // Set a flag indicating that user data has been sent
        localStorage.setItem("userDataSent", "true");
      }

      // Redirect to the desired route after Google login
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // Handle Google login error
      console.error(error);
    }
  };

  const showError = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const showSuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const { logIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Login successful:", user);
        showSuccess("Login successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          showError("Password doesn't match.");
        } else if (error.code === "auth/user-not-found") {
          showError("Email doesn't match.");
        } else {
          showError("An error occurred while logging in.");
        }
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>PHero | Login</title>
      </Helmet>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              autoComplete="current-password"
              required
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-gray-600">
                {`${"Don't have an account? "}`}
                <Link to="/signup" className="font-medium text-[#ed137d]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <PrimaryButton type="submit">Login</PrimaryButton>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-gray-500">Or sign in with</p>
          <div className="mt-2 flex justify-center">
            <SecondaryButton>
              <PrimaryIconButton
                onClick={handleGoogleLogin}
                icon={<FaGoogle />}
              >
                {" "}
                Continue with Google{" "}
              </PrimaryIconButton>
            </SecondaryButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
