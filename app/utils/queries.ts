import { gql } from "graphql-request";

export const GET_ALL_PROJECTS_QUERY = gql`
  query GetAllProjectsQuery {
    allProjectgroups {
      projectName
      projectDescription(markdown: false)
      projectIconUrl {
        url
      }
    }
  }
`;
