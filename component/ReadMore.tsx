"use client";
import { useState } from "react";

type Props = {
  text: string;
  maxLines?: number;
};

export default function ReadMore({ text, maxLines = 5 }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const lines = text.split("\n");
  const shouldTruncate = lines.length > maxLines;

  const displayText = isOpen ? text : lines.slice(0, maxLines).join("\n") + (shouldTruncate ? "..." : "");

  return (
    <div className="text-lg leading-relaxed text-gray-800">
      <p className="whitespace-pre-line">{displayText}</p>

      {shouldTruncate && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 text-[#d4af37] font-bold hover:underline text-base"
        >
          {isOpen ? "↑ Read less" : "↓ Read more"}
        </button>
      )}
    </div>
  );
}