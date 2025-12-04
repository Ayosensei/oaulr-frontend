//

"use client";   // ← This makes it a Client Component

type CourtCase = {
  id: number;
  FILE_NAME: string;
  TITLE: string;
  APPELLANTS: string[];
  RESPONDENTS: string[];
  DATE_OF_JUDGMENT: string;
  COURT: string;
  PANEL: string[];
  APPEAL_NO: string;
  JURISDICTION_ISSUE: string;
  FACTS: string;
  ISSUES_FOR_DETERMINATION: string[];
  HELD: string;
  CASES_REFERRED_TO: string[];
  CONCURRING_OPINIONS: string[];
  OUTCOME: string;
  Counsel: {
    APPELLANTS: string,
    RESPONDENTS: string
  }
};

export default function DownloadButton({ caseData }: { caseData: CourtCase }) {
  return (
    <button
      onClick={() => {
        const link = document.createElement('a');
        link.href = `/docs/${encodeURIComponent(caseData.FILE_NAME)}`;
        link.download = caseData.TITLE.replace(/[^a-z0-9]/gi, '_').substring(0, 100) + '.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      className="w-full bg-[#d4af37] text-[#002147] font-bold py-4 rounded-lg hover:bg-[#e6c248] transition shadow-md active:scale-95 mb-3 flex items-center justify-center text-base md:text-lg"
    >
      <span>Download Judgment </span>
    </button>
  );
}