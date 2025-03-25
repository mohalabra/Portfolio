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

export enum ProjectStatus {
  Completed = "Completed",
  InProgress = "In Progress",
  Planned = "Planned",
}

export enum ProjectCategory {
  ALL = "All",
  AI = "AI",
  MACHINELARNING = "Machine Learning",
  DEEPLEARNING = "Deep Learning",
  NEURALNETWORKS = "Neural Networks",
  COMPUTERVISION = "Computer Vision",
  NATURALLANGUAGEPROCESSING = "Natural Language Processing",
  REINFORCEMENTLEARNING = "Reinforcement Learning",
  FULLSTACK = "Full Stack",
  IOT = "IOT",
  IMAGEPROCESSING = "Image Processing",
}

export type ProjectType = {
  id: string;
  title: string;
  images: string[];
  description: Array<DescriptionType>;
  date: string;
  status: ProjectStatus;
  projectType?: string;
  video?: string;
  tools?: Array<string>;
  dataset?: { name: string; link: string };
  categories?: Array<ProjectCategory>;
};
