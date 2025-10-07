// hooks/useProblems.ts
import { useQuery } from '@tanstack/react-query'
import problemApi from '../apis/problem.api'
import type { Problem } from '../types/problem.type'

async function fetchProblems(): Promise<Problem[]> {
  const { data } = await problemApi.getProblems()
  const ids = data.list

  const problems = await Promise.all(
    ids.map(async (id) => {
      const res = await problemApi.getProblemDetail(id, 'problem.json', 'json')
      return res.data
    })
  )

  return problems
}

export function useProblems() {
  return useQuery<Problem[], Error>({
    queryKey: ['problems'],
    queryFn: fetchProblems,
    staleTime: 5 * 60 * 1000, // cache 5 phút
    gcTime: 30 * 60 * 1000    // giữ trong bộ nhớ 30 phút
  })
}
