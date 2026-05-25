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
  volunteerHoursByYear: {
    year: number;
    hours: number;
  }[];
  savedCo2InTons: number;
  numberOfVolunteers: number;
  totalVoluntaryHours: number;
}

export interface VolunteerQuote {
  id: string;
  quote?: string;
  author?: string;
}

export interface CategoryItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface PieChartData {
  chartData: CategoryItem[];
}
