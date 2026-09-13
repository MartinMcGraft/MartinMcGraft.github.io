export const projects = {
  defaultHref: "https://github.com/MartinMcGraft",
  title: "Projects",
  items: [
    {
      name: "JobAgent",
      href: "https://github.com/MartinMcGraft/JobAgent",
      subtitle: "Job Search Automation Pipeline",
      details: [
        "Discovers jobs via REST APIs and web scraping across 6+ job boards; scores against personal preferences and maintains a deduplicated company registry.",
        "Generates tailored CVs, emails, and cover letters in English and Portuguese for approved jobs; backs up drafts to Google Drive with draft management.",
        "Built with Python, unit-tested (154+ tests), and uses Claude for content generation, workflow automation, and a live Job Search Pulse dashboard."
      ],
      tags: ["Python", "REST APIs", "Web Scraping", "Unit Testing", "Git", "YAML", "Claude", "Automation"],
    },
    {
      name: "I-Crash",
      href: "https://github.com/MartinMcGraft/ICrash",
      subtitle: "Stock Management System for Emergency Trolleys",
      details: [
        "Development of a cross-platform application with Flutter and Dart, tested on Android, Windows, and the web.",
        "Backend implementation with Django, REST API integration, and a PostgreSQL database.",
        "Integration of barcode, QR code, and Data Matrix scanning to register clinical consumables and verify their expiry dates, supporting more sustainable stock management.",
      ],
      tags: ["Flutter", "Dart", "Django", "PostgreSQL", "REST APIs", "Helthcare", "Sustainability"],
    },
  ],
};
