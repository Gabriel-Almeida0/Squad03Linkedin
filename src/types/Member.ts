export interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedinUrl: string;
  portfolioUrl?: string | null;
  skills: string[];
}