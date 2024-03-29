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

export const GET_CAROUSEL_IMAGES = gql`
  query ImageGalleryQuery {
    allImageGalleries {
      id
      carouselContent {
        url
      }
    }
  }
`;

export const GET_RESEARCH_DATA_QUERY = gql`
  query GetResearchDataQuery {
    allResearches {
      id
      numbeOfVolunteers
      savedCo2InTons
      volunteerHoursWorkedLastYear
      volunteerHoursWorkedThisYear
      totalVoluntaryHours
    }
  }
`;
