"use client";

import { useVolunteerSignupUrl } from "../VolunteerButton";

const Button = () => {
  const linkUrl = useVolunteerSignupUrl();

  return (
    <button
      className="rounded-full bg-repink px-5 py-2 text-white"
      disabled={!linkUrl}
      onClick={() => {
        if (linkUrl) window.open(linkUrl, "_blank", "noopener,noreferrer");
      }}
    >
      Join us
    </button>
  );
};
export default Button;
