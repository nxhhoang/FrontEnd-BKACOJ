// hooks/useSubmissionWS.ts
import { useEffect, useState } from 'react'
import submissionApi from '../apis/submission.api'
import type { SubmissionWSMessage } from '../types/submission.type'
import config from '../constants/config'
import { getAccessTokenFromLS } from '../utils/auth'

export function useSubmissionWS(submissionId?: string) {
  const [status, setStatus] = useState<SubmissionWSMessage | null>(null)

  useEffect(() => {
    if (!submissionId) return

    const accessToken = getAccessTokenFromLS() || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwic3ViIjoxLCJpYXQiOjE3NTUyODg1NDAsImV4cCI6MTc2MDQ3MjU0MH0.5xYYPtPpNQo6QP_CmhThVDT0kTaQLAHThtXEXA_sfX8"

    const wsUrl = `${config.baseUrl.replace(/^http/, 'ws')}${submissionApi.getSubmissionUpdatesWs(undefined, undefined, submissionId)}&access_token=${accessToken}`
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


// import { useEffect, useState } from 'react'
// import submissionApi from '../apis/submission.api'
// import type { SubmissionWSMessage } from '../types/submission.type'
// import { getAccessTokenFromLS } from '../utils/auth'
// import config from '../constants/config'

// export function useSubmissionWS(submissionId?: string) {
//   const [status, setStatus] = useState<SubmissionWSMessage | null>(null)

//   useEffect(() => {
//     if (!submissionId) return

//     let ws: WebSocket | null = null
//     const accessToken = getAccessTokenFromLS() || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwic3ViIjoxLCJpYXQiOjE3NTUyODg1NDAsImV4cCI6MTc2MDQ3MjU0MH0.5xYYPtPpNQo6QP_CmhThVDT0kTaQLAHThtXEXA_sfX8"

//     const fetchFallback = async () => {
//       try {
//         const res = await submissionApi.getSubmissionDetail(submissionId)
//         setStatus(res.data)
//       } catch (error) {
//         console.error('Failed to fetch submission detail', error)
//       }
//     }

//     if (!accessToken) {
//       console.warn('No access token, fetching fallback data via HTTP')
//       fetchFallback()
//       return
//     }

//     const wsUrl = `${config.baseUrl.replace(/^http/, 'ws')}${submissionApi.getSubmissionUpdatesWs(undefined, undefined, submissionId)}&access_token=${accessToken}`
//     ws = new WebSocket(wsUrl)

//     ws.onopen = () => {
//       console.log('WebSocket connected for submission', submissionId)
//       setWsConnected(true)
//     }
//     ws.onmessage = (event) => {
//       const data: SubmissionWSMessage = JSON.parse(event.data)
//       setStatus(data)
//     }
//     ws.onclose = () => {
//       console.log('WebSocket closed')
//       setWsConnected(false)
//       // Nếu chưa có data, fallback fetch
//       if (!status) fetchFallback()
//     }
//     ws.onerror = (err) => {
//       console.error('WebSocket error', err)
//       ws?.close()
//       setWsConnected(false)
//       if (!status) fetchFallback()
//     }

//     return () => ws?.close()
//   }, [submissionId])

//   return status
// }
