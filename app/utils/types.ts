export interface ProjectGroup {
  projectName: string;
  projectDescription: string;
  projectIconUrl?: {
    url: string;
  };
  projectImage?: {
    url: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: any;
}

export interface CarouselImage {
  url: string;
}

export interface ResearchData {
  id: string;
  numbeOfVolunteers?: number;
  savedCo2InTons?: number;
  volunteerHoursWorkedLastYear?: number;
  volunteerHoursWorkedThisYear?: number;
  totalVoluntaryHours?: number;
}
