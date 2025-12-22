import Articles from "./components/Articles";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Services from "./components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProjectCard/>
      <Services/>
      <Articles/>
      <Image src={"/images/Frame11.png"} alt="img" width={1000} height={1}></Image>
    </div>
  );
}
