export interface LawRecord {
  _id: string;
  caseName: string;

  parties: {
    appellants: string[];
    respondents: string[];
  };

  court?: string;
  judges?: string;
  citation: string;
  appealNumber?: string;
  date?: string;
  headNote?: string;
  subjectHeadings?: string[];
  facts?: string;
  issuesForDetermination?: string[];
  held?: Array<{
    heading?: string;
    summary?: string;
  }>;
  casesCited?: string[];
  counsel?: {
    appellants?: string[];
    respondents?: string[];
  };
  judgment?: string;
  catchWords?: string;
  createdAt: string;
}