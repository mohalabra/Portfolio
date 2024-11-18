export interface FormationType {
  name: string;
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

export type ProjectType = {
  title: string;
  videos: { order: number; url: string }[];
  descriptions: { order: number; content: string }[];
  images: { order: number; url: string }[];
};
