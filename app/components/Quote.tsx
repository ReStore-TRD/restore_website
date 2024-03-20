interface QuoteProps {
  content: String;
  author: String;
}

function Quote({ content, author }: QuoteProps) {
  return (
    <div className="flex flex-col gap-2 text-right text-xl md:text-4xl font-light text-gray-500 m-auto">
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
}

export default Quote;
