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
    <div>
      <div className="grid grid-flow-cols-5 grid-flow-rows-3 justify-center">
        <h1 className="text-4xl font-medium col-start-2 col-span-2 pb-28">
          Our Projects
        </h1>

        <div className="row-start-2 flex flex-col gap-4 items-center pr-10">
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
        <div className="col-span-2 w-[500px] pb-28">
          {renderDescriptionWithLineBreaks(selectedGroup.projectDescription)}
        </div>
        <div className="relative -top-28 row-start-2 col-start-4 pl-16">
          <Image
            src={selectedGroup.projectIconUrl?.url ?? ""}
            width={200}
            height={200}
            alt={""}
          />
        </div>
        <div className="flex justify-center row-start-3 col-start-2 col-span-2 pb-48">
          <Image
            src={selectedGroup.projectImage?.url ?? ""}
            width={500}
            height={500}
            alt={""}
            className=" "
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsMenu;
