import Image from "next/image";
import someImage from "./assets/landing_page/img2.png";
import bottomLeft from "./assets/landing_page/bottom-left.svg";
import bottomRight from "./assets/landing_page/bottom-right.svg";
import midLeft from "./assets/landing_page/mid-left.svg";
import ContentSection from "./components/ContentSection";
import InfoGraphic from "./components/InfoGraphic";
import Quote from "./components/Quote";
import VolunteerButton from "./components/VolunteerButton";
import heroRight from "./assets/landing_page/hero-right.svg";
import heroRightMobile from "./assets/landing_page/mobile.svg";
import headerTextMobile from "./assets/landing_page/hero-text-mobile.svg";

export default function Home() {
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
          <h1>TESTING</h1>
        </div>
      </div>

      <Image
        src={heroRight}
        alt={""}
        className="hidden sm:block -z-50 absolute top-0 right-0 w-1/2 mix-blend-multiply line-animation"
      />
      <Image
        src={heroRightMobile}
        alt={""}
        className="block sm:hidden -z-50 absolute top-0 right-0 w-1/2 mix-blend-multiply line-animation"
      />

      <div className="w-full z-50 flex flex-col items-center gap-20 lg:gap-32 px-10 lg:px-20 ">
        <ContentSection
          leftImage={undefined}
          rightImage={undefined}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <InfoGraphic isLeftLayout={true} />

        <ContentSection
          leftImage={someImage}
          rightImage={undefined}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
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

        <InfoGraphic isLeftLayout={true} />

        <ContentSection
          leftImage={undefined}
          rightImage={someImage}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <Quote
          content="“During my time at Restore I have made friends for life!”"
          author={"- Volunteer name"}
        />
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
