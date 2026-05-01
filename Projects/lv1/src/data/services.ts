export interface ServiceData {
  slug: string;
  title: string;
  group: 'home' | 'business';
  desc: string;
  details: string;
  heroSubtitle: string;
  price: string;
  img?: string;
  bannerImg?: string;
  included: string[];
  stats: { value: string; label: string }[];
  approach: string;
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: 'driveway-pressure-washing',
    title: 'Driveway Pressure Washing',
    group: 'home',
    heroSubtitle: 'Restore Your Driveway',
    price: 'From Â£60',
    desc: 'High-pressure cleaning that removes oil, moss, algae and years of built-up grime â€” restoring your driveway to its best.',
    details: 'Our driveway pressure washing service uses professional-grade equipment to blast away years of built-up dirt, oil stains, moss, algae and grime.',
    bannerImg: '/gallery-1.png',
    included: [
      'High-pressure hot water treatment',
      'Moss & algae removal',
      'Oil & stain treatment',
      'Full area rinse & tidy-up',
      'Post-clean inspection',
    ],
    stats: [
      { value: 'From Â£60', label: 'Starting Price' },
      { value: '1â€“3 hrs', label: 'Typical Duration' },
      { value: '100%', label: 'Satisfaction' },
    ],
    approach: 'We assess the driveway surface, apply the appropriate pressure setting and detergent, then systematically clean from top to bottom. All waste water is directed away from drains responsibly.',
    faqs: [
      { q: 'How long does a driveway clean take?', a: 'Most standard driveways take 1â€“3 hours depending on size and how dirty they are.' },
      { q: 'Will pressure washing damage my driveway?', a: 'No â€” we adjust pressure settings based on the surface type to safely clean without causing damage.' },
    ],
  },
  {
    slug: 'fence-wall-washing',
    title: 'Fence & Wall Washing',
    group: 'home',
    heroSubtitle: 'Revive Your Fences & Walls',
    price: 'From Â£40',
    desc: 'Bring weathered fences and walls back to life with our thorough pressure washing service â€” removing green algae, mould and discolouration.',
    details: 'Fences and walls are constantly exposed to the elements, leading to green algae, mould and general discolouration. Our service removes all of this, restoring the original appearance.',
    bannerImg: '/gallery-2.png',
    included: [
      'Soft or pressure wash depending on surface',
      'Green algae & mould removal',
      'Fence panel & post cleaning',
      'Wall & render surface treatment',
      'Full tidy-up after completion',
    ],
    stats: [
      { value: 'From Â£40', label: 'Starting Price' },
      { value: '1â€“2 hrs', label: 'Typical Duration' },
      { value: '100%', label: 'Satisfaction' },
    ],
    approach: 'We assess the material (wood, concrete, brick, render) and select the appropriate cleaning method. Delicate surfaces like timber receive a softer wash to avoid damage.',
    faqs: [
      { q: 'Can you clean treated timber fences?', a: 'Yes â€” we use appropriate pressure and technique for timber to clean without stripping protective coatings.' },
      { q: 'How often should fences be cleaned?', a: 'We recommend a clean every 1â€“2 years to prevent build-up of algae and mould.' },
    ],
  },
  {
    slug: 'patio-pressure-washing',
    title: 'Patio Pressure Washing',
    group: 'home',
    heroSubtitle: 'Transform Your Outdoor Space',
    price: 'From Â£40',
    desc: 'Transform your patio with a thorough pressure wash â€” removing moss, stubborn stains and discolouration from slabs and outdoor areas.',
    details: 'Patios can quickly become slippery and unsightly with moss, algae and staining. Our professional pressure washing restores them to a clean, safe condition.',
    bannerImg: '/gallery-3.png',
    included: [
      'High-pressure slab cleaning',
      'Weed removal between slabs',
      'Moss & algae treatment',
      'Edge & border cleaning',
      'Post-clean rinse & tidy',
    ],
    stats: [
      { value: 'From Â£40', label: 'Starting Price' },
      { value: '1â€“3 hrs', label: 'Typical Duration' },
      { value: '100%', label: 'Satisfaction' },
    ],
    approach: 'We pre-treat stubborn stains and mossy areas before pressure washing, ensuring the best possible result. Weeds between slabs are removed and edges are carefully cleaned.',
    faqs: [
      { q: 'Can you clean block paving?', a: 'Yes â€” block paving, concrete slabs, natural stone and porcelain can all be cleaned. We adjust our technique for each surface.' },
      { q: 'Will the weeds come back?', a: 'We remove visible weeds during the clean. For long-term prevention, we recommend applying a weed killer after the clean dries.' },
    ],
  },
  {
    slug: 'bin-cleaning',
    title: 'Bin Cleaning',
    group: 'home',
    heroSubtitle: 'Fresh & Hygienic Bins',
    price: 'From Â£5 per bin',
    desc: 'Keep your bins hygienic and odour-free with our professional bin cleaning service â€” inside and out, from just Â£5 per bin.',
    details: 'Dirty bins are a breeding ground for bacteria and bad odours. Our bin cleaning service thoroughly cleans inside and out using hot water and deodorising agents.',
    bannerImg: '/gallery-4.png',
    included: [
      'Inside & outside bin clean',
      'High-pressure hot water wash',
      'Deodorising treatment',
      'All bin sizes covered',
      'Regular scheduled cleans available',
    ],
    stats: [
      { value: 'From Â£5', label: 'Per Bin' },
      { value: '5 mins', label: 'Per Bin' },
      { value: '100%', label: 'Satisfaction' },
    ],
    approach: 'Each bin is emptied, then thoroughly washed inside and out with hot water and a deodorising agent. The bin is left fresh, clean and ready to use.',
    faqs: [
      { q: 'Do you do all types of bins?', a: 'Yes â€” we clean wheelie bins of all sizes including general waste, recycling and garden waste bins.' },
      { q: 'Can I book a regular clean?', a: 'Absolutely â€” we offer monthly or fortnightly scheduled bin cleaning at a discounted rate.' },
    ],
  },
  {
    slug: 'odd-jobs',
    title: 'Other Odd Jobs',
    group: 'home',
    heroSubtitle: 'Message for Price',
    price: 'Message for price',
    desc: 'Got something else that needs doing? We take on a wide range of odd jobs â€” just message for a price.',
    details: 'We take on a variety of exterior cleaning and maintenance odd jobs. If you have something specific in mind, just get in touch and we can discuss it.',
    bannerImg: '/gallery-5.png',
    included: [
      'General exterior cleaning tasks',
      'Guttering & fascia wash-down',
      'Garden furniture cleaning',
      'Decking cleaning & treatment',
      'Message for a custom quote',
    ],
    stats: [
      { value: 'Custom', label: 'Pricing' },
      { value: 'Flexible', label: 'Scheduling' },
      { value: '100%', label: 'Satisfaction' },
    ],
    approach: 'Just message or call us to describe the job. We will give you a fair, no-obligation quote and arrange a time that suits you.',
    faqs: [
      { q: 'What kind of odd jobs do you take on?', a: 'Exterior cleaning tasks of most kinds â€” just ask and we will let you know if we can help.' },
      { q: 'How do I get a price?', a: 'Just send a message via the contact form or call 07555 653736 and we will get back to you quickly.' },
    ],
  },
]

export function getServicesByGroup(group: 'home' | 'business'): ServiceData[] {
  return services.filter((s) => s.group === group)
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
