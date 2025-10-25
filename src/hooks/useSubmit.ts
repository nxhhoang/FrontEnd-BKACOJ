import { useMutation } from '@tanstack/react-query'
import submissionApi from '../apis/submission.api'
import type { SubmitRequest, SubmitResponse } from '../types/submission.type'
import type { SuccessResponse } from '../types/utils.type'

/**
 * Gửi code đến server để chấm (submit bài)
 * @example
 * const { mutate: submitCode, isPending, isSuccess, data } = useSubmit()
 * submitCode({ problem_id, code, language, submission_type: 'ICPC' })
 */
export function useSubmit() {
  return useMutation<SuccessResponse<SubmitResponse>, Error, SubmitRequest>({
    mutationFn: async (data: SubmitRequest) => {
      console.log('Submitting data:', data) // Log dữ liệu gửi đi
      const res = await submissionApi.submit(data)
      return res.data // API trả về { success, data: { message, id } }
    }
  })
}
