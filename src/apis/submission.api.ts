import type { SubmitRequest, SubmitResponse, SubmissionDetail, ProblemSubmissions } from '../types/submission.type'
import type { SuccessResponse } from '../types/utils.type'
import http from '../utils/http'

const URL = '/api/v1/submission'

const submissionApi = {
  submit(data: SubmitRequest) {
    const response = http.post<SuccessResponse<SubmitResponse>>(`${URL}/submit`, data)
    console.log(response)
    return response
  },

  getSubmissionDetail(submissionId: string) {
    return http.get<SuccessResponse<SubmissionDetail>>(`${URL}/view/${submissionId}`)
  },

  getSubmissionsByProblem(problemId: string) {
    // console.log('Fetching submissions for problemId:', problemId)
    const data = http.get<SuccessResponse<ProblemSubmissions>>(`${URL}/problem/view/${problemId}`)
    // console.log(data)
    return data
  },

  getSubmissionUpdatesWs(username?: string, problemId?: string, submissionId?: string) {
    // eslint-disable-next-line prefer-const
    let query = []
    if (username) query.push(`username=${username}`)
    if (problemId) query.push(`problem_id=${problemId}`)
    if (submissionId) query.push(`submission_id=${submissionId}`)
    const queryString = query.length ? `?${query.join('&')}` : ''
    return `${URL}/ws${queryString}`
  }
}

export default submissionApi
