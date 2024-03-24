import { performRequest } from "../utils/fetcher";
import { GET_ALL_PROJECTS_QUERY } from "../utils/queries";

async function page() {
  const res = await performRequest({
    query: GET_ALL_PROJECTS_QUERY,
    revalidate: 0,
  });
  console.log("res: ", res);

  //const projectGroups: ProjectGroup[] = res.data.allProjectgroups;

  const testFunc = () => {
    console.log("lol");
  };

  return <div></div>;
}

export default page;
