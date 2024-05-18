import Image from "next/image";
import someImage from "./assets/landing_page/img2.png";
import bottomLeft from "./assets/landing_page/bottom-left.svg";
import bottomRight from "./assets/landing_page/bottom-right.svg";
import midLeft from "./assets/landing_page/mid-left.svg";
import ContentSection from "./components/ContentSection";
import InfoGraphic from "./components/InfoGraphic";
import VolunteerButton from "./components/VolunteerButton";
import heroRight from "./assets/landing_page/hero-right.svg";
import heroRightMobile from "./assets/landing_page/mobile.svg";
import headerTextMobile from "./assets/landing_page/hero-text-mobile.svg";
import BasicBars from "./components/charts/BarChart";
import { performRequest } from "./utils/fetcher";
import { GET_RESEARCH_DATA_QUERY, GET_VOLUNTEER_QUOTES } from "./utils/queries";
import { ResearchData, VolunteerQuote } from "./utils/types";
import volunteersMap from "./assets/landing_page/infographics/volunteers-map.svg";
import pieChart from "./assets/landing_page/infographics/pie-chart.svg";
import QuoteCycle from "./components/Quote";

export default async function Home() {
  const researchDataResponse = await performRequest({
    query: GET_RESEARCH_DATA_QUERY,
    revalidate: 0,
  });

  const quotesResponse = await performRequest({
    query: GET_VOLUNTEER_QUOTES,
    revalidate: 0,
  });

  const researchData: ResearchData = researchDataResponse.allResearches[0];
  const quotes: VolunteerQuote[] = quotesResponse.allVolunteerQuotes;

  return (
    <main className="z-10 relative w-full flex min-h-screen flex-col items-center justify-between bg-background">
      <div className="flex w-full mb-24 aspect-square md:aspect-auto md:h-[90vh] ">
        <div className="flex w-2/3 md:w-1/2 mt-6 md:mt-32 ml-8 md:ml-0 mr-16 mb-0 aspect-square sm:aspect-auto h-56 md:h-80">
          <Image
            src={headerTextMobile}
            alt={""}
            layout="responsive"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </div>

      <Image
        src={heroRight}
        alt={""}
        className="hidden sm:block -z-50 absolute sm:-top-28 md:-top-20  right-0 w-1/2 mix-blend-multiply line-animation"
      />
      <Image
        src={heroRightMobile}
        alt={""}
        className="block sm:hidden -z-50 absolute -top-28 right-0 w-1/2 mix-blend-multiply line-animation"
      />

      <div className="w-full z-50 flex flex-col items-center gap-20 lg:gap-32 px-10 lg:px-20 ">
        <ContentSection
          leftImage={undefined}
          rightImage={undefined}
          title="Free Furniture, Free Friends"
          content="ReStore is a volunteer student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods in Trondheim."
        />
        <InfoGraphic
          isLeftLayout={true}
          content={
            <div>
              <Image src={pieChart} alt={""} />
            </div>
          }
          data={researchData.savedCo2InTons}
          text1={"ReStore saves a total of"}
          text2={"tons of CO2 each year!"}
        />

        <ContentSection
          leftImage={someImage}
          rightImage={undefined}
          title="New life for used goods"
          content="Making new products consumes high amounts of energy, resources 
          and causes environmental polution. By reusing of furniture, kitchen utensils 
          and many other household items, ReStore aims to extend the life cycle of products."
        />

        <div className="-z-50 absolute bottom-1/3 left-0 w-full h-96 flex justify-between ">
          <div className=" bottom-0 left-0 flex items-end">
            <Image
              src={midLeft}
              alt={""}
              objectFit="contain"
              className="mix-blend-multiply w-1/3 md:w-1/2"
            />
          </div>
        </div>

        <InfoGraphic
          isLeftLayout={false}
          content={<BasicBars data={researchData} />}
          data={researchData.totalVoluntaryHours}
          text1={"So far we have worked"}
          text2={"voluntary hours"}
        />

        <ContentSection
          leftImage={undefined}
          rightImage={someImage}
          title="From Students, for Students"
          content="We have opening days in the beginning of semester, when you can come and 
          pick up furniture you need for free. Check our opening dates on our social media channels.
          If you’ve got items you don’t need anymore but are too good to throw away, bring them to ReStore! 
          We also do pick up for heavy or big items for free. Check our FAQ for more information."
        />
        <InfoGraphic
          isLeftLayout={true}
          content={
            <div>
              <Image src={volunteersMap} alt={""} />
            </div>
          }
          data={researchData.numbeOfVolunteers}
          text1={"We are currently"}
          text2={"volunteers, and counting!"}
        />
        <div className="md:w-4/6 flex justify-center  h-96 md:h-48">
          <QuoteCycle quotes={quotes} />
        </div>
        <VolunteerButton />
      </div>

      <div className="-z-50 absolute bottom-0 w-full h-96 flex justify-between ">
        <div className=" bottom-0 left-0 flex items-end">
          <Image
            src={bottomLeft}
            alt={""}
            objectFit="contain"
            className="w-1/2"
          />
        </div>
        <div className="-z-50 bottom-0 left-0 flex justify-end items-center">
          <Image
            src={bottomRight}
            alt={""}
            objectFit="contain"
            className="w-1/3 md:w-1/2"
          />
        </div>
      </div>
    </main>
  );
}
