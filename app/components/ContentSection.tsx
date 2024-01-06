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
        <Image src={leftImage} alt={""} className="w-3/12" />
      ) : (
        <div className="w-3/12"></div>
      )}

      <div className="w-5/12 flex flex-col gap-14">
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-2xl font-light">{content}</p>
      </div>

      {rightImage ? (
        <Image src={rightImage} alt={""} className="w-3/12" />
      ) : (
        <div className="w-3/12"></div>
      )}
    </div>
  );
}

export default ContentSection;
