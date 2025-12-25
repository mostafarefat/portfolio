import Articles from "./components/Articles";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Services from "./components/Services";
export default function Home() {
  return (
    <div>
      <Hero/>
      <ProjectCard/>
      <Services/>
      <Articles/>
    </div>
  );
}
