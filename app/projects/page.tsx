import { performRequest } from "../utils/fetcher";
import { GET_ALL_PROJECTS_QUERY } from "../utils/queries";
import { ProjectGroup } from "../utils/types";

async function page() {
  const res = await performRequest({
    query: GET_ALL_PROJECTS_QUERY,
  });

  const projectGroups: ProjectGroup[] = res.data.allProjectgroups;

  return <div>Projects</div>;
}

export default page;
