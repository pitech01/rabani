export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Business Units',
    href: '/business-units',
    children: [
      { label: 'Logistics & Marine Operations', href: '/business-units/logistics-marine' },
      { label: 'Solid Minerals & Mining', href: '/business-units/solid-minerals-mining' },
    ],
  },
  { label: 'Technology', href: '/technology' },
  { label: 'Safety', href: '/safety' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  businessUnits: [
    { label: 'Logistics & Marine Operations', href: '/business-units/logistics-marine' },
    { label: 'Solid Minerals & Mining', href: '/business-units/solid-minerals-mining' },
  ],
  more: [
    { label: 'Technology & Innovation', href: '/technology' },
    { label: 'Safety & Risk Management', href: '/safety' },
    { label: 'Sustainability & Impact', href: '/sustainability' },
  ],
}
