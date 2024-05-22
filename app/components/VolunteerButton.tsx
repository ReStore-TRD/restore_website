"use client";

import PrimaryButton from "./Buttons/PrimaryButton";
import ButtonHover from "../assets/navigation_bar/join_us.svg";
import Image from "next/image";

function VolunteerButton() {
  return (
      <div className="relative group flex flex-col items-end absolute inset-0 justify-center">
        <div className="inline-flex">
          <div className="text-white hover:opacity-80 text-xs">
            <PrimaryButton
            title="Volunteer with us!"
            callBack={() => window.open("https://linktr.ee/restore.trd", "_blank")}
            />
          </div>
        </div>
        <div className="absolute -top-5 right-1 transform translate-x-full opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src={ButtonHover}
            alt={""}
            objectFit="contain"
            className="mix-blend-multiply w-10 h-10"
          />
        </div>
      </div>
  );
}

export default VolunteerButton;
