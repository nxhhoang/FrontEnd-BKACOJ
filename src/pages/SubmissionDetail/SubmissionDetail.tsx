import { useState } from "react"
import Editor from "@monaco-editor/react";
import { useParams} from "react-router-dom"
import { useSubmissionDetail } from "../../hooks/useSubmissionDetail"

function detectEditorLanguage(lang?: string) {
  if (!lang) return "plaintext"

  const l = lang.toLowerCase()

  if (l.includes("c++")) return "cpp"
  if (l.includes("py")) return "python"
  if (l.includes("java")) return "java"
  if (l.includes("javascript")) return "javascript"
  if (l.includes("c#")) return "csharp"

  return "plaintext"
}

const verdictColor = (v: string) => {
  switch (v) {
    case "ACCEPTED": return "text-green-600 font-semibold"
    case "WRONG_ANSWER": return "text-red-600 font-semibold"
    case "TIME_LIMIT_EXCEEDED": return "text-orange-500 font-semibold"
    case "RUNTIME_ERROR": return "text-yellow-600 font-semibold"
    default: return "text-gray-600"
  }
}

const bytesToMB = (bytes: string | number) => {
  if (!bytes) return "0.00 MB"
  const val = typeof bytes === "string" ? parseInt(bytes.replace("B", "")) : bytes
  return (val / (1024 * 1024)).toFixed(2) + " MB"
}

export default function SubmissionDetailPage() {
  const { submissionId } = useParams<{ submissionId: string }>()
  const { data: detail, isLoading, isError } = useSubmissionDetail(submissionId!)
  const [isExecutionResultsOpen, setIsExecutionResultsOpen] = useState(false)

  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading details...</div>
  if (isError || !detail) return <div className="p-8 text-center text-red-500">Submission not found.</div>

  return (
    <div className='max-w-4xl mx-auto mt-8 p-6'>
      <div className='flex flex-col gap-6'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
          <h1 className='text-xl font-bold mb-4 border-b pb-2'>
            Submission <span className='text-gray-500 font-mono text-lg'>#{submissionId?.slice(0, 8)}</span>
          </h1>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
            <div>
              <p className='text-gray-500'>Author</p>
              <p className='font-semibold text-blue-600'>{detail.username}</p>
            </div>
            <div>
              <p className='text-gray-500'>Problem</p>
              <p className='font-semibold'>{detail.problem_id}</p>
            </div>
            <div>
              <p className='text-gray-500'>Language</p>
              <p className='font-semibold'>{detail.language}</p>
            </div>
            <div>
              <p className='text-gray-500'>Status</p>
              <p className={verdictColor(detail.verdict)}>{detail.verdict}</p>
            </div>
            <div>
              <p className='text-gray-500'>Time Limit</p>
              <p className='font-semibold'>{detail.tl} ms</p>
            </div>
            <div>
              <p className='text-gray-500'>Memory Limit</p>
              <p className='font-semibold'>{bytesToMB(detail.ml)}</p>
            </div>
            <div>
              <p className='text-gray-500'>Max Time</p>
              <p className='font-semibold'>{detail.cpu_time}s</p>
            </div>
            <div>
              <p className='text-gray-500'>Max Memory</p>
              <p className='font-semibold'>{bytesToMB(detail.memory_usage)}</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
          <div
            className='p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors'
            onClick={() => setIsExecutionResultsOpen(!isExecutionResultsOpen)}
          >
            <h2 className='text-lg font-bold select-none'>
              Execution Results
              <span className='text-sm font-normal text-green-600 bg-green-50 px-2 py-1 rounded ml-3'>
                {detail.n_success} / {detail.n_cases} passed
              </span>
            </h2>

            <svg
              className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isExecutionResultsOpen ? 'rotate-180' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </div>

          {isExecutionResultsOpen && (
            <div className='px-6 pb-6 animate-fade-in-down'>
              <div className='overflow-x-auto border rounded-lg'>
                <table className='w-full text-sm'>
                  <thead className='bg-gray-50 border-b'>
                    <tr>
                      <th className='px-4 py-2 text-left text-gray-600 font-semibold'>Test case</th>
                      <th className='px-4 py-2 text-left text-gray-600 font-semibold'>Verdict</th>
                      <th className='px-4 py-2 text-center text-gray-600 font-semibold'>Time</th>
                      <th className='px-4 py-2 text-center text-gray-600 font-semibold'>Memory</th>
                      <th className='px-4 py-2 text-left text-gray-600 font-semibold'>Output Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.verdict_case?.map((v, i) => (
                      <tr key={i} className='border-b last:border-0 hover:bg-gray-50'>
                        <td className='px-4 py-2 font-medium'>#{i + 1}</td>
                        <td className={`px-4 py-2 ${verdictColor(v)}`}>{v}</td>
                        <td className='px-4 py-2 text-center text-gray-600'>{detail.cpu_time_case[i]}s</td>
                        <td className='px-4 py-2 text-center text-gray-600'>
                          {bytesToMB(detail.memory_usage_case[i])}
                        </td>
                        <td className='px-4 py-2 text-gray-500 truncate max-w-[200px]' title={detail.outputs[i]}>
                          {detail.outputs[i]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className='bg-[#1e1e1e] rounded-xl shadow-sm overflow-hidden border border-gray-700 w-full'>
          <div className='bg-[#2d2d2d] px-4 py-3 flex justify-between items-center text-sm border-b border-gray-600'>
            <span className='text-gray-300 font-semibold'>Source Code</span>
            <button
              onClick={() => navigator.clipboard.writeText(detail.source_code)}
              className='text-gray-400 hover:text-white transition'
            >
              Copy
            </button>
          </div>
          <div className='p-0'>
            <Editor
              height='600px'
              language={detectEditorLanguage(detail.language)}
              value={detail.source_code}
              theme='vs-dark'
              options={{
                readOnly: true,
                fontSize: 14,
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
                wordWrap: 'on'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}