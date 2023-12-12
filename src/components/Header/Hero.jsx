import { useEffect, useRef } from "react";
import PrimaryButton from "../../utils/Buttons/PrimaryButton";
import SecondaryButton from "../../utils/Buttons/SecondaryButton";

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", parallaxScroll);

    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  return (
    <div>
      <section
        className="bg-gray-50"
        ref={parallaxRef}
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp9166898.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="mx-auto  px-4 py-32 lg:flex lg:h-screen lg:items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Change the color and opacity as needed
          }}
        >
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Welcome to ❤️Linker
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-white">
              The ultimate platform for finding your next love.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </PrimaryButton>

              <SecondaryButton
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
