import { useState } from 'react'
import { useSubmit } from '../../hooks/useSubmit'
import { escapeString } from '../../utils/utils'
import { Loader2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { useProblemDetail } from '../../hooks/useProblemDetail'

const languages = [
  { id: 'cpp11', name: 'C++11' },
  { id: 'cpp14', name: 'C++14' },
  { id: 'cpp17', name: 'C++17' },
  { id: 'pypy3', name: 'PyPy 3' },
  { id: 'python3', name: 'Python 3' }
]

export default function SubmitPage() {
  const { problemId } = useParams()
  const problemIdNum = Number(problemId)
  const queryClient = useQueryClient()

  const cachedProblem = queryClient.getQueryData(['problem', problemIdNum, 'problem.json']) as
    | { data: { name: string; 'problem-id': number } }
    | undefined

  const { data: fetchedProblem } = useProblemDetail({
    problemId: problemIdNum,
    staticFiles: 'problem.json',
    responseType: 'json',
    // Chỉ fetch nếu cache không có
    enabled: !cachedProblem && !!problemIdNum
  })

  const problemName = cachedProblem?.data?.name ?? fetchedProblem?.data?.name ?? '(Đang tải tên bài...)'

  const [language, setLanguage] = useState(languages[0].id)
  const [code, setCode] = useState('// Write your solution here\n')

  const { mutate: submitCode, isPending, data } = useSubmit()

  const handleSubmit = () => {
    if (!code.trim()) return alert('Vui lòng nhập code!')

    submitCode(
      {
        problem_id: problemId,
        language,
        code: escapeString(code),
        submission_type: 'ICPC'
      },
      {
        onSuccess: (res) => {
          // res.data.id là submissionId
          window.location.href = `/submission/${res.data.id}`
        }
      }
    )
  }

  const handleReset = () => setCode('// Write your solution here\n')

  return (
    <div className='max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border'>
      <h1 className='text-2xl font-bold mb-6 text-gray-800'>Submit Your Solution</h1>

      {/* Selectors */}
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block font-semibold text-gray-700 mb-2'>Problem</label>
          <div className='w-full p-2 border rounded-lg bg-gray-50 text-gray-800'>{problemName}</div>
        </div>

        <div>
          <label className='block font-semibold text-gray-700 mb-2'>Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='w-full p-2 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-300'
          >
            {languages.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Code editor */}
      <div className='mb-6'>
        <label className='block font-semibold text-gray-700 mb-2'>Source Code</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={18}
          spellCheck={false}
          className='w-full font-mono text-sm p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-blue-300'
        />
      </div>

      <div className='flex items-center gap-3'>
        {data?.data.id ? (
          <Link
            to={`/submission/${data.data.id}`}
            className='flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-70'
          >
            View Submission #{data.data.id}
          </Link>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className='flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-70'
          >
            {isPending && <Loader2 className='animate-spin w-4 h-4' />}
            Submit Code
          </button>
        )}

        <button onClick={handleReset} className='px-5 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200'>
          Reset
        </button>
      </div>
    </div>
  )
}

// #include <bits/stdc++.h>
// #define FOR(i, a, b) for (int i = (a), _b = (b); i < _b; i++)
// #define endl '\n'
// #define debug(x) cout << #x << " = " << x << '\n'
// #define ub upper_bound // find target < min(value)
// #define lb lower_bound // find target <= min(value)
// #define fi first
// #define se second
// #define SIZE(x) (int)(x).size()

// #define all(a) (a).begin(), (a).end()
// #define pii pair<int, int>
// #define pll pair<long long, long long>
// #define vi vector<int>
// using namespace std;
// using ll = long long;
// using ull = unsigned long long;

// const ll inf = 2e18;
// const int NN = 10;
// const int MSIZE = 1e5 + 5;
// const int MAXN = 2e5 + 1;
// const int MOD = 1e9 + 7;
// const int dx[] = {1, -1, 0, 0};
// const int dy[] = {0, 0, 1, -1};

// vector<ll> h(MAXN);
// vector<ll> r(MAXN);

// ll safeCeil(double value) {
//     double diff = std::abs(value - std::round(value));
//     return (diff < 1e-9) ? static_cast<int>(std::round(value)) : static_cast<int>(std::ceil(value));
// }

// void solve()
// {
//     ll n, R, C;
//     cin >> n >> R >> C;
//     ll sum = 0;
//     for (int i = 0; i < n; i++) cin >> h[i];
//     for (int i = 0; i < n; i++) {
//         cin >> r[i];
//         sum += safeCeil(1.0 * r[i] / R) * safeCeil(1.0 * h[i] / C);
//     }
//     cout << sum << endl;
// }

// int main()
// {
//     ios_base::sync_with_stdio(false);
//     cin.tie(NULL);
//     // freopen("K-query.inp", "r", stdin);
//     // freopen("K-query.ans", "w", stdout);

//     int t = 1;
//     cin >> t;

//     while (t--)
//     {
//         solve();
//     }
//     return 0;
// }
