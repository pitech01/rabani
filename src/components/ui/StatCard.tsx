export function StatCard({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="rounded-none border border-navy-200 bg-white p-6 transition-all duration-150 hover:-translate-y-1 hover:border-navy-950">
      <p className="font-heading text-3xl font-bold text-navy-950">{value}</p>
      <p className="mt-1 text-sm font-semibold text-navy-800">{label}</p>
      {detail && <p className="mt-1 text-xs text-navy-500">{detail}</p>}
    </div>
  )
}
