import { Helmet } from "react-helmet-async";
import Hero from "../../components/Header/Hero";
import ProUsers from "../../components/Users/ProUsers";
import HowWebsiteWorks from "../../components/HowWebsiteWorks/HowWebsiteWorks";
import SuccessCounter from "../../components/SuccessCounter/SuccessCounter";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PHero | Home Page</title>
      </Helmet>
      <Hero />
      <ProUsers />
      <HowWebsiteWorks />
      <SuccessCounter />
      <SuccessStories />
    </div>
  );
};

export default Home;
