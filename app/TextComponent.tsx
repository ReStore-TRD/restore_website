import Image from "next/image";
import image from "./assets/landing_page/img2.png";

function TextComponent() {
  return (
    <div className="flex items-center justify-between ">
      <Image src={image} alt={""} className="w-1/6" />
      <div className="w-3/6 flex flex-col gap-6">
        <h3 className="text-2xl font-bold">We give items new life</h3>
        <p>
          ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim.
        </p>
      </div>
      <div className="w-1/6"></div>
    </div>
  );
}

export default TextComponent;
