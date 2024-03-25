import { performRequest } from "../utils/fetcher";
import { GET_ALL_FAQ_QUERY } from "../utils/queries";
import { FaqItem } from "../utils/types";
import DropdownItem from "./components/DropdownItem";

async function page() {
  const res = await performRequest({
    query: GET_ALL_FAQ_QUERY,
  });

  const faqData: FaqItem[] = res.allFaqItems;

  return (
    <div className="flex justify-center">
      <div className="w-1/2 mb-48">
        <h1 className="text-4xl font-normal mb-28">
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
    </div>
  );
}

export default page;
