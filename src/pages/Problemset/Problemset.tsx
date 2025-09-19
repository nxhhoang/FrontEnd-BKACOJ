import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react";

interface Problem {
  id: string;
  title: string;
  category: string;
  points: number;
  percentAC: number;
  acCount: number;
  solved: boolean;
}

const problems: Problem[] = [
  { id: "vnoicup25_final_a", title: "Paper Boat", category: "VNOI Cup", points: 0.2, percentAC: 16.1, acCount: 108, solved: false },
  { id: "vnoicup25_final_e", title: "Xiangqi Master Hikamura", category: "VNOI Cup", points: 1.2, percentAC: 64.4, acCount: 32, solved: false },
  { id: "vnoicup25_r2_a", title: "Cutting the Board", category: "VNOI Cup", points: 0.1, percentAC: 34.4, acCount: 633, solved: true },
  // ...add more
];

export default function Problemset() {
  const [search, setSearch] = useState("");

  const filteredProblems = problems.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Problem list</h1>

      <div className="grid grid-cols-4 gap-6">
        {/* Problem Table */}
        <div className="col-span-3 bg-white rounded-2xl shadow p-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Problem</th>
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Points</th>
                <th className="text-left p-2">% AC</th>
                <th className="text-left p-2"># AC</th>
              </tr>
            </thead>
            <tbody>
              {filteredProblems.map(p => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 flex items-center gap-2">
                    {p.solved ? (
                      <CheckCircle className="text-green-500 w-4 h-4" />
                    ) : (
                      <XCircle className="text-red-400 w-4 h-4" />
                    )}
                    {p.id}
                  </td>
                  <td className="p-2 text-blue-600 hover:underline cursor-pointer">{p.title}</td>
                  <td className="p-2">{p.category}</td>
                  <td className="p-2">{p.points.toFixed(2)}</td>
                  <td className="p-2">{p.percentAC.toFixed(1)}%</td>
                  <td className="p-2 text-blue-600 hover:underline cursor-pointer">{p.acCount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button className="p-2 rounded hover:bg-gray-200"><ChevronLeft className="w-4 h-4" /></button>
            {[1, 2, 3, 4, 5].map(page => (
              <button key={page} className={`px-3 py-1 rounded ${page === 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}>{page}</button>
            ))}
            <button className="p-2 rounded hover:bg-gray-200"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-1 bg-white rounded-2xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Problem search</h2>
          <div className="relative mb-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search problems..."
              className="w-full border rounded-xl p-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <label className="block mb-2"><input type="checkbox" className="mr-2" />Hide solved problems</label>
          <label className="block mb-2"><input type="checkbox" className="mr-2" />Has editorial</label>
          <label className="block mb-4"><input type="checkbox" className="mr-2" />Show problem types</label>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full">Search</button>
          <button className="bg-gray-100 px-4 py-2 rounded-xl w-full mt-2 hover:bg-gray-200">Random</button>
        </div>
      </div>
    </div>
  );
}
