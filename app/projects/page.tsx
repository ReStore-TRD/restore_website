import { performRequest } from "../utils/fetcher";
import { GET_ALL_PROJECTS_QUERY } from "../utils/queries";
import { ProjectGroup } from "../utils/types";
import ProjectsMenu from "./components/ProjectsMenu";

async function page() {
  const res = await performRequest({
    query: GET_ALL_PROJECTS_QUERY,
    revalidate: 0,
  });

  console.log(res);

  const projectGroups: ProjectGroup[] = res.allProjectgroups;

  const testFunc = () => {
    console.log("lol");
  };

  return (
    <div className="min-h-[100vh] flex flex-col gap-32 items-center px-40">
      <h1 className="text-4xl font-medium">Our Projects</h1>

      <ProjectsMenu projectGroups={projectGroups} />
    </div>
  );
}

export default page;
