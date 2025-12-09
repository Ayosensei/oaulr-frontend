"use client";

import Report from "./reportCardComponent";
import { useState, useEffect } from "react";
import { LawRecord } from "@/src/types/LawRecord";

export default function Reports() {
  const [records, setRecords] = useState<LawRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/records")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data loaded successfully!", data);
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load records:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <p className="text-xl">Loading cases...</p>
      </div>
    );
  }

  if (records.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <p className="text-xl">No records found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
       <h1 className="text-4xl font-bold text-[#0b5cff] mb-8 text-center">
        All Cases ({records.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {records.map((record) => (
          <Report key={record._id} record={record} />
        ))}
      </div>
    </div>
  );
}