/**
 * Add projects: push a new object into projects[].
 * Add jobs/volunteering: push into experience[].
 * featured: true shows the long-form "Discovery" style write-up on projects.html.
 */
window.PORTFOLIO_DATA = {
  education: [
    {
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      degree: "Bachelor of Science in Electrical Engineering",
      dates: "August 2025 – Present",
      expected: "May 2029",
      gpa: "4.00",
      notes:
        "Coursework and labs build depth in circuits, signals, embedded systems, and computing—foundations I apply in robotics software and hardware integration.",
    },
  ],

  experience: [
    {
      title: "Technical Lead",
      org: "The Acceptance Project",
      location: "Philadelphia, PA",
      dates: "March 2025 – Present",
      summary:
        "Startup-style college consulting organization focused on admissions support for inner-city youth.",
      bullets: [
        "Designed a web-based platform for scheduling and content delivery for college counseling, serving 30+ employees and clients.",
        "Built customized online application trackers for five students with individualized criteria and data.",
        "Coordinated requirements and system improvements with cross-functional stakeholders.",
      ],
    },
    {
      title: "Fellow, Murphy Laboratory",
      org: "The Wistar Institute",
      location: "Philadelphia, PA",
      dates: "June 2024 – August 2024",
      summary:
        "Cancer research laboratory focused on personalized treatments and rigorous experimental standards.",
      bullets: [
        "Executed 20+ laboratory experiments following strict safety and procedural protocols.",
        "Documented processes and verified results to support data accuracy and research quality.",
      ],
    },
    {
      title: "Research Affiliate, Concepts and Cognition Laboratory",
      org: "Temple University",
      location: "Philadelphia, PA",
      dates: "September 2024 - May 2025",
      summary:
        "Interdisciplinary laboratory specializing in the studies of language, semantic memory, and the treatment of progressive language impairment in dementia. ",
      bullets: [
        "Supported experimental design and computational analysis of linguistic datasets.",
        "Performed structured data processing, evaluation and documentation using Python-based tools and LLMs.",
        "Assisted in validating outputs and documenting results for reproducibility."
      ],
    },
    {
      title: " Reserach and Development Intern",
      org: "Invisible Sentinel",
      location: "Philadelphia, PA",
      dates: "June 2023 – August 2023",
      summary: "",
      bullets: [
        "Executed 20+ laboratory experiments following strict safety and procedural protocols.",
        "Documented processes and verified results to support data accuracy and research quality.",
      ],
    },
    {
      title: "Engineering Volunteer",
      org: "EasterSeals Disability & Community Services",
      location: "Philadelphia, PA",
      dates: "September 2023 – June 2024",
      summary:
        "Nonprofit providing accessibility services and assistive devices for adults and children with physical impairments.",
      bullets: [
        "Designed, assembled, inspected, and tested 50+ custom electronic devices with attention to safety and reliability.",
        "Performed preventive maintenance and troubleshooting using schematics and multimeters.",
      ],
    },
  ],

  projects: [
    {
      slug: "autonomous-robotics",
      title: "Autonomous Robotics Project",
      date: "Fall 2025",
      featured: false,
      tagline:
        "Two-person team: modular Python control software for maze navigation, autonomous delivery, and maneuvers such as parallel parking under real-world physical constraints.",
      tech: ["Python", "Robotics", "Testing & validation", "Team collaboration"],
      links: [],
      images: [
        {
          src: "Screenshot_20260410-192152.png",
          alt: "A humanoid robot sculpture exhibited indoors, used here as a thematic visual for robotics work.",
          caption:
            "Racing my robot against a rival group!",
        },
      ],
      overviewParagraphs: [
        "I worked on a two-person autonomous robotics project where we programmed a mobile robot to navigate mazes, complete delivery-style tasks, and perform maneuvers such as parallel parking. I focused on writing modular Python code that separated high-level planning, sensor input, and motor control. Breaking the system into smaller components made it easier to debug hardware issues like wheel slip and sensor noise, and allowed us to test individual behaviors before combining them into full task sequences.",
        "Throughout the project, I helped run over 100 structured test trials and tracked simple performance metrics such as success rate, completion time, and common failure modes. We used this data to refine parameters and improve reliability across different scenarios. This project gave me practical experience working through an iterative engineering process—designing behaviors, testing them systematically, and adjusting the system based on measured results."
      ],
    },
    {
      slug: "where2whizz",
      title: "Where2Whizz",
      date: "Fall 2024 – Spring 2025",
      featured: false,
      tagline:
        "Interactive map of public restrooms across multiple countries with crowdsourced data; live site at where2whizz.com.",
      tech: ["JavaScript", "HTML", "CSS", "REST APIs", "JSON", "Accessibility"],
      links: [{ href: "https://where2whizz.com", label: "Visit where2whizz.com" }],
      images: [
        {
          src: "Screenshot 2026-03-30 210349.png",
          alt: "Screenshot of where to whizz",
          caption:
            "Look at my interface!",
        },
      ],
      overviewParagraphs: [
        "Where2Whizz is a public-interest web application that presents restroom locations on an interactive map across multiple countries, combining a clear front end with APIs that support crowdsourced updates. I wrote more than 1,500 lines of JavaScript, HTML, and CSS to keep the interface intuitive and accessible: predictable navigation, readable typography, and layouts that still work on smaller screens.",
        "On the data side, I integrated JSON and REST APIs so user-contributed information could be stored and rendered geospatially. That meant thinking about validation, consistency, and how the UI should behave when data was sparse or loading slowly. The project strengthened my full-stack instincts and my respect for humane design in infrastructure-adjacent tools—maps are everyday systems people rely on when plans change.",
      ],
    },
    {
      slug: "Ring",
      title: "Stainless Steel Ring - Crafted on Lathe",
      date: "Spring 2025",
      featured: false,
      tagline:
        "Entry-level lathe project to learn the tool.",
      tech: ["Lathe", "Fusion360", "CAD"],
      links: [],
      images: [
        {
          src: "PXL_20240605_013713682.jpg",
          alt: "image of the ring with its 3d model",
          caption:
            "My beautiful ring with its beautful CAD model",
        },
      ],
      overviewParagraphs: [
        "I wanted to learn how to use a lathe, so I started with this basic stainless steel ring. I designed what I wanted it to look like in Fusion 360, then used a lathe to carve my design out of a steel rod.",
      ],
    },
    {
      slug: "Rube Goldberg Machine",
      title: "Rube Goldberg Machine",
      date: "Spring 2024",
      featured: false,
      tagline:
        "Complex machine built to make the simplest task complicated.",
      tech: ["Fusion360", "Arduino"],
      links: [],
      images: [
        {
          src: "PXL_20240307_132208115.jpg",
          alt: "One section of machine",
          caption:
            "My groups's section - one of 6.",
        },
        {
          src: "PXL_20240307_134026177.jpg",
          alt: "Full machine",
          caption:
            "The machine fully assembled",
        },
      ],
      overviewParagraphs: [
        "I worked as part of a class-wide team to design and build a large Rube Goldberg machine that completed a simple task - frying an egg - through a long chain reaction. I contributed by programming Arduino components, designing custom parts in Fusion 360 for 3D printing, and helping build and test different mechanical elements. This project gave me hands-on experience combining coding, 3D modeling, and physical construction while collaborating with others to make sure each stage connected smoothly.",
        "My engineering class broke the school record, completing the task on our machine's very first full run!"
      ],
    },
    {
      slug: "Fall Friend",
      title: "Fall Friend",
      date: "Spring 2023",
      featured: false,
      tagline:
        "Arduino-based SMS alert system built to help seniors get assistance from emergency contacts in the case of falls.",
      tech: ["Fusion360, Arduino"],
      links: [],
      images: [
        {
          src: "Attachment.png",
          alt: "A person wearing an arduino duct taped to their chest.",
          caption:
            "My groupmate ready to test our device.",
        },
        {
          src: "Screenshot 2026-03-30 211344.png",
          alt: "Schematic",
          caption:
            "A diagram of our schematic.",
        },
      ],
      overviewParagraphs: [
        "Fall detection device designed to send SMS alerts to emergency contacts. I used an ESP32 and an accelerometer to assemble this simple gadget, programmed it in C, and integrated AdaFruit to manage an SMS alert system and an app-based interface. "
      ],
    },
  ],
};
