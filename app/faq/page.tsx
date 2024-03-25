import { performRequest } from "../utils/fetcher";
import { GET_ALL_FAQ_QUERY } from "../utils/queries";
import { FaqItem } from "../utils/types";
import DropdownItem from "./components/DropdownItem";
import Image from "next/image";
import left from "../assets/faq_page/background/left.svg";
import topRight from "../assets/faq_page/background/top-right.svg";

async function page() {
  const res = await performRequest({
    query: GET_ALL_FAQ_QUERY,
    revalidate: 0,
  });

  const faqData: FaqItem[] = res.allFaqItems;

  return (
    <div className="flex justify-center">
      <Image
        src={left}
        alt={""}
        className="hidden md:block -z-50 absolute top-48 left-0 w-1/5 mix-blend-multiply line-animation"
      />
      <Image
        src={topRight}
        alt={""}
        className="hidden md:block -z-50 absolute top-28 right-0 w-1/6 mix-blend-multiply line-animation"
      />

      <div className="px-8 sm:px-16 md:px-0 md:w-1/2 mb-48">
        <h1 className="text-4xl font-normal mb-28 mt-16">
          Frequently asked questions
        </h1>
        {faqData.map((faqItem) => {
          return (
            <DropdownItem
              key={faqItem.id}
              question={faqItem.question}
              answer={faqItem.answer}
            />
          );
        })}
      </div>
      {/*  <Image
          src={bottomRight}
          alt={""}
          className="hidden lg:block -z-50 absolute bottom-0 right-0 w-1/6 mix-blend-multiply line-animation"
        /> */}
    </div>
  );
}

export default page;
