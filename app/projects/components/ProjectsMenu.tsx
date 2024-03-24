"use client";
import { ProjectGroup } from "@/app/utils/types";
import React from "react";
import { useState } from "react";
import Image from "next/image";

interface ProjectsMenuProps {
  projectGroups: ProjectGroup[];
}

function ProjectsMenu({ projectGroups }: ProjectsMenuProps) {
  const [selectedGroup, setSelectedGroup] = useState<ProjectGroup>(
    projectGroups[0]
  );

  const renderDescriptionWithLineBreaks = (description: string) => {
    return description.split("\n").map((line, index, array) =>
      // Don't add a <br> tag after the last line
      index === array.length - 1 ? (
        line
      ) : (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    );
  };

  const projectUnderlineStyles =
    "hover:bg-no-repeat hover:bg-bottom hover:cursor-pointer hover:bg-projects-underline ";

  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="flex flex-col gap-4 items-center">
        {projectGroups.map((group, index) => {
          return (
            <p
              key={index}
              className={
                selectedGroup == group
                  ? "bg-no-repeat bg-bottom cursor-pointer bg-projects-underline"
                  : `hover:bg-no-repeat hover:bg-bottom hover:cursor-pointer hover:bg-projects-underline`
              }
              onClick={() => setSelectedGroup(group)}
            >
              {group.projectName}
            </p>
          );
        })}
      </div>
      <div className="col-span-3">
        {renderDescriptionWithLineBreaks(selectedGroup.projectDescription)}
      </div>
      <div className="relative w-48 h-48 -top-28">
        <Image
          src={selectedGroup.projectIconUrl?.url ?? ""}
          fill={true}
          alt={""}
        />
      </div>
    </div>
  );
}

export default ProjectsMenu;
