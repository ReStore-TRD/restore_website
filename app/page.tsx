import Image from "next/image";
import BlockComponent from "./BlockComponent";
import TextComponent from "./TextComponent";
import heroRight from "./assets/landing_page/hero-right.svg";
import heroLeft from "./assets/landing_page/hero-left.svg";
import bottomLeft from "./assets/landing_page/bottom-left.svg";
import bottomRight from "./assets/landing_page/bottom-right.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between bg-background ">
      <div className="min-h-screen text-6xl flex flex-col gap-2 pl-20">
        <p>REUSE</p>
        <p>RETHINK</p>
        <p className="text-blue-600">RESTORE</p>
      </div>

      <Image
        src={heroRight}
        alt={""}
        className="absolute top-0 right-0 w-1/2  z-0 mix-blend-multiply"
      />

      <Image
        src={heroLeft}
        alt={""}
        className="absolute top-96 left-0 w-1/6  z-0 mix-blend-multiply"
      />

      <div className="flex flex-col gap-20 px-20">
        <TextComponent />
        <BlockComponent />

        <TextComponent />
        <BlockComponent />

        <TextComponent />
        <BlockComponent />
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
