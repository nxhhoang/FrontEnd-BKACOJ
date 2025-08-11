import React, { useState } from "react";
import "./ProblemSet.css";

export default function ProblemSet() {
  // Data mẫu
  const [problems] = useState([
    {
      code: "2006E",
      title: "Iris's Full Binary Tree",
      tags: ["brute force", "trees"],
      score: 3100,
      author: "x279",
      status: "solved",
      favorite: true,
      link: "#"
    },
    {
      code: "1842B",
      title: "Tenzing and Books",
      tags: ["bitmasks", "dp"],
      score: 900,
      author: "coder123",
      status: "unsolved",
      favorite: false,
      link: "#"
    },
    {
      code: "1879C",
      title: "Another Problem",
      tags: ["math", "implementation", "greedy"],
      score: 1700,
      author: "mathlover",
      status: "unsolved",
      favorite: false,
      link: "#"
    }
  ]);

  const [search, setSearch] = useState("");

  const filtered = problems.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="problemset-container">
      {/* Search bar */}
      <div className="problemset-search">
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Header */}
      <div className="problemset-header">
        <div className="col-id">Code</div>
        <div className="col-name">Title / Tags</div>
        <div className="col-icons">Actions</div>
        <div className="col-score">Score</div>
        <div className="col-author">Author</div>
      </div>

      {/* Rows */}
      {filtered.map((p) => (
        <div key={p.code} className="problemset-row">
          <div className="col-id">
            <a href={p.link}>{p.code}</a>
          </div>
          <div className="col-name">
            <a href={p.link} className="problem-title">
              {p.title}
            </a>
            <div className="tags">{p.tags.join(", ")}</div>
          </div>
          <div className="col-icons">
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
          <div className="col-score">{p.score}</div>
          <div className="col-author">{p.author}</div>
        </div>
      ))}
    </div>
  );
}
