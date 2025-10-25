import { useQuery } from '@tanstack/react-query'
import submissionApi from '../apis/submission.api'
import type { ProblemSubmissions } from '../types/submission.type'

/**
 * Fetch submissions of a specific problem
 * @param problemId ID của bài toán
 */
async function fetchSubmissionsByProblem(problemId: string): Promise<ProblemSubmissions> {
  const { data } = await submissionApi.getSubmissionsByProblem(problemId)
  // console.log(data)
  return data.data // API của bạn gói dữ liệu thật trong field `data`
}

/**
 * Hook lấy danh sách submissions của một problem
 * @example
 * const { data, isLoading, isError } = useSubmissionsProblem(problemId)
 */
export function useSubmissionProblemList(problemId: string) {
  return useQuery<ProblemSubmissions, Error>({
    queryKey: ['submissions', problemId],
    queryFn: () => fetchSubmissionsByProblem(problemId),
    enabled: !!problemId,           
    staleTime: 5 * 60 * 1000,       
    gcTime: 30 * 60 * 1000          
  })
}
