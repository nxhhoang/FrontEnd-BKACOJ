import React, { useState } from "react";

interface Problem {
  code: string;
  title: string;
  tags: string[];
  score: number;
  author: string;
  status: "solved" | "unsolved";
  favorite: boolean;
  link: string;
}

const Problemset: React.FC = () => {
  // Data mẫu
  const [problems] = useState<Problem[]>([
    {
      code: "2006E",
      title: "Iris's Full Binary Tree",
      tags: ["brute force", "trees"],
      score: 3100,
      author: "x279",
      status: "solved",
      favorite: true,
      link: "#",
    },
    {
      code: "1842B",
      title: "Tenzing and Books",
      tags: ["bitmasks", "dp"],
      score: 900,
      author: "coder123",
      status: "unsolved",
      favorite: false,
      link: "#",
    },
    {
      code: "1879C",
      title: "Another Problem",
      tags: ["math", "implementation", "greedy"],
      score: 1700,
      author: "mathlover",
      status: "unsolved",
      favorite: false,
      link: "#",
    },
  ]);

  const [search, setSearch] = useState("");

  const filtered = problems.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto font-sans">
      {/* Search bar */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Header */}
      <div className="grid grid-cols-[80px_1fr_100px_80px_100px] gap-3 items-center bg-gray-100 font-bold border-b-2 border-gray-300 px-3 py-2 text-sm">
        <div>Code</div>
        <div>Title / Tags</div>
        <div className="text-center">Actions</div>
        <div className="text-right">Score</div>
        <div className="text-right">Author</div>
      </div>

      {/* Rows */}
      {filtered.map((p) => (
        <div
          key={p.code}
          className="grid grid-cols-[80px_1fr_100px_80px_100px] gap-3 items-center border-b border-gray-200 px-3 py-3 hover:bg-gray-50 text-sm"
        >
          <div>
            <a href={p.link} className="text-blue-600 hover:underline">
              {p.code}
            </a>
          </div>
          <div>
            <a
              href={p.link}
              className="text-blue-600 font-semibold hover:underline"
            >
              {p.title}
            </a>
            <div className="text-xs text-gray-500 truncate">
              {p.tags.join(", ")}
            </div>
          </div>
          <div className="flex gap-2 justify-center text-lg">
            {p.status === "solved" ? (
              <span title="Solved">✅</span>
            ) : (
              <span title="Unsolved">❌</span>
            )}
            {p.favorite ? (
              <span title="Favorite">⭐</span>
            ) : (
              <span title="Add to favorite">☆</span>
            )}
          </div>
          <div className="text-right font-bold">{p.score}</div>
          <div className="text-right">{p.author}</div>
        </div>
      ))}
    </div>
  );
};

export default Problemset;
