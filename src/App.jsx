import { useState, useEffect } from 'react'

function App() {
  const [commissions, setCommissions] = useState(() => {
    const saved = localStorage.getItem('commissions')
    return saved ? JSON.parse(saved) : []
  })

  const [name, setName] = useState('')
  const [design, setDesign] = useState('')

  useEffect(() => {
    localStorage.setItem('commissions', JSON.stringify(commissions))
  }, [commissions])

  const statuses = ['Requested', 'In Progress', 'Completed']

  function addCommission(e) {
    e.preventDefault()
    if (!name.trim() || !design.trim()) return
    const newCommission = {
      id: Date.now(),
      name,
      design,
      status: 'Requested',
    }
    setCommissions([...commissions, newCommission])
    setName('')
    setDesign('')
  }

  function cycleStatus(id) {
    setCommissions(commissions.map(c => {
      if (c.id !== id) return c
      const nextIndex = (statuses.indexOf(c.status) + 1) % statuses.length
      return { ...c, status: statuses[nextIndex] }
    }))
  }

  function deleteCommission(id) {
    setCommissions(commissions.filter(c => c.id !== id))
  }

  function statusColor(status) {
    if (status === 'Requested') return 'bg-amber-100 text-amber-800'
    if (status === 'In Progress') return 'bg-blue-100 text-blue-800'
    return 'bg-green-100 text-green-800'
  }

  return (
    <div className="min-h-screen bg-[#F5EFE4] p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#A66B6E] mb-1">Ottilie Tuft</h1>
        <p className="text-[#8A7E77] mb-6">Commission Tracker</p>

        <form onSubmit={addCommission} className="bg-white rounded-xl p-4 mb-6 shadow-sm flex flex-col gap-3">
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-[#7A6355]/30 rounded-lg px-3 py-2 outline-none focus:border-[#A66B6E]"
          />
          <input
            type="text"
            placeholder="Rug design / theme"
            value={design}
            onChange={e => setDesign(e.target.value)}
            className="border border-[#7A6355]/30 rounded-lg px-3 py-2 outline-none focus:border-[#A66B6E]"
          />
          <button
            type="submit"
            className="bg-[#A66B6E] text-white rounded-lg py-2 font-semibold hover:bg-[#8A5457] transition"
          >
            Add Commission
          </button>
        </form>

        <div className="flex flex-col gap-3">
          {commissions.length === 0 && (
            <p className="text-center text-[#8A7E77]">No commissions yet — add one above.</p>
          )}

          {commissions.map(c => (
            <div key={c.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#3A2E2B]">{c.name}</p>
                <p className="text-sm text-[#8A7E77]">{c.design}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => cycleStatus(c.id)}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor(c.status)}`}
                >
                  {c.status}
                </button>
                <button
                  onClick={() => deleteCommission(c.id)}
                  className="text-[#8A7E77] hover:text-red-500 text-lg px-2"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App