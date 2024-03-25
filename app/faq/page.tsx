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
    <div>
      <div className="w-2/3 mx-auto">
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
