import { ProjectGroup } from "@/app/utils/types";

interface ProjectsMenuProps {
  projectGroups: ProjectGroup[];
  onProjectClicked: () => void;
}

function ProjectsMenu({ projectGroups, onProjectClicked }: ProjectsMenuProps) {
  return (
    <div>
      {projectGroups.map((group, index) => {
        return <p key={index}>{group.projectName}</p>;
      })}
    </div>
  );
}

export default ProjectsMenu;
