import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHammer } from "react-icons/fa6";



export default function Home() {
  return (
    <main className='relative bg-gray-900 flex  flex-col overflow-hidden mx-auto' >
      <div className="">
        <FloatingNav
          navItems={[
            { name: 'home', link: '/', icon: <FaHammer /> }
          ]}
        />
        <Hero />
        <div className="sm:px-10">
          <Grid />
        </div>
        <RecentProjects />
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
