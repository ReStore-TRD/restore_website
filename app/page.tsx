import Image from "next/image";
import test from "./assets/test.svg";
import test2 from "./assets/mobile.svg";
import arrow from "./assets/arrow.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-background">
      <div className="text-6xl flex flex-col gap-2">
        <p>REUSE</p>
        <p>RETHINK</p>
        <p className="text-blue-600">RESTORE</p>
      </div>
      <Image
        className="absolute right-0 top-0 w-1/2 bg-red-200 hidden sm:block"
        src={test}
        alt={""}
      />
      <Image
        className="absolute left-0 top-0 w-1/6 bg-red-200 hidden sm:block"
        src={arrow}
        alt={""}
      />
      <Image
        className="absolute right-0 top-0 w-1/2 h-[700px] sm:hidden"
        src={test2}
        alt={""}
      />
    </main>
  );
}
