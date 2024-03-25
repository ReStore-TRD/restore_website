import Image from "next/image";
import topLeft from "../assets/about_page/background/top-left.svg";
import middle from "../assets/about_page/background/middle.svg";
import sustainabilityGoals from "../assets/about_page/sustainability_goals.png";
import Quote from "../components/Quote";
import EmblaCarousel from "../components/PhotoCarousel";
import { EmblaOptionsType } from "embla-carousel";
import exampleImage from "../assets/about_page/example_image_about_us.png";
import "../image_carousel.css";

function About() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const imageArray = [
    exampleImage,
    exampleImage,
    exampleImage,
    exampleImage,
    exampleImage,
    exampleImage,
  ];
  return (
    <>
      <Image
        src={topLeft}
        alt={""}
        className="hidden md:block -z-50 absolute top-1/12 left-0 w-1/6 mix-blend-multiply line-animation"
      />
      <Image
        src={middle}
        alt={""}
        className="hidden md:block -z-50 absolute top-[50vh] right-[5vw] w-1/12 mix-blend-multiply line-animation"
      />
      <div className="w-full flex justify-center">
        <div className=" flex flex-col gap-16 px-8 md:w-[50vw] pb-28">
          <h1 className="mb-0 mt-16 text-4xl font-medium">About ReStore</h1>
          <div>
            <h2 className="mb-6">Our story</h2>
            <p>
              ReStore is a student organization with roots in Trondheim. At
              ReStore, we work towards upcycling goods, with the goal of
              creating a greener and more inclusive society. In May 2019, in a
              collaboration with SiT Bolig, ReStore was set up in an old
              kindergarten in Moholt student village and accepted its first
              donations from outgoing students. At the end of each semester,
              outgoing students discard tonnes of usable goods when they return
              home from exchange. Every January and August, new students arrive
              and need to buy new housewares- the same types that were thrown
              away only months before. This mismatch in timing between supply
              and demand perpetuates a cycle of waste. ReStore bridges this gap
              and facilitates the reuse of goods by storing donated goods for
              incoming students.
            </p>
          </div>

          <div>
            <h2 className="mb-6">Our goals</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Image src={sustainabilityGoals} alt={""} className="pb-10" />

          <Quote
            content="“During my time at Restore I have made friends for life!”"
            author={"- Volunteer name"}
          />
        </div>
      </div>
      <EmblaCarousel slides={imageArray} options={OPTIONS} />
    </>
  );
}

export default About;
