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
    <div className="flex items-center  lg:justify-between ">
      {leftImage ? (
        <Image src={leftImage} alt={""} className="w-3/12 hidden lg:block" />
      ) : (
        <div className="w-0 lg:w-3/12"></div>
      )}

      <div className=" lg:w-5/12 flex flex-col gap-4 lg:gap-14">
        <h3 className="text-2xl lg:text-[34px] font-bold">{title}</h3>
        <p className=" lg:text-[20px] font-light">{content}</p>
      </div>

      {rightImage ? (
        <Image src={rightImage} alt={""} className="w-3/12 hidden lg:block" />
      ) : (
        <div className="w-0 lg:w-3/12"></div>
      )}
    </div>
  );
}

export default ContentSection;
