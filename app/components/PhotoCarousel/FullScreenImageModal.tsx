interface FullScreenImageModalProps {
  src?: string;
  onClose: () => void;
}

function FullScreenImageModal({ src, onClose }: FullScreenImageModalProps) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        role="button"
        className="absolute inset-0 z-40"
        onClick={onClose}
      ></div>
      <img src={src} alt="Full Size" className="max-w-full max-h-full z-50" />
      <button
        className="absolute top-0 right-0 m-4 text-white"
        onClick={onClose}
      >
        Lukk
      </button>
    </div>
  );
}

export default FullScreenImageModal;
