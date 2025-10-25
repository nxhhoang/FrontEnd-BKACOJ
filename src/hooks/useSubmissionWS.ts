// hooks/useSubmissionWS.ts
import { useEffect, useState } from 'react'
import submissionApi from '../apis/submission.api'
import type { SubmissionWSMessage } from '../types/submission.type'
import config from '../constants/config'

export function useSubmissionWS(submissionId?: string) {
  const [status, setStatus] = useState<SubmissionWSMessage | null>(null)

  useEffect(() => {
    if (!submissionId) return

    // Dùng config.baseUrl thay cho import.meta.env.VITE_BASE_URL
    const wsUrl = `${config.baseUrl}${submissionApi.getSubmissionUpdatesWs(undefined, undefined, submissionId)}`
    const ws = new WebSocket(wsUrl)

    ws.onopen = () => console.log('WebSocket connected for submission', submissionId)
    ws.onmessage = (event) => {
      const data: SubmissionWSMessage = JSON.parse(event.data)
      setStatus(data)
    }
    ws.onclose = () => console.log('WebSocket closed')
    ws.onerror = (err) => console.error('WebSocket error', err)

    return () => ws.close()
  }, [submissionId])

  return status
}
