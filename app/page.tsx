import Image from "next/image";
import image from "./assets/img2.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-[url('./assets/test.svg')] bg-50% bg-no-repeat  bg-right-top">
      <div className="text-6xl flex flex-col gap-2">
        <p>REUSE</p>
        <p>RETHINK</p>
        <p className="text-blue-600">RESTORE</p>
      </div>

      <div className="flex items-center gap-14 bg-red-200">
        <Image src={image} alt={""} />
        <div className="bg-red-200">
          <h3>We give items new life</h3>
          <p>
            ReStore is a voluntary student organization that works to reduce
            waste from household equipment and furniture and improve quality of
            student life by facilitating reuse of goods for all students in
            Trondheim.
          </p>
        </div>
      </div>

      {/*   <Image
        className="absolute right-0 top-0 w-1/2 h-[700px] sm:hidden"
        src={test2}
        alt={""}
      /> */}
    </main>
  );
}
