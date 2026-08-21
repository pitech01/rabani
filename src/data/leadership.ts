export type LeadershipProfile = {
  name: string
  role: string
  bio: string
  initials: string
}

export const leadership: LeadershipProfile[] = [
  {
    name: 'Olabanji Owoeye',
    role: 'Managing Director',
    bio: 'Brings over 20 years of business management experience and has led the company’s transformation from a logistics operator into a diversified conglomerate spanning logistics, barge operations, haulage, and mining and export.',
    initials: 'OO',
  },
  {
    name: 'Rufus Emmanuel Sunday',
    role: 'Operations Director',
    bio: 'Appointed following the passing of founding member Ralph Ekundayo, and has since strengthened operational efficiency across the group while supporting its diversification into mining.',
    initials: 'RS',
  },
  {
    name: 'Wasiu Ramon',
    role: 'General Manager',
    bio: 'Background in Mathematics/Physics Education, with prior roles in finance houses and investment firms, complemented by hands-on trucking and mineral export experience.',
    initials: 'WR',
  },
  {
    name: 'Rapheal Kayode Timothy',
    role: 'Operations Manager',
    bio: 'Graduate of the Federal College of Fisheries and Marine Technology, holding an Advanced Diploma in Transport and Shipping Management, with extensive maritime and logistics leadership across multiple firms.',
    initials: 'RT',
  },
]

export const inMemoriam = {
  name: 'Ralph Ekundayo',
  note:
    'Rabani Geologistics Limited honours the memory of Ralph Ekundayo, a founding member whose vision and dedication helped lay the foundation for the company’s growth from a logistics operator into the diversified conglomerate it is today. His contribution to the company’s early direction and culture continues to guide the leadership that succeeded him.',
}
