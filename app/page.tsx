import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyUs from "@/components/WhyUs"
import Services from "@/components/Services"
import Process from "@/components/Process"
import CTA from "@/components/CTA"
import FeaturedProjects from "@/components/FeaturedProjects"
import Contact from "@/components/Contact"
export default function Home(){
  return(
    <div className="relative min-h-screen w-full">
      <Hero/>
      <About/>
      <WhyUs/>
      <Services/>
      <Process/>
      <FeaturedProjects/>
      <CTA/>
      <Contact/>
    </div>
  )
}