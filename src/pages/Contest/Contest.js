import React from "react";
import "./Contest.css";

export default function Contest() {
  const Contests = [
    {
      title: "🚀BACH KHOA CODE CHALLENGE #2 🚀 [GDGoC HCMUT x BKAC]",
      description:
      "The contest follows the ICPC-style scoring format: a problem is only awarded points if all test cases are passed. Ties between teams with the same score are broken based on penalty – the total time to solve the problems successfully plus the number of incorrect submissions made beforehand.",
      contestStyle: "Each team consists of 1 – 2 members",
      startTime: "14:00 +07 | 08/06/2025",
      duration: "3 hours",
    },
    {
      title: "🚀BACH KHOA CODE CHALLENGE #1 🚀 [GDGoC HCMUT x BKAC]",
      description:
        "The contest follows the ICPC-style scoring format: a problem is only awarded points if all test cases are passed. Ties between teams with the same score are broken based on penalty – the total time to solve the problems successfully plus the number of incorrect submissions made beforehand.",
      contestStyle: "Solo contest (no team-up)",
      startTime: "14:00 +07 | 02/03/2025",
      duration: "3 hours",
    },
  ];

  const otherContests = [
    { name: "Young Informatics Competition", link: "#" },
    { name: "Duyên Hải Bắc Bộ", link: "#" },
  ];

  return (
    <div className="contest-container">
      <div className="contest-left">
        <h1>BKCC Contests</h1>
        {Contests.map((c, idx) => (
          <div key={idx} className="contest-card">
            <h2 className="contest-title">{c.title}</h2>
            <p className="contest-desc">{c.description}</p>
            <h3 className="contest-title">{c.contestStyle}</h3>
            <div className="contest-info">
              <span>
                <strong>Start Time:</strong> {c.startTime}
              </span>
              <span>
                <strong>Duration:</strong> {c.duration}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="contest-right">
        <h2>Other Contests</h2>
        <ul>
          {otherContests.map((oc, idx) => (
            <li key={idx}>
              <a href={oc.link}>{oc.name}</a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
