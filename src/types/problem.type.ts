export interface Problem {
  ID: string
  "problem-id": number
  name: string
  "short-name": string
  tags: string[]
  "test-num": number
  "time-limit": number
  "memory-limit": number
  "is-interactive"?: boolean
}


export interface ProblemList {
  list: number[]
}
