interface QuoteProps {
  content: String;
  author: String;
}

function Quote({ content, author }: QuoteProps) {
  return (
    <div className="text-right text-4xl font-light text-gray-500 m-auto">
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
}

export default Quote;
