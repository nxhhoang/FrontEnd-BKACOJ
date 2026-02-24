import { useParams, useNavigate } from "react-router-dom"
import { useSubmissionProblemList } from "../../hooks/useSubmissionProblemList"

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
    case "JUDGING":
    case "PENDING":
      return "text-blue-500 font-semibold animate-pulse"
    default:
      return "text-gray-600 font-semibold"
  }
}

const bytesToMB = (bytes: string | number) => {
  if (!bytes) return "0.00 MB"
  const val = typeof bytes === "string" ? parseInt(bytes.replace("B", "")) : bytes
  return (val / (1024 * 1024)).toFixed(2) + " MB"
}

export default function ProblemSubmissions() {
  const { problemId } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useSubmissionProblemList(problemId!)

  if (isLoading)
    return <div className="p-6 text-gray-500 text-center">Loading submissions...</div>
  
  if (isError) {
    const axiosError = error as any
    if (axiosError?.response?.status === 404) {
      return <div className="p-6 text-gray-500 text-center">No submissions found.</div>
    }
    return <div className="p-6 text-red-500 text-center">Failed to load submissions.</div>
  }

  const submissions = data?.Submissions ?? []

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Problem #{problemId} — Submissions</h1>
      
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200 mt-4">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 font-semibold uppercase text-xs">
            <tr>
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Verdict</th>
              <th className="py-3 px-4 text-center">Time (s)</th>
              <th className="py-3 px-4 text-center">Memory</th>
              <th className="py-3 px-4 text-center">Lang</th>
              <th className="py-3 px-4 text-center">Sent</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.submission_id} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-medium">{s.username}</td>
                <td className={`py-3 px-4 ${verdictColor(s.verdict)}`}>{s.verdict}</td>
                <td className="py-3 px-4 text-center">{s.cpu_time?.toFixed(3) ?? "—"}</td>
                <td className="py-3 px-4 text-center">{bytesToMB(s.memory_usage)}</td>
                <td className="py-3 px-4 text-center">{s.language}</td>
                <td className="py-3 px-4 text-gray-500 text-center">
                  {new Date(s.timestamp).toLocaleString()}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => navigate(`/submission/${s.submission_id}`)}
                    className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
                  >
                    Detail View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}