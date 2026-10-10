import Hero from "../component/Hero";
import ConnectedSection from "../component/ConnectedSection";
import TimelineSection from "../component/TimelineSection.jsx";
import FeaturesGrid from "../component/FeaturesGrid.jsx";
import Testimonials from "../component/Testimonials.jsx";
import JoinUs from "../component/JoinUs.jsx";
import Experience from "../component/Experience.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <ConnectedSection />
      <FeaturesGrid />
      <TimelineSection />
      <Experience />
      <Testimonials />
      <JoinUs />
    </main>
  );
};

export default Home;
