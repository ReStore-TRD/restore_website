import Image from "next/image";
import someImage from "./assets/landing_page/fromfor.jpg";
import someImage2 from "./assets/landing_page/tables.jpg";
import someImage3 from "./assets/landing_page/kitchen.jpg";
import bottomLeft from "./assets/landing_page/bottom-left.svg";
import bottomRight from "./assets/landing_page/bottom-right.svg";
import midLeft from "./assets/landing_page/mid-left.svg";
import ContentSection from "./components/ContentSection";
import InfoGraphic from "./components/InfoGraphic";
import VolunteerButton from "./components/VolunteerButton";
import heroRight from "./assets/landing_page/hero-right-old.svg";
import heroLeft from "./assets/landing_page/hero-left2.svg";
import heroRightMobile from "./assets/landing_page/hero-right-mobile2.svg";
import headerTextMobile from "./assets/landing_page/hero-text-mobile.svg";
import BasicBars from "./components/charts/BarChart";
import { performRequest } from "./utils/fetcher";
import { GET_CO2_PIE_CHART_DATA_QUERY, GET_RESEARCH_DATA_QUERY, GET_VOLUNTEER_QUOTES} from "./utils/queries";
import { ResearchData, VolunteerQuote, PieChartData, CategoryItem  } from "./utils/types";
import volunteersMap from "./assets/landing_page/infographics/volunteers-map.svg";
//import pieChart from "./assets/landing_page/infographics/pie-chart-new-font.svg";
import QuoteCycle from "./components/Quote";
import ButtonHover from "./assets/navigation_bar/join_us.svg"
import PieChart from "./components/charts/PieChart";


export default async function Home() {
  const researchDataResponse = await performRequest({
    query: GET_RESEARCH_DATA_QUERY,
    revalidate: 0,
  });

  const quotesResponse = await performRequest({
    query: GET_VOLUNTEER_QUOTES,
    revalidate: 0,
  });

  const pieChartDataResponse = await performRequest({
    query: GET_CO2_PIE_CHART_DATA_QUERY,
    revalidate: 0,
  });


  const researchData: ResearchData = researchDataResponse.allResearches[0];
  const quotes: VolunteerQuote[] = quotesResponse.allVolunteerQuotes;
  const co2ChartData : CategoryItem[] = pieChartDataResponse.allPieCharts[0]?.chartData ?? [];


  
  return (
    <main className="z-10 relative w-full flex min-h-screen flex-col items-center justify-between bg-background">
      <div className="flex flex-col w-full mb-24 aspect-square md:aspect-auto md:h-[90vh] ">
        <div className="flex w-2/3 md:w-1/2 mt-6 md:mt-10 ml-8 md:ml-0 mr-16 mb-0 aspect-square sm:aspect-auto h-40 md:h-80">
          <Image
            src={headerTextMobile}
            alt={""}
            layout="responsive"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className=" z-50 left-0 flex items-end hidden lg:block">
            <Image
              src={heroLeft}
              alt={""}
              objectFit="contain"
              objectPosition="left"
              className="mix-blend-multiply w-1/3 md:w-1/2"
            />
          </div>
      </div>

      <Image
        src={heroRight}
        alt={""}
        className="hidden sm:block -z-50 absolute sm:-top-28 md:-top-20 right-0 mix-blend-multiply line-animation"
      />
      <Image
        src={heroRightMobile}
        alt={""}
        className="block sm:hidden  -z-50 absolute -top-20 right-0  mix-blend-multiply line-animation"
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
          content={<PieChart data= {co2ChartData} />}
          //content ={<Image src={pieChart} alt={""} />} //using image
          data={researchData.savedCo2InTons}
          text1={"ReStore has saved"}
          text2={"tons of CO2 since 2019!"}
        />

        <ContentSection
          leftImage={someImage2}
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
          isLeftLayout={true}
          content={<BasicBars data={researchData} />}
          data={researchData.totalVoluntaryHours}
          text1={"Since 2022, we have counted"}
          text2={"voluntary hours"}
        />

        <ContentSection
          leftImage={undefined}
          rightImage={someImage3}
          title="From Students, for Students"
          content="We have opening days, usually at the beginning of the semester, when you can come and 
          pick up the furniture you need for free. Check our opening dates on our social media channels.
          If you’ve got items you don’t need anymore but are too good to throw away, bring them to ReStore! 
          Check our FAQ for more information."
        />
        <InfoGraphic
          isLeftLayout={false}
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
        <div className="absolute top-2 right-2 transform translate-x-full opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src={ButtonHover}
            alt={""}
            objectFit="contain"
            className="mix-blend-multiply w-6 h-6"
          />
        </div>
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
