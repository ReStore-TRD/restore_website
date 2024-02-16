"use client";

import PrimaryButton from "../components/Buttons/PrimaryButton";

function ProjectButton({ name }: { name: string }) {
  return (
    <div className="flex justify-center m-4">
      <PrimaryButton
        title={name}
        callBack={() => console.log(`${name} clicked`)}
      />
    </div>
  );
}

export default ProjectButton;
