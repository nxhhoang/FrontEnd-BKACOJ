// fakeProblemData.ts
import problemApi from "../../../apis/problem.api";
import type { Problem } from "../../../types/problem.type";

let cachedProblems: Problem[] | null = null;

export async function fetchProblems(): Promise<Problem[]> {
  if (cachedProblems) return cachedProblems;

  try {
    const {data} = await problemApi.getProblems();

    console.log('✅ Danh sách ID bài toán đã tải:', data.list);
    const ids = data.list;

    const problems = await Promise.all(
      ids.map(async (id) => {
        const res = await problemApi.getProblemDetail(id, "problem.json", 'json');
        return res.data; 
      })
    );

    cachedProblems = problems;
    return problems;
  } catch (error) {
    console.error('❌ Lỗi khi tải danh sách bài toán:', error);
    return [];
  }
}
