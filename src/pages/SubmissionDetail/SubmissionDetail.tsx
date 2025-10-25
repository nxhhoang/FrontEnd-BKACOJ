import { useParams } from 'react-router-dom'
import { useSubmissionWS } from '../../hooks/useSubmissionWS'

export default function SubmissionDetailPage() {
  const { submissionId } = useParams<{ submissionId: string }>()
  const status = useSubmissionWS(submissionId)

  if (!status) return <div>PENDING</div>

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
      <h1 className="text-xl font-bold mb-4">Submission ID: {status.submission_id}</h1>
      <p>Language: {status.language}</p>
      <p>Status: {status.eval_status}</p>
      <p>Success cases: {status.n_success}</p>

      <h2 className="mt-4 font-semibold">Testcases:</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr>
            <th className="border px-2 py-1">#</th>
            <th className="border px-2 py-1">Verdict</th>
            <th className="border px-2 py-1">CPU Time</th>
            <th className="border px-2 py-1">Memory</th>
            <th className="border px-2 py-1">Output</th>
            <th className="border px-2 py-1">Points</th>
          </tr>
        </thead>
        <tbody>
          {status.verdict_case.map((v, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{i + 1}</td>
              <td className="border px-2 py-1">{v}</td>
              <td className="border px-2 py-1">{status.cpu_time_case[i]}</td>
              <td className="border px-2 py-1">{status.memory_usage_case[i]}</td>
              <td className="border px-2 py-1">{status.outputs[i]}</td>
              <td className="border px-2 py-1">{status.points_case[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
