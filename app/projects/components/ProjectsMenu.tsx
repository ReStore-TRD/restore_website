"use client";
import { ProjectGroup } from "@/app/utils/types";
import React from "react";
import { useState } from "react";

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
  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="">
        {projectGroups.map((group, index) => {
          return (
            <p
              key={index}
              className="hover:bg-projects-underline hover:bg-no-repeat hover:bg-bottom hover:cursor-pointer"
            >
              {group.projectName}
            </p>
          );
        })}
      </div>
      <div className="col-span-3">
        {renderDescriptionWithLineBreaks(selectedGroup.projectDescription)}
      </div>
      <div>Image</div>
    </div>
  );
}

export default ProjectsMenu;
