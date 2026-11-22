import { gql } from "graphql-request";

export const GET_VOLUNTEER_SIGNUP_QUERY = gql`
  query GetVolunteerSignupQuery {
    volunteerSignup {
      linkUrl
    }
  }
`;

export const GET_ALL_ABOUT_SECTIONS_QUERY = gql`
  query GetAllAboutSectionsQuery {
    aboutpage {
      aboutsection {
        id
        sectionTitle
        sectionText
        sectionImage {
          id
          imagelink
          image {
            url
            alt
            width
            height
          }
        }
      }
    }
  }
`;

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
      numberOfVolunteers
      savedCo2InTons
      totalVoluntaryHours
      volunteerHoursByYear {
        year
        hours
      }
    }
  }
`;

export const GET_VOLUNTEER_QUOTES = gql`
  query GetResearchDataQuery {
    allVolunteerQuotes {
      id
      quote
      author
    }
  }
`;


export const GET_CO2_PIE_CHART_DATA_QUERY = gql`
  query GetPieChartDataQuery {
    allPieCharts {
      chartData {
        __typename
        ... on CategoryItemRecord{
          id
          label
          color
          value
        }
      }
    }
  }
`;
