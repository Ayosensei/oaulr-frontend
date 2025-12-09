// reportCardComponent.tsx
import { FC } from "react";
import { LawRecord } from "@/src/types/LawRecord";
import Link from "next/link";

const Report: FC<{ record: LawRecord }> = ({ record }) => {
  // Safe fallbacks so nothing breaks even if some fields are missing
  const year = record.date ? new Date(record.date).getFullYear() : "—";
  const appellants = record.parties?.appellants?.join(" & ") || "Appellant";
  const respondents = record.parties?.respondents?.join(" & ") || "Respondent";
  const summary = record.headNote || record.facts?.slice(0, 150) + "..." || "No summary available.";

  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <span className="capitalize">{record.subjectHeadings?.[0] || "Law Report"}</span>
        <span className="mx-2">·</span>
        <span>{year}</span>
      </div>

      <h3 className="text-xl font-semibold text-[#002147] mb-2 line-clamp-2">
        {record.caseName || appellants + " v " + respondents}
      </h3>

      <p className="text-gray-600 mb-5 line-clamp-3 text-sm leading-relaxed">
        {summary}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">
          {record.citation || "Citation not available"}
        </span>

        <Link
          href={`/records/${record._id}`}
          className="bg-[#002147] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#003366] transition flex items-center gap-2"
        >
          Read
        </Link>
      </div>
    </article>
  );
};

export default Report;