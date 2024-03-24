import { performRequest } from "../utils/fetcher";
import { GET_ALL_PROJECTS_QUERY } from "../utils/queries";
import { ProjectGroup } from "../utils/types";
import ProjectsMenu from "./components/ProjectsMenu";

async function page() {
  const res = await performRequest({
    query: GET_ALL_PROJECTS_QUERY,
    revalidate: 0,
  });

  const projectGroups: ProjectGroup[] = res.allProjectgroups;

  const testFunc = () => {
    console.log("lol");
  };

  return (
    <div className="min-h-[100vh] grid grid-cols-3 grid-rows-2 justify-center">
      <div className="row-start-2 flex justify-end">
        <ProjectsMenu
          projectGroups={projectGroups}
          onProjectClicked={testFunc}
        />
      </div>
      <h1 className="text-4xl font-medium col-start-2">Our Projects</h1>
      <div>right side</div>
    </div>
  );
}

export default page;
