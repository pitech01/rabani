import type { LeadershipProfile } from '../../data/leadership'

export function LeadershipCard({ profile }: { profile: LeadershipProfile }) {
  return (
    <div className="flex h-full flex-col rounded-none border border-navy-200 bg-white p-6 transition-all duration-150 hover:-translate-y-1 hover:border-navy-950">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-none bg-navy-950 font-heading text-lg font-bold text-white">
          {profile.initials}
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy-950">{profile.name}</h3>
          <p className="text-xs font-bold uppercase tracking-wider text-ember-600">{profile.role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-navy-600">{profile.bio}</p>
    </div>
  )
}
