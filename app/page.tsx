import Image from "next/image";
import BlockComponent from "./BlockComponent";
import TextComponent from "./TextComponent";
import someImage from "./assets/landing_page/img2.png";
import heroRight from "./assets/landing_page/hero-right.svg";
import bottomLeft from "./assets/landing_page/bottom-left.svg";
import bottomRight from "./assets/landing_page/bottom-right.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between bg-background ">
      <div className="relative min-h-screen text-[96px] flex flex-col pl-40 top-[20vh]">
        <p>REUSE</p>
        <p>RETHINK</p>
        <p className="text-restore-pink">RESTORE.</p>
      </div>

      <Image
        src={heroRight}
        alt={""}
        className="absolute top-0 right-0 w-1/2  z-0 mix-blend-multiply"
      />

      <div className="flex flex-col gap-20 px-20">
        <TextComponent
          leftImage={undefined}
          rightImage={undefined}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <BlockComponent isLeftLayout={true} />

        <TextComponent
          leftImage={someImage}
          rightImage={undefined}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <BlockComponent isLeftLayout={false} />

        <TextComponent
          leftImage={undefined}
          rightImage={someImage}
          title="We give items new life"
          content="ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim."
        />
        <BlockComponent isLeftLayout={true} />
      </div>

      <div className="relative bottom-0 w-full h-96 flex justify-between ">
        <div className=" bottom-0 left-0 flex items-end">
          <Image
            src={bottomLeft}
            alt={""}
            objectFit="contain" // Adjust as needed
            className="mix-blend-multiply w-1/2"
          />
        </div>
        <div className=" bottom-0 left-0 flex justify-end items-center">
          <Image
            src={bottomRight}
            alt={""}
            objectFit="contain" // Adjust as needed
            className="mix-blend-multiply w-1/2"
          />
        </div>
      </div>
    </main>
  );
}
