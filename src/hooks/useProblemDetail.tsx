// hooks/useProblemDetail.ts
import { useQuery } from "@tanstack/react-query";
import problemApi from "../apis/problem.api";
import type { Problem } from "../types/problem.type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UseProblemDetailOptions<T> = {
  problemId: number;
  staticFiles: string;       // 'problem.json' | 'statement.pdf'
  responseType?: "json" | "blob";
  enabled?: boolean;
};

export function useProblemDetail<T = Problem>({
  problemId,
  staticFiles,
  responseType = "json",
  enabled = true, 
}: UseProblemDetailOptions<T>) {
  return useQuery({
    queryKey: ["problem", problemId, staticFiles],
    queryFn: () => problemApi.getProblemDetail<T>(problemId, staticFiles, responseType),
    enabled: enabled && !!problemId,
    staleTime: Infinity,
  });
}
