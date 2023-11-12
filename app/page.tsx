import Image from "next/image";
import test from "./assets/test.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-background">
      <div className="text-5xl flex flex-col gap-2">
        <p>REUSE</p>
        <p>RETHINK</p>
        <p className="text-blue-600">RESTORE</p>
      </div>
      <Image
        className="absolute right-0 top-0 w-1/2"
        src={test}
        alt={""}
        width={400}
      />
    </main>
  );
}
