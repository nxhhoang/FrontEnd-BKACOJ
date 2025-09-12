import React from "react";

interface ContestType {
  title: string;
  description: string;
  contestStyle: string;
  startTime: string;
  duration: string;
}

// interface OtherContestType {
//   name: string;
//   link: string;
// }

const Contest: React.FC = () => {
  const Contests: ContestType[] = [
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

  // const otherContests: OtherContestType[] = [
  //   { name: "Young Informatics Competition", link: "#" },
  //   { name: "Duyên Hải Bắc Bộ", link: "#" },
  // ];

  return (
    <div className="flex gap-10 items-start max-w-6xl mx-auto p-5">
      {/* Left side */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">BKCC Contests</h1>

        {Contests.map((c, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100"
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {c.title}
            </h2>
            <p className="text-gray-600 mb-3">{c.description}</p>
            <h3 className="text-md font-medium text-blue-600 mb-3">
              {c.contestStyle}
            </h3>
            <div className="flex gap-6 text-sm text-gray-700">
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

      {/* Right side (optional) */}
      {/* 
      <div className="w-1/3">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Other Contests
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {otherContests.map((oc, idx) => (
            <li key={idx}>
              <a
                href={oc.link}
                className="text-purple-700 underline hover:no-underline"
              >
                {oc.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      */}
    </div>
  );
};

export default Contest;
