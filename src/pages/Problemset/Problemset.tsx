import { useState } from "react";
import { Search, ChevronLeft, ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";
import { useProblems } from './../../hooks/useProblems';


export default function Problemset() {
  const { data: problems, isLoading, isError } = useProblems()
  const [search, setSearch] = useState("")
  const [hideSolved, setHideSolved] = useState(false)
  const [hasEditorial, setHasEditorial] = useState(false)
  const [showTypes, setShowTypes] = useState(false)

  // Filter
  const filteredProblems = (problems ?? []).filter((p) => {
    if (!search) return true
    const searchLower = search.toLowerCase()
    const nameMatch = p.name.toLowerCase().includes(searchLower)
    const idMatch = String(p['problem-id']).includes(searchLower);
    return nameMatch || idMatch
  })

  if (isLoading) return <div className="p-6">Đang tải danh sách bài toán...</div>
  if (isError) return <div className="p-6">Lỗi khi tải danh sách bài toán</div>

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Problem list</h1>

      <div className='grid grid-cols-4 gap-6'>
        {/* Problem Table */}
        <div className='col-span-3 bg-white rounded-2xl shadow p-4 overflow-x-auto'>
          <table className='w-full border-collapse text-sm'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='text-left p-2'>ID</th>
                <th className='text-left p-2'>Problem</th>
                <th className='text-left p-2'>Short Name</th>
                <th className='text-left p-2'>Tags</th>
                <th className='text-left p-2'>Tests</th>
                <th className='text-left p-2'>Time Limit (ms)</th>
                <th className='text-left p-2'>Memory Limit (MB)</th>
                {showTypes && <th className='text-left p-2'>Type</th>}
              </tr>
            </thead>
            <tbody>
              {filteredProblems.map((p) => (
                <tr key={p.ID} className='border-b hover:bg-gray-50'>
                  <td className='p-2 text-blue-600 hover:underline cursor-pointer'>
                    <Link to={`/problem/${p['problem-id']}`}>{p["problem-id"]}</Link>
                  </td>
                  <td className='p-2 text-blue-600 hover:underline cursor-pointer'>
                    <Link to={`/problem/${p['problem-id']}`}>{p.name}</Link>
                  </td>

                  <td className='p-2'>{p['short-name']}</td>
                  <td className='p-2'>{p.tags?.join(', ') ?? ''}</td>
                  <td className='p-2'>{p['test-num']}</td>
                  <td className='p-2'>{p['time-limit']}</td>
                  <td className='p-2'>{(p['memory-limit'] / (1024 * 1024)).toFixed(0)}</td>
                  {showTypes && <td className='p-2'>{p['is-interactive'] || 'standard'}</td>}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className='flex justify-center items-center gap-2 mt-4'>
            <button className='p-2 rounded hover:bg-gray-200'>
              <ChevronLeft className='w-4 h-4' />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded ${page === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              >
                {page}
              </button>
            ))}
            <button className='p-2 rounded hover:bg-gray-200'>
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className='col-span-1 bg-white rounded-2xl shadow p-4'>
          <h2 className='text-lg font-semibold mb-2'>Problem search</h2>
          <div className='relative mb-3'>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search problems...'
              className='w-full border rounded-xl p-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <Search className='absolute left-2 top-2.5 w-4 h-4 text-gray-400' />
          </div>

          <label className='block mb-2'>
            <input type='checkbox' className='mr-2' checked={hideSolved} onChange={() => setHideSolved(!hideSolved)} />
            Hide solved problems
          </label>
          <label className='block mb-2'>
            <input
              type='checkbox'
              className='mr-2'
              checked={hasEditorial}
              onChange={() => setHasEditorial(!hasEditorial)}
            />
            Has editorial
          </label>
          <label className='block mb-4'>
            <input type='checkbox' className='mr-2' checked={showTypes} onChange={() => setShowTypes(!showTypes)} />
            Show problem types
          </label>

          <button className='bg-blue-500 text-white px-4 py-2 rounded-xl w-full'>Search</button>
          <button className='bg-gray-100 px-4 py-2 rounded-xl w-full mt-2 hover:bg-gray-200'>Random</button>
        </div>
      </div>
    </div>
  )
}