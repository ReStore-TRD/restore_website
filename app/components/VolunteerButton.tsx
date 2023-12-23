"use client";

import PrimaryButton from "./Buttons/PrimaryButton";

function VolunteerButton() {
  return (
    <div className="flex justify-center">
      <PrimaryButton
        title="Volunteer with us!"
        callBack={() => console.log("ok")}
      />
    </div>
  );
}

export default VolunteerButton;
