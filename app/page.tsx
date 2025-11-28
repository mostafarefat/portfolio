import Guides from "./components/Guides";
import Hero from "./components/Hero";
import ResourcesCard from "./components/ResourcesCard";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ResourcesCard/>
      <Services/>
      <Guides/>
    </div>
  );
}
