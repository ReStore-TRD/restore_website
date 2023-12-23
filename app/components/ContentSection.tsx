import Image from "next/image";

interface ContentSectionProps {
  leftImage?: any;
  rightImage?: any;
  title: String;
  content: String;
}

function ContentSection({
  leftImage,
  rightImage,
  title,
  content,
}: ContentSectionProps) {
  return (
    <div className="flex items-center justify-between ">
      {leftImage ? (
        <Image src={leftImage} alt={""} className="w-1/6" />
      ) : (
        <div className="w-1/6"></div>
      )}

      <div className="w-3/6 flex flex-col gap-6">
        <h3 className="text-2xl font-bold">We give items new life</h3>
        <p>
          ReStore is a voluntary student organization that works to reduce waste
          from household equipment and furniture and improve quality of student
          life by facilitating reuse of goods for all students in Trondheim.
        </p>
      </div>
      {rightImage ? (
        <Image src={rightImage} alt={""} className="w-1/6" />
      ) : (
        <div className="w-1/6"></div>
      )}
    </div>
  );
}

export default ContentSection;
