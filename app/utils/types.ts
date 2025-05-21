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
  volunteerHoursWorked2023?: number;
  totalVoluntaryHours?: number;
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


export interface CategoryItem {
  label: string;
  value: number;
  color: string;
}

export interface PieChartData {
  chartData: CategoryItem[];
}
