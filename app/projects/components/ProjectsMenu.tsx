"use client";
import { ProjectGroup } from "@/app/utils/types";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import "react-dropdown/style.css";
import ProjectsDropdown from "./ProjectsDropdown";

interface ProjectsMenuProps {
  projectGroups: ProjectGroup[];
}

function ProjectsMenu({ projectGroups }: ProjectsMenuProps) {
  const [selectedGroup, setSelectedGroup] = useState<ProjectGroup>(
    projectGroups[0]
  );

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

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
    <div className="lg:px-10 md:px-16">
      <div className="grid grid-flow-cols-5 lg:grid-flow-rows-3 grid-flow-rows-4 justify-center">
        <h1 className="text-4xl font-medium col-start-2 col-span-2 pb-28 ml-6">
          Our Projects
        </h1>
        <div className="hidden lg:flex row-start-2  flex-col gap-4 items-center ">
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
        <div className="lg:hidden row-start-2 col-start-2 col-span-2 pl-6 flex items-end pb-6">
          <ProjectsDropdown
            projectGroups={projectGroups}
            handleProjectClicked={(group) => setSelectedGroup(group)}
            selectedGroup={selectedGroup}
          />
        </div>

        <div className="col-span-3 col-start-2 row-start-3 lg:row-start-2 lg:col-span-2 lg:max-w-[500px] pb-28 mx-6">
          {renderDescriptionWithLineBreaks(selectedGroup.projectDescription)}
        </div>
        <div className="relative -top-28 row-start-2 col-start-4 pl-16 w-44 h-44">
          <Image
            src={selectedGroup.projectIconUrl?.url ?? ""}
            fill={true}
            alt={""}
          />
        </div>
        <div className="flex w-full justify-center row-start-4 lg:row-start-3 col-start-2 col-span-3 lg:col-span-4 pb-48 px-6 lg:px-0">
          <Image
            src={selectedGroup.projectImage?.url ?? ""}
            width={500}
            height={500}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsMenu;
