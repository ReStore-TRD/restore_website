interface PrimaryButtonProps {
  title: String;
  callBack: () => void;
  disabled?: boolean;
}

function PrimaryButton({ title, callBack, disabled = false }: PrimaryButtonProps) {
  return (
    <button
      onClick={callBack}
      disabled={disabled}
      className="bg-restore-pink hover:opacity-75 w-auto  text-white py-4 px-8 rounded-full button-zoom-active"
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
