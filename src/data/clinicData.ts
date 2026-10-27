export interface Facility {
  id: 'akhil-dental' | 'puja-dental' | 'madhv-medical';
  name: string;
  badge: string;
  category: 'Dental Clinic' | 'Medical Store & Pharmacy';
  mobile: string;
  displayPhone: string;
  whatsappNumber: string;
  address: string;
  area: string;
  city: string;
  landmark: string;
  googleMapsUrl: string;
  googleMapsDirectionsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timings: {
    weekday: string;
    sunday: string;
    note?: string;
  };
  features: string[];
  description: string;
  themeColor: string;
}

export interface DentalService {
  id: string;
  name: string;
  shortName: string;
  category: 'Endodontics' | 'Surgical' | 'Restorative' | 'Prosthodontics' | 'Orthodontics' | 'Aesthetic' | 'Specialist';
  tagline: string;
  description: string;
  symptoms: string[];
  procedureSteps: string[];
  duration: string;
  sittings: string;
  painLevel: 'Virtually Painless' | 'Minimal Discomfort' | 'Gentle Care with Local Anesthesia';
  benefits: string[];
}

export interface PharmacyCategory {
  title: string;
  description: string;
  items: string[];
}

export const FACILITIES: Facility[] = [
  {
    id: 'akhil-dental',
    name: 'Akhil Dental Clinic',
    badge: 'Main Branch & Head Center',
    category: 'Dental Clinic',
    mobile: '8949775190',
    displayPhone: '+91 89497 75190',
    whatsappNumber: '918949775190',
    address: 'C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur',
    area: 'Kalyanpura, Sanganer',
    city: 'Jaipur, Rajasthan - 302029',
    landmark: 'Sachivalaya Vihar Main Road, Near Kalyanpura Tiraha',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur',
    coordinates: {
      lat: 26.8182,
      lng: 75.7684,
    },
    timings: {
      weekday: 'Daily: 7:00 AM – 11:00 PM',
      sunday: 'Open Sunday: 7:00 AM – 11:00 PM',
      note: 'Early morning & late night dental consultations and emergency walk-ins welcome',
    },
    features: [
      'Led by Dr. Akhilesh Ray, B.D.S (R.U.H.S)',
      'Extended hours: Open 7:00 AM to 11:00 PM',
      'Advanced Rotary Single-Sitting Root Canal (RCT)',
      'Digital Low-Radiation Intraoral RVG X-Rays',
      'Co-located with Madhv Medical Store for immediate medication',
      'Spacious sterile operatory with wheelchair access',
    ],
    description:
      'Akhil Dental Clinic is our flagship modern dental clinic located at Sachivalaya Vihar, Kalyanpura. Led by Dr. Akhilesh Ray B.D.S (R.U.H.S), we provide comprehensive oral care with extended 7:00 AM to 11:00 PM hours and computerized, pain-free dental equipment.',
    themeColor: 'teal',
  },
  {
    id: 'puja-dental',
    name: 'Puja Dental Clinic',
    badge: 'Branch 2 · Rampura Phatak',
    category: 'Dental Clinic',
    mobile: '8949775190',
    displayPhone: '+91 89497 75190',
    whatsappNumber: '918949775190',
    address: 'Shop no. 23 Ganesh Colony, near Rampura Phatak, Sanganer, Jaipur',
    area: 'Rampura Phatak, Sanganer',
    city: 'Jaipur, Rajasthan - 302029',
    landmark: 'Shop #23 Ganesh Colony, Beside Rampura Phatak Junction',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shop+no+23+Ganesh+Colony+near+Rampura+Phatak+Sanganer+Jaipur',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Shop+no+23+Ganesh+Colony+near+Rampura+Phatak+Sanganer+Jaipur',
    coordinates: {
      lat: 26.8290,
      lng: 75.7820,
    },
    timings: {
      weekday: 'Daily: 9:00 AM – 9:00 PM',
      sunday: 'Sunday: 9:00 AM – 9:00 PM',
      note: 'Full day open from 9:00 AM to 9:00 PM for family consultations',
    },
    features: [
      'Consultations with Dr. Akhilesh Ray, B.D.S (R.U.H.S)',
      'Clinic Timings: 9:00 AM to 9:00 PM (Daily)',
      'Expert Orthodontic & Teeth Alignment Clinic',
      'Precision Crown & Bridges and Aesthetic Smile Makeovers',
      'Easily accessible right near Rampura Phatak crossing',
      'Same trusted clinical team and standard pricing as Akhil Dental',
    ],
    description:
      'Puja Dental Clinic brings exceptional oral care directly to residents and families around Rampura Phatak and Ganesh Colony in Sanganer. Supervised by Dr. Akhilesh Ray B.D.S (R.U.H.S) with open timings from 9:00 AM to 9:00 PM.',
    themeColor: 'cyan',
  },
  {
    id: 'madhv-medical',
    name: 'Madhv Medical Store',
    badge: 'Pharmacy & Surgical Store',
    category: 'Medical Store & Pharmacy',
    mobile: '7410835259',
    displayPhone: '+91 74108 35259',
    whatsappNumber: '917410835259',
    address: 'C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur',
    area: 'Kalyanpura, Sanganer',
    city: 'Jaipur, Rajasthan - 302029',
    landmark: 'Adjacent to Akhil Dental Clinic, Sachivalaya Vihar',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=C-11+Sachivalaya+Vihar+Kalyanpura+Sanganer+Jaipur',
    coordinates: {
      lat: 26.8182,
      lng: 75.7684,
    },
    timings: {
      weekday: 'Daily: 7:00 AM – 10:00 PM',
      sunday: 'Sunday: 7:00 AM – 10:00 PM',
      note: 'Open daily 7:00 AM to 10:00 PM with phone order & WhatsApp prescription support',
    },
    features: [
      'Operating Hours: 7:00 AM to 10:00 PM (All 7 Days)',
      '100% Genuine Prescription & Dental Medicines',
      'Post-Dental Treatment Pain Relief & Antibiotic Kits',
      'Complete Oral Hygiene (Chlorhexidine, Ortho Wax, Interdental)',
      'General Healthcare & Over-The-Counter First Aid',
      'Fast counter dispensing & WhatsApp delivery requests for Sanganer',
    ],
    description:
      'Madhv Medical Store is our dedicated on-premise pharmacy and surgical store located at C-11 Sachivalaya Vihar. Open daily from 7:00 AM to 10:00 PM, dental patients can collect their prescribed pain medications, mouthwashes, and oral care products right after their appointment without traveling.',
    themeColor: 'blue',
  },
];

export interface DoctorProfile {
  name: string;
  degree: string;
  university: string;
  title: string;
  experience: string;
  clinics: string[];
  mobile: string;
  photoUrl: string;
  actionPhotoUrl: string;
  bannerPhotoUrl: string;
  bio: string;
  specializations: string[];
  schedule: {
    akhilClinic: string;
    pujaClinic: string;
  };
  keyAchievements: string[];
}

export const DOCTORS: DoctorProfile[] = [
  {
    name: 'Dr. Akhilesh Ray',
    degree: 'B.D.S (R.U.H.S)',
    university: 'Rajasthan University of Health Sciences',
    title: 'Chief Dental Surgeon & Implantologist',
    experience: '8+ Years Clinical Excellence',
    clinics: ['Akhil Dental Clinic', 'Puja Dental Clinic'],
    mobile: '8949775190',
    photoUrl: '/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.14.02_PM__1__66021afe.jpeg',
    actionPhotoUrl: '/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.25.07_PM__2__5a443d0a.jpeg',
    bannerPhotoUrl: '/assets/aistudio/WhatsApp_Image_2026-08-09_at_4.25.08_PM_a9897971.jpeg',
    bio: 'Dr. Akhilesh Ray is a distinguished dental surgeon holding his Bachelor of Dental Surgery (B.D.S) from the prestigious Rajasthan University of Health Sciences (R.U.H.S). With extensive expertise in painless rotary root canal treatments, immediate dental implants, aesthetic smile designing, and maxillofacial care, Dr. Ray has treated thousands of patients across Sanganer and Jaipur with an uncompromising dedication to patient comfort, gentleness, and clinical precision.',
    specializations: [
      'Painless Single-Sitting Root Canal (Rotary Endodontics)',
      'Dental Implants & Bone Grafting',
      'Cosmetic Smile Makeover & Ceramic Veneers',
      'Orthodontic Alignment & Clear Aligners',
      'Crown & Bridge Prosthetics (CAD/CAM Zirconia)',
      'Atraumatic Surgical Extractions & Wisdom Tooth Surgery',
      'All Oral & Maxillofacial Care',
    ],
    schedule: {
      akhilClinic: 'Akhil Dental Clinic: Daily 7:00 AM – 11:00 PM',
      pujaClinic: 'Puja Dental Clinic: Daily 9:00 AM – 9:00 PM',
    },
    keyAchievements: [
      'Over 5,000+ successful root canals performed with high success rate',
      'Certified in Rotary Endodontics & Modern Implantology',
      'Pioneer of strict 4-step autoclave sterilization protocols in Sanganer',
      'Founder of Akhil Dental Clinic, Puja Dental Clinic & Madhv Medical Store network',
    ],
  },
];

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'root-canal-treatment',
    name: 'Root Canal Treatment (RCT)',
    shortName: 'Root Canal (RCT)',
    category: 'Endodontics',
    tagline: 'Painless tooth-saving therapy using rotary endodontics',
    description:
      'Advanced root canal treatment cleans deep bacterial infection from the inflamed pulp chamber, sterilizes the internal canals, and seals the tooth hermetically so your natural tooth is preserved for life.',
    symptoms: [
      'Severe throbbing toothache, especially at night',
      'Sharp sensitivity to hot and cold liquids',
      'Swelling or tender pimple on the gum near the tooth',
      'Pain when chewing or applying biting pressure',
      'Discoloration or darkening of an injured tooth',
    ],
    procedureSteps: [
      'Digital RVG X-ray evaluation & gentle local numbing',
      'Removal of infected pulp and decay with rotary micro-files',
      'Antibacterial canal irrigation and laser canal disinfection',
      'Biocompatible gutta-percha hermetic canal filling',
      'Protective core buildup and custom dental crown placement',
    ],
    duration: '45 – 60 minutes per session',
    sittings: 'Single-Sitting RCT available in 85% of cases; 2 sittings for severe infections',
    painLevel: 'Virtually Painless',
    benefits: [
      'Saves your natural tooth from extraction',
      'Immediate relief from throbbing pain',
      'Restores normal chewing comfort and bite function',
      'Prevents infection spreading to jawbone',
    ],
  },
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    shortName: 'Tooth Extraction',
    category: 'Surgical',
    tagline: 'Gentle, atraumatic tooth removal & wisdom teeth surgery',
    description:
      'When a severely broken, deeply decayed, or impacted wisdom tooth cannot be salvaged, our dental surgeons perform gentle atraumatic extractions designed to minimize tissue trauma and promote rapid healing.',
    symptoms: [
      'Impacted wisdom tooth causing intense jaw pain or cheek swelling',
      'Tooth fractured below the gumline beyond restorative repair',
      'Severe periodontal gum disease with loose, non-retainable teeth',
      'Overcrowded teeth requiring orthodontic extraction space',
    ],
    procedureSteps: [
      'Detailed pre-op digital imaging to map root and nerve anatomy',
      'Targeted local anesthesia for a numb, painless procedure',
      'Gentle luxation and elevation preserving surrounding alveolar bone',
      'Sterile socket cleaning, blood clot stabilization & optional sutures',
      'Clear post-operative medication guide and healing instructions',
    ],
    duration: '20 – 40 minutes',
    sittings: '1 sitting',
    painLevel: 'Virtually Painless',
    benefits: [
      'Instant termination of chronic jaw pressure and infection source',
      'Atraumatic bone preservation for future dental implants',
      'Same-day prescription medications provided via Madhv Medical Store',
    ],
  },
  {
    id: 'dental-filling',
    name: 'Dental Filling',
    shortName: 'Dental Filling',
    category: 'Restorative',
    tagline: 'Tooth-colored composite resin & glass ionomer restorations',
    description:
      'Seamlessly restore teeth damaged by cavities, acid erosion, or minor fractures with premium biocompatible tooth-colored composite resins that match your natural enamel shade perfectly.',
    symptoms: [
      'Visible dark spots, brown cavities, or visible holes on tooth',
      'Food constantly packing between back teeth',
      'Mild sensitivity to sweet foods, cold beverages, or air',
      'Chipped or rough enamel edge irritating tongue',
    ],
    procedureSteps: [
      'Gentle removal of all decay and bacterial debris',
      'Tooth surface conditioning and medical adhesive bonding agent',
      'Layered placement of nano-hybrid aesthetic composite resin',
      'High-intensity blue LED light curing for instant rock-hard strength',
      'Anatomical contouring, bite adjustment, and high-gloss polish',
    ],
    duration: '25 – 35 minutes per tooth',
    sittings: '1 sitting',
    painLevel: 'Virtually Painless',
    benefits: [
      'Completely natural look—100% amalgam and mercury-free',
      'Bonds directly to tooth structure, reinforcing weak enamel',
      'Instant chewing capability after composite light cure',
    ],
  },
  {
    id: 'crown-and-bridges',
    name: 'Crown & Bridges',
    shortName: 'Crown & Bridges',
    category: 'Prosthodontics',
    tagline: 'Zirconia, Ceramic & PFM caps for strength and aesthetics',
    description:
      'Custom-engineered dental crowns strengthen weakened or root-canal treated teeth, while dental bridges span gaps left by one or more missing teeth, restoring complete chewing power and aesthetic symmetry.',
    symptoms: [
      'Tooth treated with Root Canal needing full protective coverage',
      'One or more missing teeth creating gaps in your smile',
      'Cracked tooth syndrome with pain on biting release',
      'Heavily worn or eroded teeth affecting vertical bite height',
    ],
    procedureSteps: [
      'Precision conservative tooth preparation and digital impression',
      'Shade matching against adjacent teeth under daylight lighting',
      'Protective temporary crown fabrication for immediate comfort',
      'CAD/CAM dental laboratory precision milling (Zirconia / Ceramic)',
      'Permanent medical-grade cementation and occlusion fine-tuning',
    ],
    duration: '30 – 45 minutes per visit',
    sittings: '2 sittings (Preparation & Permanent Cementation)',
    painLevel: 'Minimal Discomfort',
    benefits: [
      'High fracture-resistance with monolithic Zirconia options',
      'Restores 100% natural chewing ability and phonetic speech',
      'Prevents surrounding teeth from drifting into empty spaces',
    ],
  },
  {
    id: 'dentures',
    name: 'Dentures',
    shortName: 'Dentures',
    category: 'Prosthodontics',
    tagline: 'Custom complete & flexible partial dentures for senior care',
    description:
      'Regain comfortable chewing and youthful facial contours with custom-crafted complete acrylic dentures or lightweight, unbreakable flexible partial dentures (BPS style) tailored to your oral anatomy.',
    symptoms: [
      'Loss of all or most upper / lower teeth',
      'Difficulty chewing favorite foods or solid vegetables',
      'Sunken lip and cheek appearance due to missing dental support',
      'Loose or uncomfortable old dentures causing gum ulcers',
    ],
    procedureSteps: [
      'Primary and secondary anatomical impressions of upper & lower jaws',
      'Jaw relation recording to establish ideal bite height and facial profile',
      'Wax try-in session to verify tooth shape, alignment, and shade',
      'Final denture processing in high-density acrylic or flexible nylon',
      'Delivery, bite balancing, and free post-insertion adjustment visits',
    ],
    duration: '3 – 4 appointments spaced over 10 to 14 days',
    sittings: '3 – 4 comfortable sittings',
    painLevel: 'Minimal Discomfort',
    benefits: [
      'Restores ability to eat a balanced, nutritious diet comfortably',
      'Re-establishes facial fullness, reducing premature aging wrinkles',
      'Lightweight, snug fit with natural gingival gum-shading',
    ],
  },
  {
    id: 'orthodontic-treatment',
    name: 'Orthodontic Treatment',
    shortName: 'Orthodontics (Braces)',
    category: 'Orthodontics',
    tagline: 'Metal braces, ceramic braces & invisible clear aligners',
    description:
      'Correct crooked teeth, crowded arches, overlapping teeth, gaps, overbites, and deep bites with cutting-edge orthodontic solutions tailored for children, teens, and working adults.',
    symptoms: [
      'Crooked, crowded, or rotated front teeth',
      'Excessive spacing or gaps between teeth (diastema)',
      'Protruding front teeth (buck teeth) prone to trauma',
      'Overbite, crossbite, or open bite causing speech or chewing issues',
    ],
    procedureSteps: [
      'Comprehensive orthodontic analysis, profile photography & study models',
      'Selection of treatment modality (Metal, Ceramic, or Clear Aligners)',
      'Precision bracket bonding or digital 3D aligner tray delivery',
      'Gradual periodic archwire tightening or aligner progression (every 4–6 weeks)',
      'Debonding and custom retainers to ensure lifelong alignment stability',
    ],
    duration: 'Treatment span: 6 – 18 months depending on complexity',
    sittings: 'Monthly 15-minute progress adjustment visits',
    painLevel: 'Minimal Discomfort',
    benefits: [
      'Significantly easier to brush and floss, reducing cavity risks',
      'Even bite distribution protects jaw joints and enamel from wear',
      'Transforms confidence with a beautifully balanced smile',
    ],
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    shortName: 'Dental Implants',
    category: 'Surgical',
    tagline: 'Permanent biocompatible titanium tooth replacement',
    description:
      'The modern gold standard for missing teeth. Titanium posts act as artificial tooth roots anchored directly into the jawbone, topped with lifelike ceramic crowns that look, feel, and function just like natural teeth.',
    symptoms: [
      'One or more missing teeth causing gaps and chewing difficulties',
      'Loose bridge or failing tooth requiring definitive replacement',
      'Frustration with removable dentures sliding or falling out',
      'Desire to replace a missing tooth without grinding adjacent healthy teeth',
    ],
    procedureSteps: [
      'Bone density and anatomical nerve assessment with 3D imaging',
      'Gentle surgical placement of sterile grade-IV titanium implant fixture',
      'Osseointegration healing period for secure bone bonding (8–12 weeks)',
      'Placement of prosthetic abutment connector',
      'Fabrication and secure screw/cement fixation of custom Zirconia crown',
    ],
    duration: '30 – 50 minutes for surgical fixture placement',
    sittings: '2 main phases (Implant fixture & Final Crown delivery)',
    painLevel: 'Virtually Painless',
    benefits: [
      'Permanent lifelong solution with 98%+ clinical success rate',
      'Stops jawbone resorption and preserves natural facial geometry',
      'No trimming or damage to adjacent healthy teeth needed',
    ],
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    shortName: 'Teeth Whitening',
    category: 'Aesthetic',
    tagline: 'In-office laser & power bleaching for radiant smiles',
    description:
      'Erase years of deep yellow stains from tea, coffee, smoking, and age with our enamel-safe in-office teeth whitening systems that brighten your smile up to 5–8 shades in under one hour.',
    symptoms: [
      'Yellow, dull, or stained teeth from tea, coffee, or spices',
      'Discoloration from tobacco or fluorosis deposits',
      'Upcoming special event (wedding, interview, ceremony) needing a fast glow',
      'Desire for a sparkling, healthy white smile',
    ],
    procedureSteps: [
      'Thorough ultrasonic dental scaling and polishing to remove plaque',
      'Application of protective gingival liquid barrier to safeguard gums',
      'Application of high-concentration professional whitening gel on enamel',
      'Targeted blue light activation cycles to break down stubborn chromophores',
      'Rinse, desensitizing paste application, and shade comparison',
    ],
    duration: '45 – 60 minutes',
    sittings: 'Single 1-hour in-office session',
    painLevel: 'Virtually Painless',
    benefits: [
      'Immediate noticeable results in a single clinic visit',
      'Enamel-safe formulation with built-in potassium nitrate desensitizers',
      'Long-lasting brightness with basic oral hygiene maintenance',
    ],
  },
  {
    id: 'smile-designing',
    name: 'Smile Designing',
    shortName: 'Smile Designing',
    category: 'Aesthetic',
    tagline: 'Custom aesthetic porcelain veneers & cosmetic makeover',
    description:
      'A holistic smile transformation combining ultra-thin porcelain veneers, composite bonding, cosmetic gum contouring, and shade correction designed specifically to harmonize with your facial proportions.',
    symptoms: [
      'Multiple chipped, uneven, or misaligned front teeth',
      'Stubborn intrinsic staining or fluorosis that whitening cannot fix',
      'Gummy smile or asymmetrical gum line',
      'Unattractive gaps (midline diastema) between front teeth',
    ],
    procedureSteps: [
      'Facial aesthetics photographic analysis and digital smile preview',
      'Mock-up diagnostic wax-up try-in directly in your mouth',
      'Micro-thin conservative enamel preparation (0.3 – 0.5mm)',
      'Custom laboratory crafting of ultra-thin ceramic veneers',
      'High-strength adhesive bonding and final aesthetic polishing',
    ],
    duration: 'Custom tailored treatment plan',
    sittings: '2 – 3 comprehensive appointments',
    painLevel: 'Virtually Painless',
    benefits: [
      'Bespoke smile tailored to your lip line, eye symmetry, and face shape',
      'Stain-resistant ceramic surfaces that retain brilliant gloss',
      'Dramatically elevates personal and professional self-confidence',
    ],
  },
  {
    id: 'oral-maxillofacial-care',
    name: 'All Oral & Maxillofacial Care',
    shortName: 'Oral & Maxillofacial',
    category: 'Specialist',
    tagline: 'Specialist care for TMJ pain, jaw cysts, trauma & oral lesions',
    description:
      'Comprehensive specialist management covering temporomandibular joint (TMJ) disorders, jaw clicking, chronic facial pain, oral ulcers, leukoplakia screening, cyst enucleation, and dental trauma management.',
    symptoms: [
      'Clicking, popping, or locked jaw when opening mouth wide',
      'Chronic soreness in front of ear or masticatory jaw muscles',
      'Non-healing mouth ulcers, red or white patches on inner cheeks',
      'Facial swelling, cyst, or jawbone infection',
      'Traumatic dental impact or sports injury to teeth and lips',
    ],
    procedureSteps: [
      'Clinical palpation of TMJ joints, facial muscles, and oral mucosa',
      'Diagnostic radiographic imaging and oral biopsy if indicated',
      'Personalized protocol: Occlusal splints, medication, or minor surgery',
      'Minimally invasive cyst enucleation or soft-tissue lesion excision',
      'Periodic follow-up and restorative oral rehabilitation',
    ],
    duration: 'Consultation & targeted treatment based on condition',
    sittings: 'Varies based on surgical or conservative management',
    painLevel: 'Gentle Care with Local Anesthesia',
    benefits: [
      'Specialist diagnosis preventing severe long-term jaw complications',
      'Early detection and prevention of premalignant oral lesions',
      'Permanent relief from chronic jaw strain and morning headaches',
    ],
  },
];

export const PHARMACY_CATEGORIES: PharmacyCategory[] = [
  {
    title: 'Dental Post-Op & Pain Relief',
    description: 'Immediate analgesics, anti-inflammatories, and antibiotics prescribed after RCT, extractions, or implants.',
    items: [
      'Amoxicillin + Clavulanate (Augmentin)',
      'Aceclofenac + Paracetamol + Serratiopeptidase',
      'Ketorolac Tromethamine (Fast dental pain relief)',
      'Metronidazole (Flagyl for anaerobic oral infections)',
      'Chymoral Forte (Anti-swelling enzymatic tablets)',
    ],
  },
  {
    title: 'Oral Hygiene & Specialized Care',
    description: 'Therapeutic rinses, pastes, and appliances recommended by dental surgeons.',
    items: [
      'Chlorhexidine Gluconate 0.2% Antiseptic Mouthwash',
      'Sensodyne / Thermoseal Anti-Sensitivity Toothpaste',
      'Interdental Brushes (All ISO sizes for gaps & bridges)',
      'Orthodontic Relief Wax for bracket irritation',
      'Denturite / Fittydent Denture Cleansing Tablets & Adhesives',
    ],
  },
  {
    title: 'General Prescription & First Aid',
    description: 'Everyday medical essentials, chronic care items, and emergency first aid supplies.',
    items: [
      'Antacids & PPIs (Pantoprazole / Rabeprazole)',
      'Bandages, sterile gauze packs, and surgical tape',
      'Digital thermometers & pulse oximeters',
      'Pediatric drops, paracetamol syrups, and electrolytes',
      'Antiallergics, cough formulations, and multivitamins',
    ],
  },
];

export const PATIENT_REVIEWS = [
  {
    name: 'Rajesh Sharma',
    location: 'Kalyanpura, Sanganer',
    treatment: 'Single-Sitting Root Canal & Zirconia Crown',
    rating: 5,
    quote:
      'I was suffering from agonizing toothache for 3 nights. Visited Akhil Dental Clinic in Kalyanpura in the morning. The doctor performed a completely painless single-sitting RCT in 45 minutes. The best part is Madhv Medical Store is right on the ground floor, so I picked up my medications immediately.',
  },
  {
    name: 'Pooja Meena',
    location: 'Near Rampura Phatak, Sanganer',
    treatment: 'Orthodontic Alignment (Ceramic Braces)',
    rating: 5,
    quote:
      'Puja Dental Clinic near Rampura Phatak is extremely convenient. The clinic is spotlessly clean and modern. My teeth gaps and alignment improved drastically within 6 months. Dr. Akhil and team explain everything clearly and the pricing is very genuine.',
  },
  {
    name: 'Mahesh Khandelwal',
    location: 'Sachivalaya Vihar, Sanganer',
    treatment: 'Dental Implants & Flexible Partial Denture',
    rating: 5,
    quote:
      'Got two dental implants placed at Akhil Dental Clinic. Zero pain during surgery, and the new teeth feel 100% natural when eating. We also purchase all our monthly household medicines from Madhv Medical Store—they always have authentic medicines with bill.',
  },
  {
    name: 'Sunita Verma',
    location: 'Sanganer Town, Jaipur',
    treatment: 'Teeth Whitening & Aesthetic Fillings',
    rating: 5,
    quote:
      'Had severe tea stains on my front teeth. After one laser whitening session and two composite fillings, my smile looks clean and bright! Very gentle touch and modern equipment.',
  },
];

export const CLINIC_FAQS = [
  {
    question: 'How do I reach Akhil Dental Clinic and Madhv Medical Store?',
    answer:
      'Both Akhil Dental Clinic and Madhv Medical Store are located together at C-11 Sachivalaya Vihar, Kalyanpura, Sanganer, Jaipur. It is easily accessible from the Kalyanpura Main Road and Sanganer Railway Station. You can click any "Navigate on Google Maps" button on this website for direct GPS navigation.',
  },
  {
    question: 'Where is Puja Dental Clinic located and is the mobile number the same?',
    answer:
      'Puja Dental Clinic is located at Shop no. 23 Ganesh Colony, near Rampura Phatak, Sanganer, Jaipur. Yes, you can reach both Akhil Dental Clinic and Puja Dental Clinic on the same mobile number: 8949775190 for appointments and consultations.',
  },
  {
    question: 'How do I order medicines from Madhv Medical Store?',
    answer:
      'For Madhv Medical Store, call or WhatsApp directly at 7410835259. You can send a photo of your prescription or list of items for quick counter packing or inquiry.',
  },
  {
    question: 'Are all 10 dental services available at both clinics?',
    answer:
      'Yes, both Akhil Dental Clinic and Puja Dental Clinic provide the complete spectrum of services: Root Canal Treatment (RCT), Tooth Extraction, Dental Filling, Crown & Bridges, Dentures, Orthodontic Treatment, Dental Implants, Teeth Whitening, Smile Designing, and All Oral & Maxillofacial Care.',
  },
  {
    question: 'Is root canal treatment (RCT) painful at your clinic?',
    answer:
      'No. We utilize advanced computer-controlled local anesthesia and rotary endodontic instruments. Over 95% of our patients report feeling virtually zero pain during the procedure, experiencing immediate relief from prior toothaches.',
  },
];
