"use client";

import PrimaryButton from "./Buttons/PrimaryButton";

function VolunteerButton() {
  return (
    <div className="flex justify-center mb-16">
      <PrimaryButton
        title="Volunteer with us!"
        callBack={() => console.log("ok")}
      />
    </div>
  );
}

export default VolunteerButton;
