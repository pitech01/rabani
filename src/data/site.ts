export const site = {
  name: 'Rabani Geologistics Limited',
  shortName: 'Rabani Geologistics',
  tagline: 'An Integrated Nigerian Conglomerate in Logistics, Marine Operations & Solid Minerals',
  rcNumber: '1639228',
  incorporationDate: '5 December 2019',
  incorporationYear: '2019',
  country: 'Nigeria',
  address: '116 Victoria Street, Ojota, Lagos, Nigeria',
  addressShort: 'Ojota, Lagos, Nigeria',
  phonePrimary: '0706 722 7300',
  phoneSecondary: '0816 873 7300',
  emailPrimary: 'info@rabanigeo.com',
  emailCorporate: 'info@rabanigeo.com',
  miningLocation: 'Ilesa, Osun State',
} as const

export const divisions = {
  logistics: {
    name: 'Logistics & Marine Operations',
    short: 'Logistics & Marine',
    description:
      'Barge operations, container haulage, clearing and forwarding, and end-to-end supply chain solutions across Nigerian waterways and trade corridors.',
    color: 'navy',
    href: '/business-units/logistics-marine',
  },
  mining: {
    name: 'Solid Minerals & Mining',
    short: 'Minerals & Mining',
    description:
      'Mining operations in Ilesa, Osun State, with an expanding portfolio of sites, backed by mineral trading and export logistics.',
    color: 'ember',
    href: '/business-units/solid-minerals-mining',
  },
} as const
