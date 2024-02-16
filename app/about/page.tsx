import someImage from "../assets/landing_page/img2.png";
import SvgComponent from "../components/HeroRightSvg";
import ContentSection from "../components/ContentSection";
import VolunteerButton from "../components/VolunteerButton";
import ProjectButton from "./ProjectButton";

export default function Home() {
  return (
    <main className="z-10 relative w-full flex min-h-screen flex-col items-center justify-between bg-background">
      <div className="flex justify-between w-full ">
        <div className="relative  aspect-square sm:h-[400px] md:h-[500px] lg:h-screen text-[48px] sm:text-[62px] md:text-[96px] lg:text-[128px] flex flex-col pl-10 lg:pl-40 font-light top-[20vh]">
          <p className="leading-none">ABOUT</p>
          <div className="flex text-restore-pink leading-none">
            <div className="font-bold">RE</div>STORE
            <div className="font-bold">.</div>
          </div>
        </div>
      </div>

      <div className="z-0 absolute top-0 right-0 w-1/2 h-full mix-blend-multiply">
        <SvgComponent />
      </div>

      <div className="w-full z-50 flex flex-col items-center gap-20 lg:gap-32 px-10 lg:px-20 pt-32">
        {/* Our Story */}
        <h3 className="text-2xl lg:text-[34px] font-bold">Our Story</h3>
        <ContentSection
          leftImage={undefined}
          rightImage={someImage}
          title=""
          content="ReStore is a student organization with roots in Trondheim. At ReStore, we work towards upcycling goods, with the goal of creating a greener and more inclusive society.
          In May 2019, in a collaboration with SiT Bolig, ReStore was set up in an old kindergarten in Moholt student village and accepted its first donations from outgoing students.
          At the end of each semester, outgoing students discard tonnes of usable goods when they return home from exchange. Every January and August, new students arrive and need to buy new housewares- the same types that were thrown away only months before. This mismatch in timing between supply and demand perpetuates a cycle of waste. ReStore bridges this gap and facilitates the reuse of goods by storing donated goods for incoming students."
        />

        {/* Our Projects */}
        <h3 className="text-2xl lg:text-[34px] font-bold">Our Projects</h3>
        <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectButton name="Project 1" />
          <ProjectButton name="Project 2" />
          <ProjectButton name="Project 3" />
          <ProjectButton name="Project 4" />
          <ProjectButton name="Project 5" />
          <ProjectButton name="Project 6" />
        </div>

        <VolunteerButton />
      </div>
    </main>
  );
}
