import Image from "next/image";
import topLeft from "../assets/about_page/background/top-left.svg";
import middle from "../assets/about_page/background/middle.svg";
import EmblaCarousel from "../components/PhotoCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../image_carousel.css";
import { performRequest } from "../utils/fetcher";
import { GET_CAROUSEL_IMAGES, GET_VOLUNTEER_QUOTES, GET_ALL_ABOUT_SECTIONS_QUERY } from "../utils/queries";
import { AboutSection, CarouselImage, VolunteerQuote } from "../utils/types";
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

  const aboutSectionsResponse = await performRequest({
    query: GET_ALL_ABOUT_SECTIONS_QUERY,
    revalidate: 30,
  });


  const quotes: VolunteerQuote[] = quotesResponse.allVolunteerQuotes;
  
  const aboutSections: AboutSection[] = aboutSectionsResponse.aboutpage?.aboutsection ?? [];

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
          <h1 className="mb-0 mt-16 text-4xl font-medium">About Us</h1>
          {aboutSections.map((section) => (
            <section key={section.id}>
              {section.sectionTitle && <h2 className="mb-6">{section.sectionTitle}</h2>}
              {section.sectionText && <p className="whitespace-pre-line">{section.sectionText}</p>}
              {section.sectionImage.map((block) => {
                if (!block.image) return null;

                const image = (
                  <Image
                    src={block.image.url}
                    alt={block.image.alt ?? section.sectionTitle ?? ""}
                    width={block.image.width ?? 800}
                    height={block.image.height ?? 600}
                    className="mt-16 pb-10"
                  />
                );

                return block.imagelink ? (
                  <a key={block.id} href={block.imagelink} target="_blank" rel="noopener noreferrer">
                    {image}
                  </a>
                ) : (
                  <div key={block.id}>{image}</div>
                );
              })}
            </section>
          ))}
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
