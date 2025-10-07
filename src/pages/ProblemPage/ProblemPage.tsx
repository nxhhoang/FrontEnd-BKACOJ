import { useParams } from "react-router-dom";
import problemApi from "../../apis/problem.api";
import type { Problem } from "../../types/problem.type";
import { useQuery } from "@tanstack/react-query";

export default function ProblemPage() {
  const { problemId } = useParams<{ problemId: string }>();
  const problemIdNum = Number(problemId);

  const {
    data: problemData,
    isLoading: problemLoading,
    isError: problemError,
  } = useQuery({
    queryKey: ["problem", problemIdNum, "json"],
    queryFn: () =>
      problemApi.getProblemDetail<Problem>(problemIdNum, "problem.json", "json"),
    enabled: !!problemId, // chỉ chạy khi có problemId
  });

  const {
    data: pdfData,
    isLoading: pdfLoading,
  } = useQuery({
    queryKey: ["problem", problemIdNum, "pdf"],
    queryFn: () =>
      problemApi.getProblemDetail<Blob>(problemIdNum, "statement.pdf", "blob"),
    enabled: !!problemId,
  });
  
  console.log(pdfData);

  const pdfUrl = pdfData ? window.URL.createObjectURL(pdfData.data) : null;

  if (problemLoading || pdfLoading) {
    return <div className="p-6">Đang tải bài toán...</div>;
  }

  if (problemError || !problemData) {
    return <div className="p-6">Problem not found</div>;
  }

  const problem = problemData.data;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex gap-6">
        {/* Left Column */}
        <div className="flex-1 bg-white rounded-2xl shadow p-6">
          <h1 className="text-3xl font-bold mb-4">{problem.name}</h1>
          <div className="w-auto h-px bg-gray-300 my-4 mx-auto"></div>

          {/* Nội dung đề bài PDF */}
          <div className="mb-6 bg-gray-50 p-4 rounded h-[80vh]">
            <iframe
              src={pdfUrl || undefined}
              title="Problem PDF"
              className="w-full h-full rounded"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-80 flex-shrink-0 bg-white rounded-2xl shadow p-6 space-y-4">
          <div className="space-y-2">
            <p>
              <strong>Short name:</strong> {problem["short-name"]}
            </p>
            <p>
              <strong>Tags:</strong> {problem.tags?.join(", ") ?? ""}
            </p>
            <p>
              <strong>Time Limit:</strong> {problem["time-limit"]} ms
            </p>
            <p>
              <strong>Memory Limit:</strong>{" "}
              {(problem["memory-limit"] / (1024 * 1024)).toFixed(0)} MB
            </p>
            <p>
              <strong>Tests:</strong> {problem["test-num"]}
            </p>
            <p>
              <strong>Type:</strong>{" "}
              {problem["is-interactive"] ? "interactive" : "standard"}
            </p>
          </div>

          <div className="w-auto h-px bg-gray-300 my-4 mx-auto"></div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Submit Solution
          </button>
          <div className="w-auto h-px bg-gray-300 my-4 mx-auto"></div>
          <div className="mt-4 space-y-2">
            <a
              href={`/problem/${problem["problem-id"]}/all-submissions`}
              className="block text-blue-600 hover:underline"
            >
              All Submissions
            </a>
            <a
              href={`/problem/${problem["problem-id"]}/best-submissions`}
              className="block text-blue-600 hover:underline"
            >
              Best Submissions
            </a>
            <a
              href={`/problem/${problem["problem-id"]}/my-submissions`}
              className="block text-blue-600 hover:underline"
            >
              My Submissions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
