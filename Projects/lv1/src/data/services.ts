export interface ServiceData {
  slug: string;
  title: string;
  group: 'home' | 'business';
  desc: string;
  details: string;
  heroSubtitle: string;
  img?: string;
  bannerImg?: string;
  detailImg?: string;
  included: string[];
  stats: { value: string; label: string }[];
  approach: string;
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  // For Homes and Individuals
  {
    slug: 'home-office-storage-removals',
    title: 'Home/Office/Storage Removals',
    group: 'home',
    heroSubtitle: 'Complete Removal Solutions',
    desc: 'Professional removals for homes, offices, and storage units.',
    details: 'Our comprehensive removal service covers every aspect of your move. Whether you need a complete property clearance or a targeted relocation, our skilled team delivers exceptional results that stand the test of time.\n\nWe work closely with you throughout the entire process — from initial consultation and planning through to final completion — ensuring the work meets your exact specifications and budget.',
    img: '/service-icons/home-office.svg',
    bannerImg: '/home-office-storage.png',
    detailImg: '/home-office-detail.png',
    included: [
      'Full property packing and wrapping',
      'Furniture disassembly and reassembly',
      'Secure transit with GPS-tracked vehicles',
      'Storage solutions available',
      'End-to-end project coordination',
      'Full insurance coverage',
    ],
    stats: [
      { value: '500+', label: 'Moves Completed' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '10+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'Every removal we undertake begins with a detailed survey and honest conversation about what you want to achieve. Our project managers create a phased plan that minimises disruption to your home or business, with clear milestones and daily progress updates. We handle every sub-task — packing, wrapping, transport, and setup — under one coordinated team. You get a single point of contact from day one to the final check.',
    faqs: [
      { q: 'How long does a typical house move take?', a: 'Most standard house moves are completed in a single day. Larger properties may require 2 days. We\'ll confirm the timeline during your consultation.' },
      { q: 'Do you provide packing materials?', a: 'Yes, we supply all necessary packing materials including boxes, bubble wrap, and protective covers at no extra charge.' },
      { q: 'Are my belongings insured during transit?', a: 'Absolutely. All items are covered by our comprehensive goods-in-transit insurance policy.' },
    ],
  },
  {
    slug: 'end-of-tenancy-clearance',
    title: 'End of Tenancy Clearance',
    group: 'home',
    heroSubtitle: 'Leave Your Property Spotless',
    desc: 'Full clean-up, waste removal, and property checks.',
    details: 'We leave your property spotless and ready for inspection. Our end of tenancy service includes deep cleaning, waste removal, and a final property check for complete peace of mind.\n\nOur team ensures every surface is cleaned, all waste is responsibly disposed of, and the property meets the highest standards for handover.',
    img: '/service-icons/clearance.svg',
    bannerImg: '/end-of-tenancy.png',
    detailImg: '/end-of-tenancy-detail.png',
    included: [
      'Complete property deep clean',
      'Waste removal and responsible disposal',
      'Final property inspection walkthrough',
      'Garden and outdoor area clearance',
      'Appliance cleaning and descaling',
      'Photo documentation of finished state',
    ],
    stats: [
      { value: '300+', label: 'Properties Cleared' },
      { value: '100%', label: 'Deposit Return Rate' },
      { value: '5+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'Our clearance process starts with a property assessment to identify the scope of work. We create a detailed checklist covering every room and outdoor area, then execute the clearance and clean systematically. All waste is disposed of through licensed facilities, and we provide a handover walkthrough so you can be confident the property is inspection-ready.',
    faqs: [
      { q: 'How quickly can you complete a clearance?', a: 'Most standard properties can be cleared within 1-2 days depending on size and condition.' },
      { q: 'Do you handle hazardous waste?', a: 'We can arrange specialist disposal for certain types of hazardous waste. Please let us know during the consultation.' },
      { q: 'Can I be present during the clearance?', a: 'You\'re welcome to be present but it\'s not required. We can work with key handover arrangements.' },
    ],
  },
  {
    slug: 'student-accommodation-relocations',
    title: 'Student Accommodation Relocations',
    group: 'home',
    heroSubtitle: 'Budget-Friendly Student Moves',
    desc: 'Affordable, flexible moves for students.',
    details: 'Special rates and flexible scheduling for students moving into or out of accommodation. Quick, efficient, and budget-friendly — designed around the academic calendar.\n\nWe understand student budgets and timelines. Our service is tailored to be as flexible and affordable as possible without compromising on care or reliability.',
    img: '/service-icons/student.svg',
    bannerImg: '/student-relocations.png',
    detailImg: '/student-relocations-detail.png',
    included: [
      'Flexible booking around term dates',
      'Budget-friendly pricing tiers',
      'Shared load options to reduce costs',
      'Temporary storage available',
      'Packing assistance if needed',
      'Same-day service available',
    ],
    stats: [
      { value: '200+', label: 'Students Moved' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '5+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'We schedule student moves around key term dates and offer group booking discounts. Our team arrives on time, handles everything with care, and ensures you\'re settled into your new accommodation quickly.',
    faqs: [
      { q: 'Do you offer group discounts?', a: 'Yes, if multiple students are moving on the same day or route, we offer discounted shared-load pricing.' },
      { q: 'Can you store items over summer?', a: 'We offer temporary storage solutions over holiday periods at competitive rates.' },
      { q: 'How far in advance should I book?', a: 'We recommend booking 2-3 weeks ahead, especially around September and June when demand is high.' },
    ],
  },
  {
    slug: 'man-and-van',
    title: 'Man & Van Collection/Delivery',
    group: 'home',
    heroSubtitle: 'Fast & Flexible Service',
    desc: 'Hire a van and skilled mover for collection or delivery.',
    details: 'Perfect for single items, small moves, or when you need an extra pair of hands. Our man and van service is fast, friendly, and fully insured.\n\nWhether it\'s a marketplace pickup, a furniture delivery, or a small flat move, we\'re ready to help at short notice.',
    img: '/service-icons/man-van.svg',
    bannerImg: '/man-and-van.png',
    detailImg: '/man-and-van-detail.png',
    included: [
      'Single item or multi-item collection',
      'Furniture assembly and disassembly',
      'Same-day availability',
      'Fully insured transit',
      'Loading and unloading assistance',
      'Flexible hourly or fixed-rate pricing',
    ],
    stats: [
      { value: '1000+', label: 'Jobs Completed' },
      { value: '99%', label: 'On-Time Rate' },
      { value: '10+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'Simply tell us what needs moving and where. We\'ll dispatch a fully equipped van and experienced mover to handle the job. Most bookings can be accommodated within 24-48 hours.',
    faqs: [
      { q: 'Can I ride in the van?', a: 'Yes, one passenger can travel with the driver at no extra cost.' },
      { q: 'What size van do you use?', a: 'We use a range of van sizes from SWB to Luton depending on the job. We\'ll recommend the right size for you.' },
      { q: 'Is there a minimum charge?', a: 'We have a minimum 1-hour booking. After that, pricing is calculated in 30-minute increments.' },
    ],
  },
  {
    slug: 'self-drive-van-hire',
    title: 'Self-Drive Van Hire',
    group: 'home',
    heroSubtitle: 'Drive It Yourself',
    desc: 'Flexible van hire for DIY moves and tasks.',
    details: 'Choose from a range of van sizes for your own DIY move or project — from small vans right up to Luton vans, all of automatic transmission. Flexible hire periods with competitive rates and comprehensive cover.\n\nAll our vans are well-maintained, clean, and come with breakdown cover included.',
    img: '/service-icons/van-hire.svg',
    bannerImg: '/self-drive-van.png',
    detailImg: '/self-drive-van-detail.png',
    included: [
      'Small vans right up to Luton vans available',
      'All vehicles are automatic transmission',
      'Flexible hire periods (hourly/daily/weekly)',
      'Breakdown cover included',
      'Clean, well-maintained vehicles',
      'Simple pickup and return process',
      'Mileage options available',
    ],
    stats: [
      { value: '400+', label: 'Hires Completed' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '5+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'Book online or by phone, collect the van from our depot, and return when you\'re done. We make the process as simple as possible with clear terms and competitive pricing.',
    faqs: [
      { q: 'What licence do I need?', a: 'A full UK driving licence held for at least 2 years is required. Drivers must be aged 21+.' },
      { q: 'Is fuel included?', a: 'Vans are supplied with a full tank. Please return with a full tank to avoid refuelling charges.' },
      { q: 'Can I take the van outside London?', a: 'Yes, our vans can be driven anywhere in the UK. Additional mileage charges may apply for long-distance trips.' },
    ],
  },

  // For Businesses (B2B Solutions)
  {
    slug: 'office-warehouse-relocations',
    title: 'Office & Warehouse Relocations',
    group: 'business',
    heroSubtitle: 'Minimal Downtime Relocations',
    desc: 'Seamless relocations for offices and warehouses.',
    details: 'Minimise downtime with our expert business relocation services. We handle everything from planning to execution, ensuring your operation is back up and running as quickly as possible.\n\nOur team understands the unique challenges of commercial moves and works around your schedule to reduce disruption.',
    img: '/service-icons/office-warehouse.svg',
    bannerImg: '/office-warehouse.png',
    detailImg: '/office-warehouse-detail.png',
    included: [
      'Pre-move planning and coordination',
      'IT equipment handling and setup',
      'Furniture disassembly and reassembly',
      'Weekend and out-of-hours moves available',
      'Secure document handling',
      'Full project management from start to finish',
    ],
    stats: [
      { value: '100+', label: 'Businesses Relocated' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '10+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'Every business move starts with a detailed site survey and project plan. We assign a dedicated move coordinator who manages the timeline, communication, and quality control. Our goal is to get you operational in your new space with zero data loss and minimal downtime.',
    faqs: [
      { q: 'Can you move us over a weekend?', a: 'Absolutely. Weekend and bank holiday moves are available to minimise business disruption.' },
      { q: 'How do you handle sensitive documents?', a: 'We use sealed, labelled crates and can provide chain-of-custody documentation if required.' },
      { q: 'Do you handle IT equipment?', a: 'Yes, our team is trained in safe handling of servers, workstations, and networking equipment.' },
    ],
  },
  {
    slug: 'construction-site-logistics',
    title: 'Construction Site Logistics',
    group: 'business',
    heroSubtitle: 'Specialist Site Support',
    desc: 'Transport of heavy machinery, tools, and materials.',
    details: 'Specialist logistics for construction sites, including delivery and removal of equipment, tools, and materials. We understand the demands of site work and deliver reliable, on-time service.\n\nFrom initial material delivery to final site clearance, our team keeps your project on schedule.',
    img: '/service-icons/construction.svg',
    bannerImg: '/construction-logistics.png',
    detailImg: '/construction-logistics-detail.png',
    included: [
      'Heavy machinery transport',
      'Building materials delivery',
      'Site waste clearance',
      'Tool and equipment logistics',
      'Timed deliveries to match schedule',
      'Full insurance for high-value items',
    ],
    stats: [
      { value: '150+', label: 'Sites Served' },
      { value: '99%', label: 'On-Time Delivery' },
      { value: '10+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'We work with your site manager to schedule deliveries around the build programme. Our drivers are experienced with restricted-access sites and understand the importance of punctuality in construction.',
    faqs: [
      { q: 'Can you handle HIAB/crane deliveries?', a: 'Yes, we have access to HIAB-equipped vehicles for heavy or awkward items.' },
      { q: 'Do you offer regular scheduled deliveries?', a: 'We can set up recurring delivery schedules to keep your site supplied throughout the project.' },
      { q: 'What areas do you cover?', a: 'We cover London and the wider South East, with nationwide options available on request.' },
    ],
  },
  {
    slug: 'on-demand-breezyeers',
    title: 'On-Demand Breezyeers',
    group: 'business',
    heroSubtitle: 'Flexible Workforce Solutions',
    desc: 'Hire skilled teams for loading, packing, or labour-intensive tasks.',
    details: 'Flexible, skilled teams available for short-term or project-based support. Ideal for loading, packing, or any labour-intensive business needs.\n\nOur Breezyeers are trained, safety-certified, and ready to integrate seamlessly into your team.',
    img: '/service-icons/breezyeers.svg',
    bannerImg: '/on-demand-breezyeers.png',
    detailImg: '/on-demand-breezyeers-detail.png',
    included: [
      'Trained and safety-certified workers',
      'Flexible booking (hourly/daily/weekly)',
      'Loading and unloading teams',
      'Packing and sorting services',
      'Event setup and breakdown',
      'Full liability insurance',
    ],
    stats: [
      { value: '200+', label: 'Projects Supported' },
      { value: '99%', label: 'Client Satisfaction' },
      { value: '5+', label: 'Years Experience' },
      { value: '100%', label: 'Fully Insured' },
    ],
    approach: 'Tell us when, where, and what you need. We\'ll deploy a team of trained Breezyeers who arrive on time, work efficiently, and follow your site protocols. It\'s reliable labour without the overhead.',
    faqs: [
      { q: 'How quickly can you deploy a team?', a: 'In most cases we can have a team on-site within 24-48 hours of booking.' },
      { q: 'What training do your workers have?', a: 'All Breezyeers complete manual handling, health & safety, and customer service training before deployment.' },
      { q: 'Can I book the same team regularly?', a: 'Yes, we can assign consistent team members for recurring bookings so they become familiar with your operations.' },
    ],
  },
];

export function getServicesByGroup(group: 'home' | 'business'): ServiceData[] {
  return services.filter((s) => s.group === group);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
