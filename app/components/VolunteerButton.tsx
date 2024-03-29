"use client";

import PrimaryButton from "./Buttons/PrimaryButton";

function VolunteerButton() {
  return (
    <div className="flex justify-center">
      <PrimaryButton
        title="Volunteer with us!"
        callBack={() => window.open("https://linktr.ee/restore.trd", "_blank")}
      />
    </div>
  );
}

export default VolunteerButton;
