import type { Problem, ProblemList} from '../types/problem.type';
// import type { SuccessResponse } from '../types/utils.type';
import http from '../utils/http';

const URL = 'problem';

const problemApi = {
  getProblems() {
    // GET /problem/all
    return http.get<ProblemList>(`${URL}/all`)
  },
  getProblemDetail<T = Problem>(problemId: number, staticFiles: string, responseType: 'json' | 'blob' = 'json') {
    // POST /problem/get/:problemId/:staticFiles
    return http.get<T>(`${URL}/get/${problemId}/${staticFiles}`, { responseType })
  },
}

export default problemApi;
