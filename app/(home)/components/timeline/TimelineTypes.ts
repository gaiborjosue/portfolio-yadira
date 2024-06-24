// TimelineTypes.ts
export interface Person {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  details?: string[];
  link?: string;
  linkText?: string;
  people?: Person[];
}

export interface TimelineProps {
  events: TimelineEvent[];
}
