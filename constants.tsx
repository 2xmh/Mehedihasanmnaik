
import React from 'react';

export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Volunteering', href: '#volunteering' },
  { name: 'Awards', href: '#awards' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export const CAREER_OBJECTIVE = "A dedicated Mechanical Engineering student at the International University of Business Agriculture and Technology (IUBAT), currently contributing as an Associate Research Coordinator at Nayem’s Association for Research & Publication (NARP). Also serves as Joint Secretary at the IUBAT Mathematics Society and Co-Media and Market Analyzer at the IUBAT Innovation and Entrepreneurship Center (IIEC), showcasing skills in research coordination, media analysis, and student leadership. Academic and professional pursuits are centered around advancing expertise in 3D, SOLIDWORKS, and internal combustion engines. Actively involved in research activities focused on additive manufacturing, biosensors, and bioelectronics, with publications in reputed journals. Motivated to contribute to innovation and promote research initiatives.";

export const PROJECTS = [
  {
    title: "Temperature and Humidity Control System Using Arduino",
    date: "Jan 2026",
    institution: "IUBAT",
    description: "Designed and implemented an Arduino-based environmental monitoring system using a DHT22 sensor and OLED display. Features threshold-based logic with hysteresis for stable control of fans and humidifiers.",
    keyPoints: [
      "Sensor integration & calibration",
      "Hysteresis control logic",
      "OLED status interface",
      "Hardware interfacing (Relays/Fans)"
    ],
    tech: "Arduino Uno, DHT22, SSD1306 OLED, Embedded C"
  },
  {
    title: "Smart Automated Lighting System Using Motion Sensor Technology",
    date: "Jan 2025",
    institution: "IUBAT",
    description: "A cost-effective automated lighting solution using motion (PIR) and light (LDR) sensors. Operates solely on discrete components without microcontrollers to maximize energy efficiency and reduce complexity.",
    keyPoints: [
      "Low-light activation logic",
      "Discrete component design",
      "Energy consumption reduction",
      "Sustainable hardware design"
    ],
    tech: "PIR Sensor, LDR, Comparators, Relays"
  }
];

export const AWARDS = [
  {
    title: "Certificate of Appreciation",
    issuer: "NARP – Nayem’s Association for Research & Publication",
    date: "Nov 2025",
    note: "Received for dedicated service as Media & Publication Secretary. Appreciated for hard work, integrity, and active involvement in the Admin Panel."
  },
  {
    title: "Best Media Contributor",
    issuer: "Nayem's Association for Research and Publication",
    date: "Jul 2025",
    note: "Awarded on the 1st Foundation Day for outstanding contributions in promoting research initiatives through impactful media coverage."
  },
  {
    title: "Certificate of Appreciation – Photographer",
    issuer: "IUBAT Mathematics Society (IMS)",
    date: "Jul 2025",
    note: "Recognized for valuable contribution and dedicated service as the official photographer of IMS during the 2024–2025 term."
  },
  {
    title: "Best Volunteer (Falgun)",
    issuer: "Bashundhara Shuvosangho, IUBAT Branch",
    date: "Feb 2024",
    note: "Received for remarkable work in the 'Pohela Falgun' celebration and dedicated service to the organization."
  }
];

export const VOLUNTEERING_EXPERIENCES = [
  {
    organization: "IIEC - IUBAT",
    role: "Volunteer (Technocrats V-2)",
    duration: "Oct 2024 - Dec 2024",
    note: "Managed Drone Racing and Line Follower Bot segments; coordinated arena setup and Food/Gift distribution."
  },
  {
    organization: "IMEAA",
    role: "Co-Organizer (Volunteer)",
    duration: "Dec 2024 - Jan 2025",
    note: "Alumni Reunion 2025; managed distribution, gift packing, and stall setup."
  },
  {
    organization: "Google Maps",
    role: "Local Guide & Road Mapper",
    duration: "Jan 2017 - Present",
    note: "Contributing accurate road data and place info globally."
  },
  {
    organization: "Rotaract Club of IUBAT",
    role: "Member",
    duration: "Sep 2022 - Present",
    note: "Active in social service and membership drives."
  },
  {
    organization: "DUET Robotics Club",
    role: "Campus Ambassador",
    duration: "Sep 2025 - Dec 2025",
    note: "Promoted robotics innovation for DUET Techfest 2025."
  },
  {
    organization: "Team Matrix - Elite Hackers",
    role: "Campus Ambassador",
    duration: "Nov 2023 - Present",
    note: "Organized technical webinars for cybersecurity awareness."
  },
  {
    organization: "Rumor Scanner",
    role: "Volunteer",
    duration: "Aug 2022 - Apr 2024",
    note: "Assisted in digital literacy and fact-checking initiatives."
  },
  {
    organization: "Bashundhara Shuvosangho, IUBAT",
    role: "General Member",
    duration: "May 2023 - Present",
    note: "Tree plantation and winter clothing distribution campaigns."
  },
  {
    organization: "Whistle Limited",
    role: "District Leader",
    duration: "Oct 2020 - Jan 2021",
    note: "Led community assemblies and book events."
  },
  {
    organization: "Youth Career Institute",
    role: "Youth Ambassador",
    duration: "Jan 2021 - Oct 2021",
    note: "National Youth Carnival 2021; career development focus."
  },
  {
    organization: "Volunteer for Bangladesh (VBD)",
    role: "Member",
    duration: "Jun 2020 - Feb 2022",
    note: "COVID-19 public awareness and support programs."
  }
];

export const EDUCATION_HISTORY = [
  {
    institution: "International University of Business Agriculture and Technology (IUBAT)",
    degree: "Bachelor of Science in Mechanical Engineering",
    duration: "2022 - Present",
    highlights: ["Mechanical Drawings", "AutoCAD Mechanical", "Mechanics of Materials", "Materials Science", "Internal Combustion Engines"]
  },
  {
    institution: "Institute of Marine Technology (IMT), Munshiganj",
    degree: "Diploma in Shipbuilding Technology",
    duration: "2017 - 2022",
    highlights: ["Arc Welding", "Welding & Fabrication", "CAD (AutoCAD)", "Workplace Safety"]
  }
];

export const CORE_SUBJECTS = [
  "Engineering Mechanics",
  "Fluid Mechanics I",
  "Heat Transfer",
  "Strength of Materials",
  "Manufacturing Processes",
  "Engineering Drawing and Measurement"
];

export const LAB_EXPERIENCES = [
  "Study of laminar, transitional, and turbulent flow using Reynolds apparatus",
  "Performance analysis of shell and tube heat exchanger",
  "Impact testing and material characterization",
  "Determination of center of pressure for submerged surfaces",
  "DC circuit analysis and verification of KCL and KVL",
  "Heat transfer and fluid mechanics–based experiments"
];

export const RESEARCH_INTERESTS = [
  "Composite materials and sustainable fillers",
  "Energy systems and sustainability",
  "Nanomaterials and 2D materials",
  "Experimental validation and analytical modeling",
  "Review article writing in engineering and materials science"
];

export const PUBLICATIONS = [
  {
    title: "Green nanotechnology for implantable biosensors: Biocompatibility and functional integration in medical applications",
    authors: "A Hossain, MH Manik, S Rakib, N Mahmud, S Khan, Z Ahsan, MS Islam, ...",
    journal: "Biosensors and Bioelectronics: X 27, 100678",
    year: "2025",
    stats: "SJR Q1 (0.821)",
    url: "https://www.researchgate.net/profile/Mehedi-Manik-2"
  },
  {
    title: "Additive Manufacturing in Bone Science: A Cutting-Edge Review of Its Potential and Progress",
    authors: "MS Chowdhury, MS Oliullah, MZ Hossen, MH Manik, MDA Hurayra, ...",
    journal: "Medicine in Novel Technology and Devices, 100379",
    year: "2025",
    stats: "SJR Q2 (0.519)",
    url: "https://www.researchgate.net/profile/Mehedi-Manik-2"
  },
  {
    title: "The emerging role of machine learning in nanomaterials research: applications, challenges, and future directions",
    authors: "JJ Mim, S Rakib, S Akter, JR Nisha, S Khan, SM Rahman, MH Manik, ...",
    journal: "Journal of Nanoparticle Research 27 (11), 1-51",
    year: "2025",
    stats: "SJR Q2 (0.469)",
    url: "https://www.researchgate.net/profile/Mehedi-Manik-2"
  }
];

export const TECHNICAL_SKILLS = [
  {
    title: "Technical Skills",
    skills: ["AutoCAD 2D", "Solidworks", "Microsoft PowerPoint", "Arc welding (1G, 2G, 3G)", "Technical Writing"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership and coordination", "Time management & organization", "Problem-solving", "Team collaboration"]
  },
  {
    title: "Creative & Digital",
    skills: ["Photography & Videography", "Video Editing", "Social Media Management", "Content Strategy"]
  }
];

export const LANGUAGES = [
  { name: "Bengali", level: "Fluent" },
  { name: "English", level: "Intermediate" }
];

export const CERTIFICATIONS = [
  {
    title: "3DSwymer Associate",
    issuer: "Dassault Systèmes",
    date: "Issued Dec 2025"
  },
  {
    title: "Certificate of Excellence – SMART CV",
    issuer: "Grameenphone Ltd",
    date: "Issued Jun 2025"
  },
  {
    title: "Professional AutoCAD Training",
    issuer: "IUBAT",
    date: "Issued May 2024"
  },
  {
    title: "Solidworks Certification",
    issuer: "IUBAT",
    date: "Issued 2024"
  }
];

export const REFERENCES = [
  {
    name: "Nayem Hossain",
    title: "Assistant Professor, IUBAT",
    relation: "Student-Teacher",
    mobile: "+8801913132770",
    email: "nayem.hossain@iubat.edu"
  },
  {
    name: "Taslima Khatun",
    title: "Lecturer, IUBAT",
    relation: "Student-Teacher",
    mobile: "+8801622156320",
    email: "rumpa.cba@iubat.edu"
  }
];

export const DETAILED_EXPERIENCES = [
  {
    company: "Nayem's Association for Research & Publication (NARP)",
    roles: [
      {
        title: "Associate Research Coordinator",
        duration: "Nov 2025 - Present",
        description: "Coordinating research activities and fostering collaborative academic growth on-site."
      },
      {
        title: "Media & Publication Secretary",
        duration: "Nov 2024 - Nov 2025",
        description: "Managed social media channels, update activities, and research promotions. Contributed to the organization's aim of promoting research and innovation."
      },
      {
        title: "General Member",
        duration: "Oct 2024 - Present",
        description: "Focusing on Review Articles and Research in a hybrid setting."
      }
    ]
  },
  {
    company: "IUBAT Mathematics Society (IMS)",
    roles: [
      {
        title: "Joint Secretary",
        duration: "Jun 2025 - Present",
        description: "Leading executive functions, managing student engagement, and designing official IMS ID cards and posters."
      },
      {
        title: "Photographer",
        duration: "May 2024 - Jun 2025",
        description: "Official event photographer for IMS; documented executive recruitment and society events. Skills: Event Photography, Photography."
      }
    ]
  },
  {
    company: "IUBAT Innovation & Entrepreneurship Center (IIEC)",
    roles: [
      {
        title: "Co-Media and Market Analyzer",
        duration: "Feb 2025 - Present",
        description: "Analyzing market trends for technical innovations and managing media presence for national competitions."
      }
    ]
  },
  {
    company: "Rotaract Club of IUBAT",
    roles: [
      {
        title: "Deputy Editorial Director",
        duration: "Aug 2024 - Aug 2025",
        description: "Appointed to the Executive Panel; managed content strategy and editorial functions. Skills: Content Management, Editorial."
      }
    ]
  },
  {
    company: "Rim Reapers (Fabrication Team)",
    roles: [
      {
        title: "Executive Member",
        duration: "Jan 2024 - Aug 2025",
        description: "Contributing to engineering design and physical fabrication for racing projects."
      }
    ]
  },
  {
    company: "Bashundhara Shuvosangho, IUBAT Branch",
    roles: [
      {
        title: "Felicitation Secretary",
        duration: "Sep 2023 - Oct 2024",
        description: "Organized recognition events and social welfare campaigns for underprivileged communities. Skills: Teamwork, Social Services."
      }
    ]
  },
  {
    company: "Dreamers Lab",
    roles: [
      {
        title: "Researcher",
        duration: "Apr 2024 - Aug 2024",
        description: "Full-time remote research role focusing on critical research methodology. Skills: Research Skills."
      }
    ]
  },
  {
    company: "Wzitsolution Bangladesh",
    roles: [
      {
        title: "Freelancer",
        duration: "May 2020 - Apr 2021",
        description: "Data entry and online lead generation projects. Skills: Data Entry, Lead Generation."
      }
    ]
  }
];
