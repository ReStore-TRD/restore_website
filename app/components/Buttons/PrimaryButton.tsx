interface PrimaryButtonProps {
  title: String;
  callBack: () => void;
}

function PrimaryButton({ title, callBack }: PrimaryButtonProps) {
  return (
    <button
      onClick={callBack}
      className="bg-restore-pink hover:opacity-75 w-auto  text-white py-4 px-8 rounded-full button-zoom-active"
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
