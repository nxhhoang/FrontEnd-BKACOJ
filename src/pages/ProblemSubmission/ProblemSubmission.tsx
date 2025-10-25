import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSubmissionProblemList } from "../../hooks/useSubmissionProblemList"
import type { SubmissionOfProblem } from "../../types/submission.type"

type Verdict =
  | "ACCEPTED"
  | "WRONG_ANSWER"
  | "TIME_LIMIT_EXCEEDED"
  | "RUNTIME_ERROR"
  | "PENDING"
  | "JUDGEMENT_FAILED"

const verdictColor = (v: string) => {
  switch (v) {
    case "ACCEPTED":
      return "text-green-600 font-semibold"
    case "WRONG_ANSWER":
      return "text-red-600 font-semibold"
    case "TIME_LIMIT_EXCEEDED":
      return "text-orange-500 font-semibold"
    case "RUNTIME_ERROR":
      return "text-yellow-600 font-semibold"
    default:
      return "text-gray-600"
  }
}

const bytesToMB = (bytes: string) =>
  (parseInt(bytes) / (1024 * 1024)).toFixed(2) + " MB"

export default function ProblemSubmissions() {
  const { problemId } = useParams()
  const { data, isLoading, isError, error } = useSubmissionProblemList(problemId!)
  const [selected, setSelected] = useState<SubmissionOfProblem | null>(null)

  if (isLoading)
    return (
      <div className="p-6 text-gray-500 text-center">Loading submissions...</div>
    )
  if (isError) {
    const axiosError = error as any
    if (axiosError?.response?.status === 404) {
      return (
        <div className="p-6 text-gray-500 text-center">
          No submissions found for this problem.
        </div>
      )
    }

    return 
      <div className="p-6 text-red-500 text-center">
        Failed to load submissions.
      </div>
  }

  const submissions = data?.Submissions ?? []

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        Problem #{problemId} — Submissions
      </h1>
      <p className="text-gray-500 mb-6">
        Showing {submissions.length} submission(s)
      </p>

      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Verdict</th>
              <th className="py-3 px-4">Time (s)</th>
              <th className="py-3 px-4">Memory</th>
              <th className="py-3 px-4">Lang</th>
              <th className="py-3 px-4">When</th>
              <th className="py-3 px-4">Details</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-medium">{s.username}</td>
                <td className={`py-3 px-4 ${verdictColor(s.verdict)}`}>
                  {s.verdict}
                </td>
                <td className="py-3 px-4 text-center">
                  {s.cpu_time?.toFixed?.(3) ?? "—"}
                </td>
                <td className="py-3 px-4 text-center">
                  {bytesToMB(s.memory_usage)}
                </td>
                <td className="py-3 px-4 text-center">{s.language}</td>
                <td className="py-3 px-4 text-sm text-gray-500 text-center">
                  {new Date(s.timestamp).toLocaleString()}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => setSelected(s)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal chi tiết submission */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[700px] max-h-[80vh] overflow-y-auto shadow-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Submission #{selected.submission_id.slice(0, 8)}
              </h2>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => setSelected(null)}
              >
                ✖
              </button>
            </div>

            <p className={`mb-2 ${verdictColor(selected.verdict)}`}>
              Verdict: {selected.verdict} ({selected.message})
            </p>
            <p className="text-sm text-gray-600 mb-4">
              CPU: {selected.cpu_time.toFixed(3)}s — Memory:{" "}
              {bytesToMB(selected.memory_usage)}
            </p>

            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">#</th>
                  <th className="p-2 text-left">Verdict</th>
                  <th className="p-2 text-center">Time (s)</th>
                  <th className="p-2 text-center">Memory</th>
                  <th className="p-2 text-left">Output</th>
                </tr>
              </thead>
              <tbody>
                {selected.verdict_case.map((v: string, i: number) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-2">{i + 1}</td>
                    <td className={`p-2 ${verdictColor(v as Verdict)}`}>{v}</td>
                    <td className="p-2 text-center">
                      {selected.cpu_time_case[i]?.toFixed?.(3) ?? "—"}
                    </td>
                    <td className="p-2 text-center">
                      {bytesToMB(selected.memory_usage_case[i])}
                    </td>
                    <td className="p-2">{selected.outputs[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 text-right">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
