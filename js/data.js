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
      title: "Warehouse Associate",
      org: "Pandemic Pantry",
      location: "Philadelphia, PA",
      dates: "February 2025 – August 2025",
      summary:
        "Grocery warehouse packing large orders for customer pickup in a high-throughput environment.",
      bullets: [
        "Loaded, unloaded, and stocked inventory, including operating pallet jacks safely.",
        "Worked in indoor and outdoor conditions with exposure to varying weather and temperatures.",
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
      featured: true,
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
        "The Autonomous Robotics Project is the centerpiece of my hands-on work in electrical and computer engineering at Georgia Tech: a two-person effort to program a mobile robot that can navigate mazes, complete autonomous delivery-style tasks, and execute structured maneuvers such as parallel parking. The assignment mirrors challenges seen in transportation and logistics—planning motion under uncertainty, respecting physical limits, and proving reliability through measurement rather than intuition alone. My teammate and I treated the robot as a small-scale systems integration problem: sensing, actuation, control logic, and software architecture all had to work together, or the whole platform failed in repeatable, embarrassing ways during demo runs.",
        "From a software perspective, I focused on building modular control code in Python rather than a single monolithic script. Early on, we learned that tangled logic made debugging nearly impossible when hardware quirks appeared—wheel slip, sensor noise, or timing drift. Splitting responsibilities into clear modules (for example, separating high-level task planning from low-level motor commands and sensor interpretation) let us swap implementations, run targeted tests, and reason about failures. The codebase grew to over a thousand lines, not for complexity’s own sake, but because we were encoding real behaviors: turning sequences, stopping criteria, recovery paths when a segment overshot, and state transitions as the robot moved through maze segments or delivery waypoints.",
        "Testing became its own engineering discipline. We ran more than a hundred structured test passes, logging outcomes and iteratively tightening parameters. I tracked simple reliability metrics—success rate per scenario, average completion time, and failure modes (collision, stall, timeout)—so we could tell whether a change actually improved performance or only looked better on one lucky run. That habit connects directly to how I want to work in industry: operational safety and infrastructure systems depend on traceable validation, not heroics. The same mindset I used at EasterSeals—inspect, test, document—showed up here at higher speed and with more automation.",
        "Results improved measurably over the semester: fewer catastrophic mis-steers in tight maze sections, smoother transitions between tasks, and more consistent parking attempts under the constraints we were given. The project also sharpened my communication skills: dividing ownership, reconciling two mental models of the same bug, and presenting a coherent story about what the robot could (and could not) do honestly. Looking ahead, I want roles that blend hardware awareness with disciplined software—whether in transportation, robotics, or large-scale systems where failure has real cost. This project is the practical bridge between classroom theory and that goal.",
        "For recruiters and collaborators, the takeaway is straightforward: I can ship structured code under physical constraints, design experiments that justify design decisions, and collaborate tightly on an embedded-adjacent system. As the Discovery Project evolves toward the showcase deadline, I expect to extend this section with additional media—diagrams, video, or poster content—while keeping the same emphasis on reproducible testing and clear attribution of team contributions.",
        "If you are evaluating this portfolio for a course or an interview, the thread that ties the narrative together is operational seriousness: define the behavior, instrument the tests, compare before and after, and document what changed. That is the same standard I want to bring to internships and early-career roles in transportation, robotics, or infrastructure-adjacent engineering teams.",
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
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/640px-World_map_blank_without_borders.svg.png",
          alt: "Simplified world map graphic suggesting global coverage of the mapping project.",
          caption:
            "Blank world map (Eric Gaba / Wikimedia Commons, CC BY-SA 3.0)—decorative context for a geospatial UI project.",
        },
      ],
      overviewParagraphs: [
        "Where2Whizz is a public-interest web application that presents restroom locations on an interactive map across multiple countries, combining a clear front end with APIs that support crowdsourced updates. I wrote more than 1,500 lines of JavaScript, HTML, and CSS to keep the interface intuitive and accessible: predictable navigation, readable typography, and layouts that still work on smaller screens.",
        "On the data side, I integrated JSON and REST APIs so user-contributed information could be stored and rendered geospatially. That meant thinking about validation, consistency, and how the UI should behave when data was sparse or loading slowly. The project strengthened my full-stack instincts and my respect for humane design in infrastructure-adjacent tools—maps are everyday systems people rely on when plans change.",
      ],
    },
  ],
};
