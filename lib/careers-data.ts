export interface JobOpening {
  id: string
  title: string
  department: 'Sales & Advisory' | 'Service & Technical' | 'Parts & Inventory' | 'Customer Experience & CRM' | 'Finance & Accounts' | 'Management & Operations'
  location: string
  type: 'Full-Time' | 'On-Site' | 'Full-Time • On-Site'
  experience: string
  openings: number
  description: string
  responsibilities: string[]
  requirements: string[]
  perks: string[]
}

export const departments = [
  'All Departments',
  'Sales & Advisory',
  'Service & Technical',
  'Parts & Inventory',
  'Customer Experience & CRM',
  'Finance & Accounts',
  'Management & Operations',
] as const

export const locations = [
  'All Locations',
  'Delhi NCR',
  'Lucknow',
  'Patna',
  'Ranchi',
  'Kolkata',
  'Guwahati',
  'Varanasi',
] as const

export const jobOpenings: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Sales Consultant – Premium & EV Fleet',
    department: 'Sales & Advisory',
    location: 'Lucknow',
    type: 'Full-Time • On-Site',
    experience: '2 - 5 Years',
    openings: 4,
    description:
      'We are looking for energetic, customer-centric Sales Consultants to guide patrons through our premium passenger vehicle and EV lineup, from initial test drives to celebratory key handovers.',
    responsibilities: [
      'Conduct personalized showroom walkthroughs and dynamic vehicle test drives.',
      'Explain technical vehicle specifications, financing alternatives, and EV charging setups.',
      'Maintain diligent lead progression via digital CRM and follow up on customer inquiries.',
      'Achieve monthly sales targets while upholding ARS customer satisfaction standards.',
    ],
    requirements: [
      'Prior automotive sales experience in reputed dealership networks.',
      'Excellent verbal communication in English and Hindi with strong negotiation skills.',
      'Valid four-wheeler driving license is mandatory.',
    ],
    perks: ['Uncapped performance commissions', 'Health insurance coverage', 'Annual performance trips'],
  },
  {
    id: 'job-2',
    title: 'Master Diagnostic Technician – High Voltage & Mechanical',
    department: 'Service & Technical',
    location: 'Patna',
    type: 'Full-Time • On-Site',
    experience: '3 - 7 Years',
    openings: 3,
    description:
      'Join our high-tech workshop team diagnosing complex mechanical, electrical, and electronic faults across passenger cars and commercial utility vehicles.',
    responsibilities: [
      'Utilize computerized OBD diagnostic scanners and laser alignment benches.',
      'Perform periodic maintenance, engine troubleshooting, and brake/suspension overhauls.',
      'Execute high-voltage battery diagnostic checks in compliance with OEM safety protocols.',
      'Mentor apprentice mechanics and ensure bay cleanliness and safety compliance.',
    ],
    requirements: [
      'Diploma/ITI in Automobile or Mechanical Engineering.',
      'Demonstrated expertise with computerized scan tools and multi-brand diagnostic software.',
      'OEM certification from Tata, Hyundai, Mahindra, or Toyota is a strong plus.',
    ],
    perks: ['Technical incentive per job card', 'Tool allowances', 'OEM certification sponsorship'],
  },
  {
    id: 'job-3',
    title: 'Customer Relationship Manager (CRM)',
    department: 'Customer Experience & CRM',
    location: 'Delhi NCR',
    type: 'Full-Time • On-Site',
    experience: '3 - 6 Years',
    openings: 2,
    description:
      'Lead our customer delight desk, ensuring seamless post-delivery communication, tracking Net Promoter Scores (NPS), and resolving customer queries with empathy and speed.',
    responsibilities: [
      'Oversee customer feedback collection across showroom and service interactions.',
      'Analyze CSI and SSI scores to identify training needs and process bottlenecks.',
      'Coordinate with workshop managers to resolve customer concerns within 24 hours.',
      'Plan customer engagement drives, anniversary greetings, and service clinics.',
    ],
    requirements: [
      'Bachelor’s degree with 3+ years in hospitality, aviation, or premium automotive retail.',
      'Exceptional interpersonal empathy, patience, and conflict resolution capability.',
      'Proficiency in CRM platforms, Microsoft Excel, and presentation tools.',
    ],
    perks: ['Attractive quarterly bonus', 'Family medical cover', 'Executive dining allowance'],
  },
  {
    id: 'job-4',
    title: 'Service Advisor – Commercial Mobility Fleet',
    department: 'Service & Technical',
    location: 'Ranchi',
    type: 'Full-Time • On-Site',
    experience: '2 - 6 Years',
    openings: 3,
    description:
      'Act as the primary liaison for commercial truck and bus fleet owners, preparing accurate job estimates, coordinating bay allocation, and ensuring minimal vehicle downtime.',
    responsibilities: [
      'Receive commercial vehicle drivers and fleet managers at the reception bay.',
      'Diagnose customer complaint notes and formulate accurate cost and time estimates.',
      'Coordinate with spare parts managers to ensure timely component readiness.',
      'Deliver transparent invoicing and explain replaced parts during vehicle delivery.',
    ],
    requirements: [
      'Diploma in Automobile Engineering or equivalent practical experience.',
      'Familiarity with commercial vehicle components, telematics, and warranty policies.',
      'Strong local language fluency and ability to handle high-pace workshop environments.',
    ],
    perks: ['Fleet turnaround incentive', 'Mobile phone reimbursement', 'Annual medical checkups'],
  },
  {
    id: 'job-5',
    title: 'Dealership General Manager (GM)',
    department: 'Management & Operations',
    location: 'Kolkata',
    type: 'Full-Time • On-Site',
    experience: '8 - 14 Years',
    openings: 1,
    description:
      'Steer overall P&L, sales targets, after-sales operations, and team leadership for one of our largest multi-brand passenger vehicle experience hubs in Eastern India.',
    responsibilities: [
      'Drive annual revenue targets across new car sales, accessories, finance, and service.',
      'Lead and mentor a multi-disciplinary team of 80+ showroom and workshop professionals.',
      'Maintain strong executive relations with OEM regional heads and financial partners.',
      'Champion customer-first culture and brand representation across the region.',
    ],
    requirements: [
      'Proven track record as a General Manager or Branch Head in Tier-1 automotive dealerships.',
      'Strong financial acumen including P&L management, working capital, and margin optimization.',
      'Charismatic leadership capable of inspiring large cross-functional teams.',
    ],
    perks: ['Profit-sharing bonus', 'Company executive car', 'Comprehensive family health coverage'],
  },
  {
    id: 'job-6',
    title: 'Spare Parts & Inventory Lead',
    department: 'Parts & Inventory',
    location: 'Guwahati',
    type: 'Full-Time • On-Site',
    experience: '3 - 5 Years',
    openings: 2,
    description:
      'Manage warehouse inventory, fast-moving consumable replenishment, OEM warranty returns, and accurate dispatch to dealership workshops across the region.',
    responsibilities: [
      'Maintain accurate ERP inventory records for thousands of unique OEM part numbers.',
      'Forecast seasonal demand (e.g. monsoon wiper blades, battery stocks, brake pads).',
      'Oversee safe warehousing, FIFO storage protocols, and warranty scrap disposal.',
      'Ensure 98%+ first-pick availability for emergency workshop repair requests.',
    ],
    requirements: [
      'Experience in automotive spare parts counter or inventory management.',
      'Proficiency with SAP, Oracle, or automotive dealer management systems (DMS).',
      'High attention to detail and rigorous stock audit accuracy.',
    ],
    perks: ['Inventory accuracy performance bonus', 'Subsidized canteen', 'Overtime allowances'],
  },
  {
    id: 'job-7',
    title: 'Two-Wheeler Sales Consultant – ARS MotoCorp',
    department: 'Sales & Advisory',
    location: 'Varanasi',
    type: 'Full-Time • On-Site',
    experience: '1 - 3 Years',
    openings: 5,
    description:
      'Represent top two-wheeler brands (Hero, Honda, Bajaj) at our high-energy ARS MotoCorp outlet, helping college students, commuters, and delivery partners choose the perfect bike.',
    responsibilities: [
      'Demonstrate motorcycle and scooter features, mileage figures, and warranty benefits.',
      'Guide buyers through spot EMI financing and exchange evaluation of older two-wheelers.',
      'Facilitate fast documentation, insurance issuance, and celebratory delivery.',
    ],
    requirements: [
      'High school diploma or Bachelor’s degree with a genuine passion for two-wheelers.',
      'Approachable, polite personality with strong persuasion skills.',
      'Fresher candidates with high enthusiasm are also encouraged to apply.',
    ],
    perks: ['Per-unit sales incentives', 'Fuel allowance for field visits', 'Monthly top performer reward'],
  },
  {
    id: 'job-8',
    title: 'Dealership Accountant & Finance Executive',
    department: 'Finance & Accounts',
    location: 'Lucknow',
    type: 'Full-Time • On-Site',
    experience: '2 - 5 Years',
    openings: 2,
    description:
      'Handle day-to-day dealership accounting, vehicle billing, bank reconciliations, GST compliance, and payouts for retail and fleet deals.',
    responsibilities: [
      'Process daily showroom receipts, credit card settlements, and bank deposits.',
      'Reconcile financier disbursements for automotive retail loans against vehicle deliveries.',
      'Prepare monthly GST returns, TDS filings, and vendor invoice settlements.',
      'Coordinate with statutory auditors for quarterly and year-end audits.',
    ],
    requirements: [
      'B.Com / M.Com or Inter CA with strong knowledge of Tally Prime and MS Excel.',
      'Solid understanding of Indian GST laws and automotive dealership billing workflows.',
      'High integrity, precision, and adherence to regulatory deadlines.',
    ],
    perks: ['Annual performance bonus', 'Comprehensive insurance', 'Continuous financial training'],
  },
]

export const employeeTestimonials = [
  {
    name: 'Pradeep Sharma',
    currentRole: 'General Manager – Lucknow Dealership',
    startRole: 'Joined as Sales Executive in 2021',
    image: '/images/client-amit.png',
    quote:
      'ARS gave me the wings to fly. In five years, I went from taking test drives to managing a flagship 60-member showroom. The leadership genuinely invests in internal promotions and backs you with trust.',
  },
  {
    name: 'Neha Saxena',
    currentRole: 'Head of Customer Relations (CRM)',
    startRole: 'Joined as Reception Lead in 2022',
    image: '/images/client-neha.png',
    quote:
      'The culture of respect, female empowerment, and customer empathy at ARS Imperial Landmark is unparalleled in the automotive retail sector. I am proud to lead our customer delight initiatives every day.',
  },
  {
    name: 'Rajesh Mondal',
    currentRole: 'Master Technician & Workshop Incharge',
    startRole: 'Joined as Junior Mechanic in 2020',
    image: '/images/client-rahul.png',
    quote:
      'The technical training sponsored by ARS at OEM factory academies upgraded my knowledge from conventional diesel engines to modern high-voltage EVs. Today I lead our advanced diagnostics team.',
  },
]
