import Hero from "./components/Hero";
import Stats from "./components/Stats";
import LeagueFormat from "./components/LeagueFormat";
import SponsorIntegration from "./components/SponsorIntegration";
import WhyUs from "./components/WhyUs";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import Platforms from "./components/Platforms";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import TopBar from "./components/TopBar";
import PlatformsDetailed from "./components/PlatformsDetailed";
import ContentProof from "./components/ContentProof";
import Demographics from "./components/Demographics";
import Founders from "./components/Founders";

export default function App() {
  return (
    <div className="text-gray-800">
      <TopBar />
      <Hero />
      <Stats />
      <LeagueFormat />
      <SponsorIntegration />
      <PlatformsDetailed />
      <Gallery />
      <WhyUs />
      <Demographics />
      <Sponsors />
      <Platforms />
      <ContentProof />
      <Pricing />
      <Founders />
      <CTA />
      <a
        href="https://wa.me/917622014780"
        target="_blank"
        className="fixed bottom-6 right-6 bg-primary text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}