import { gql } from "graphql-request";

export const GET_ALL_PROJECTS_QUERY = gql`
  query GetAllProjectsQuery {
    allProjectgroups {
      projectName
      projectDescription(markdown: false)
      projectIconUrl {
        url
      }
      projectImage {
        url
      }
    }
  }
`;

export const GET_ALL_FAQ_QUERY = gql`
  query GetAllFaqQuery {
    allFaqItems {
      id
      question
      answer {
        value
      }
    }
  }
`;
