import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SecondaryButton from "../../utils/Buttons/SecondaryButton";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>PHero | 404 Not Found</title>
      </Helmet>
      <img
        className="w-40 h-40 mb-4"
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344473-3613901.png"
        style={{ width: "250px", height: "250px" }}
        alt=""
      />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        404 Not Found
      </h1>
      <p className="text-gray-600 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 mt-4 hover:underline">
        <SecondaryButton className="btntext-white py-2 px-4 rounded">
          Go back to the Home Page
        </SecondaryButton>
      </Link>
    </div>
  );
};

export default NotFound404;
