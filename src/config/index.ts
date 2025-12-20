import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Anshika Srivastava | Petroleum Engineer",
  author: "Anshika Srivastava",
  description:
    "Petroleum Engineering Undergraduate at RGIPT. Specializing in Enhanced Oil Recovery, reservoir simulation, and energy transition technologies.",
  lang: "en",
  siteLogo: "/anshika-logo.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/anshika-srivastava-37544228b/" },
    { text: "GitHub", href: "https://github.com/anshikasri-rgb" },
    { text: "Email", href: "mailto:23pe3013@rgipt.ac.in" },
  ],
  socialImage: "/anshika-og.png",
  canonicalURL: "https://anshika-portfolio.vercel.app",
};

// PAGE-SPECIFIC CONTENT
export const SITE_CONTENT: SiteContent = {
  // Hero Section
  hero: {
    name: "Anshika Srivastava",
    specialty: "Petroleum Engineering | RGIPT",
    summary:
      "Aspiring Petroleum Engineer with a strong foundation in reservoir engineering and data analytics. Focused on sustainable energy solutions, CCUS, and Enhanced Oil Recovery.",
    email: "23pe3013@rgipt.ac.in",
  },
  // Experience Section (Internships, Field Trips, Achievements)
  experience: [
    {
      company: "Indian Institute of Technology (ISM), Dhanbad",
      position: "Research Intern",
      startDate: "June 2025",
      endDate: "July 2025",
      summary: [
        "Investigated 'Optimization of AOS Concentration in Guar Gum-SiO₂ Nanoparticle Systems in Enhanced Oil Recovery'.",
        "Conducted advanced DLS, zeta potential, rheology, and IFT tests under simulated reservoir conditions.",
        "Demonstrated that the optimized nanofluid system improves rock wettability and thermal stability."
      ],
    },
    {
      company: "Andromeda aOS Buildathon",
      position: "Winner (1st Place)",
      startDate: "2025",
      endDate: "$2,500",
      summary: [
        "Led a team to victory in a global blockchain hackathon with over 2500+ participants.",
        "Designed and implemented a high-impact solution on the Andromeda Operating System.",
        "Demonstrated rapid prototyping, protocol design expertise, and effective technical leadership under pressure."
      ],
    },
    {
      company: "Reliance Foundation",
      position: "Undergraduate Scholar",
      startDate: "2023",
      endDate: "Scholarship",
      summary: [
        "Recipient of the prestigious Reliance Foundation Undergraduate Scholarship."
      ],
    },
    {
      company: "Chromion Chainlink Hackathon",
      position: "Finalist",
      startDate: "2025",
      endDate: "Finalist",
      summary: [
        "Secured finalist position in the hackathon."
      ],
    },
  ],
  // Projects Section
  projects: [
    {
      name: "Directional Well Calculator",
      summary: "A modern web tool for calculating directional drilling trajectories (Type-I Profile). Helper for engineers to compute Radius of Curvature, Build Angle, and trajectory points. Built with React, Vite, and TailwindCSS.",
      linkPreview: "#", // Add link if available, otherwise placeholder
      linkSource: "#",
      image: "/well-calc.png",
    },
    {
      name: "Academics: Amine-Based Regenerated Slug for CCUS",
      summary: "Synthesizing thermoresponsive amine-functionalized polymers for integrated CO₂ Capture and Storage (CCUS) and EOR. Investigating LCST-based phase transitions for controlled CO₂ capture.",
      image: "/ccus-project.png",
    },
    {
      name: "A.R.I.A. - Automated RWA Intelligence",
      summary: "The world's first AI-powered multi-document RWA verification platform on QIE Blockchain. Features instant NFT minting, fractionalization, and AI-driven document analysis for 8+ types (Deeds, Invoices, etc.). Built with Python (Flask), Gemini AI, and Solidity.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      linkSource: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      image: "/aria-qie.png",
    },
    {
      name: "Aegis Protocol V3",
      summary: "An autonomous, on-chain insurance protocol using Chainlink Automation and Functions. Proactively monitors assets and detects loss events without user intervention, ensuring decentralized protection.",
      linkPreview: "https://aegis-frontend-tau.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/Aegis-Protocol",
      image: "/aegis-protocol.png",
    },
  ],
  // About Section
  about: {
    description: `
      I am a B.Tech student in Petroleum Engineering at Rajiv Gandhi Institute of Petroleum Technology (RGIPT), with a CPI of 8.26/10. 
      My academic journey is driven by a passion for solving complex energy challenges, from optimizing Enhanced Oil Recovery (EOR) techniques to developing sustainable Carbon Capture, Utilization, and Storage (CCUS) solutions.

      Beyond academics, I am actively involved in technical leadership roles, serving as the Student Representative for the Student Alumni Interaction Committee (SAIC) and Program Chairperson for the SPE RGIPT Student Chapter.
    `,
    // image: "/anshika-profile.jpg", // Removed for privacy
    skills: [
      "Reservoir Simulation (CMG, Kingdom)",
      "Petroleum Engineering",
      "Python / C / C++",
      "JavaScript / MERN Stack",
      "UI Design (Figma, Illustrator)",
      "Blockchain / EVM",
      "Data Analytics"
    ],
    interests: [
      "Energy Transition",
      "Research",
      "Leadership",
      "Designing"
    ],
  },
};