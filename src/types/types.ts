export interface FormationType {
  title: string;
  startDate: number;
  endDate?: number;
  where: string;
  description: string[];
}

export interface ExperienceType {
  title: string;
  startDate: string;
  endDate?: string;
  where: string;
  what: string;
  tools: string;
}

type DescriptionType = {
  title?: string;
  subtitle?: string;
  content?: string;
  images?: string[];
};

export type ProjectType = {
  id: string;
  title: string;
  projectType?: string;
  images: string[];
  video?: string;
  description: Array<DescriptionType>;
  date: string;
  tools?: Array<string>
  dataset?: {name: string; link: string}
};
