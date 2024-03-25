import { performRequest } from "../utils/fetcher";
import { GET_ALL_PROJECTS_QUERY } from "../utils/queries";
import { ProjectGroup } from "../utils/types";
import ProjectsMenu from "./components/ProjectsContent";
import left from "../assets/projects_page/background/left.svg";
import right from "../assets/projects_page/background/right.svg";
import Image from "next/image";

async function page() {
  const res = await performRequest({
    query: GET_ALL_PROJECTS_QUERY,
    revalidate: 0,
  });

  const projectGroups: ProjectGroup[] = res.allProjectgroups;

  return (
    <div className="min-h-[100vh] flex flex-col gap-32 items-center">
      <Image
        src={left}
        alt={""}
        className="hidden md:block -z-50 absolute top-1/12 left-0 w-1/6 mix-blend-multiply line-animation"
      />
      <Image
        src={right}
        alt={""}
        className="hidden md:block -z-50 absolute top-28 right-0 w-1/6 mix-blend-multiply line-animation"
      />
      <ProjectsMenu projectGroups={projectGroups} />
    </div>
  );
}

export default page;
