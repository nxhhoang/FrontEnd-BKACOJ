export interface SubmitRequest {
  problem_id?: string | null
  code: string
  language: string
  submission_type: 'ICPC' | 'CUSTOM'
}

export interface SubmitResponse {
  message: string
  id: string
}

export interface SubmissionDetail {
  problem_id: string
  verdict: string
  verdict_case: string[]
  cpu_time: number
  cpu_time_case: number[]
  memory_usage: string
  memory_usage_case: string[]
  n_success: number
  outputs: string[]
  points: number
  points_case: number[]
  message: string
  n_cases: number
  tl: number
  ml: string
  username: string
  timestamp: string
  type: string
  language: string
  source_code: string
  eval_status: string
}

export interface ProblemSubmissions {
  Submissions: SubmissionDetail[]
}

export interface SubmissionWSMessage {
  username: string
  submission_id: string
  problem_id: string
  timestamp: string
  language: string
  verdict_case: string[]
  cpu_time: number
  cpu_time_case: number[]
  memory_usage: string
  memory_usage_case: string[]
  n_success: number
  outputs: string[]
  points_case: number[]
  eval_status: string
}
