import Image from "next/image";
import topLeft from "../assets/about_page/background/top-left.svg";
import middle from "../assets/about_page/background/middle.svg";
import sustainabilityGoals from "../assets/about_page/sustainability_goals.png";
import EmblaCarousel from "../components/PhotoCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../image_carousel.css";
import { performRequest } from "../utils/fetcher";
import { GET_CAROUSEL_IMAGES, GET_VOLUNTEER_QUOTES } from "../utils/queries";
import { CarouselImage, VolunteerQuote } from "../utils/types";
import QuoteCycle from "../components/Quote";

async function About() {
  const res = await performRequest({
    query: GET_CAROUSEL_IMAGES,
    revalidate: 30,
  });

  const quotesResponse = await performRequest({
    query: GET_VOLUNTEER_QUOTES,
    revalidate: 30,
  });

  const quotes: VolunteerQuote[] = quotesResponse.allVolunteerQuotes;

  const imageUrls: CarouselImage[] = res.allImageGalleries[0].carouselContent;

  const OPTIONS: EmblaOptionsType = { loop: true };

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
        <div className="flex flex-col gap-16 px-8 md:w-[50vw] pb-10">
          <h1 className="mb-0 mt-16 text-4xl font-medium">About ReStore</h1>
          <div>
            <h2 className="mb-6">Our story</h2>
            <p>
              ReStore is a volunteer organization with roots in Trondheim, started in February 2019 by NTNU students. 
              At ReStore, we work towards upcycling goods, with the goal of
              creating a greener and more inclusive society. In May 2019, in 
              collaboration with Sit Bolig, ReStore was set up in an old
              kindergarten in the Moholt student village and accepted its first
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
              ReStore is built on three core values: sustainability, friendliness, and inclusivity.
              We are committed to working together towards a greener future. Waste not, want not!
              By encouraging and facilitating the reuse of items students need, from furniture to bikes, 
              we aim to reduce the need for purchasing new ones and thereby minimize emissions. 
              This also helps to raise awareness about the potential for items to have multiple lifetimes, 
              inspiring more people to donate unwanted items and opt for second-hand alternatives instead of buying new ones.
              What makes this possible is our teamwork. ReStore is like one big family of volunteers from different countries who join to make an impact. 
              We work to keep a friendly and welcoming environment that inspires a sense of belonging and responsibility among everyone involved.
            </p>
          </div>
          <Image src={sustainabilityGoals} alt={""} className="pb-10" />

          <div className="md:h-48 h-56">
            <QuoteCycle quotes={quotes} />
          </div>
        </div>
      </div>
      <EmblaCarousel slides={imageUrls} options={OPTIONS} />
    </>
  );
}

export default About;
