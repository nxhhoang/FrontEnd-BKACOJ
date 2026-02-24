import { useQuery } from '@tanstack/react-query'
import submissionApi from '../apis/submission.api'
import type { SubmissionDetail } from '../types/submission.type'

export function useSubmissionDetail(submissionId: string) {
  return useQuery<SubmissionDetail, Error>({
    queryKey: ['submissionDetail', submissionId],
    queryFn: async () => {
      const { data } = await submissionApi.getSubmissionDetail(submissionId)
      return data.data 
    },
    enabled: !!submissionId,
  })
}