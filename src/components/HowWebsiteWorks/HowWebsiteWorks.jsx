import PrimaryTitle from "../../utils/Titles/PrimaryTitle";
import { FaPeopleArrows, FaRegUser, FaSearch } from "react-icons/fa";

const HowWebsiteWorks = () => {
  return (
    <section className="pt-24 pb-10 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <PrimaryTitle>How ❤️Linker works</PrimaryTitle>
        <p className="mb-20 text-lg text-gray-900 text-center font-medium md:max-w-lg mx-auto">
          Create your profile, find biodata, and connect with others on
          ❤️Linker.
        </p>

        <div className="flex flex-wrap -m-8">
          {/* Create Profile */}
          <div className="w-full md:w-1/3 p-8">
            <div className="relative text-center">
              <img
                className="absolute -right-40 top-8"
                src="https://shuffle.dev/flaro-assets/images/how-it-works/line4.svg"
                alt=""
              />
              <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-pink-100 rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FaRegUser />
                </div>
              </div>
              <div className="md:max-w-xs mx-auto">
                <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">
                  Create Profile
                </h3>
                <p className="font-sans text-gray-600">
                  Set up your personal profile and share your interests and
                  details with others.
                </p>
              </div>
            </div>
          </div>

          {/* Find Biodata */}
          <div className="w-full md:w-1/3 p-8">
            <div className="relative text-center">
              <img
                className="absolute -right-40 top-8"
                src="https://shuffle.dev/flaro-assets/images/how-it-works/line4.svg"
                alt=""
              />
              <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-[#ED137D] rounded-full">
                <img
                  className="absolute top-0 left-0"
                  src="flaro-assets/images/how-it-works/gradient.svg"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                  <FaSearch />
                </div>
              </div>
              <div className="md:max-w-xs mx-auto">
                <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">
                  Find Biodata
                </h3>
                <p className="font-sans text-gray-600">
                  Browse through profiles to find biodata of individuals that
                  match your preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Connect with Others */}
          <div className="w-full md:w-1/3 p-8">
            <div className="text-center">
              <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-pink-100 rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FaPeopleArrows />
                </div>
              </div>
              <div className="md:max-w-xs mx-auto">
                <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">
                  Connect with Others
                </h3>
                <p className="font-sans text-gray-600">
                  Start meaningful conversations and build connections with
                  individuals who share similar interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWebsiteWorks;
