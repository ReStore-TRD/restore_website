const Button = () => {
  return (
    <button
      className="rounded-full bg-repink px-5 py-2 text-white"
      onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf9siRxrDkx4Q-dW-S0hgw1-ih5Z_yCtVhV-KCF32bB4MaamQ/viewform", "_blank")}
    >
      Join us
    </button>
  );
};
export default Button;
