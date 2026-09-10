export const projects = {
  defaultHref: "https://github.com/MartinMcGraft",
  title: "Projects",
  items: [
    /*{
      name: "Minecraft Alpha Remake",
      href: "https://github.com/MartinMcGraft/MinecraftRemake",
      subtitle: "3D Game Engine in C++",
      status: "In development",
      details: [
        "Development of a custom voxel game engine in C++ to recreate a sandbox experience inspired by Minecraft Alpha.",
        "Built to apply game development theory in practice, while strengthening object-oriented programming and core engine programming concepts.",
        "The project also serves as a foundation for future Unreal Engine development by deepening C++ knowledge, gameplay architecture, and game design documentation practices.",
      ],
      tags: ["C++", "Game Engine", "Game Design", "GDD"],
    },
    {
      name: "Python Agents",
      href: "https://github.com/MartinMcGraft/PythonAgents",
      subtitle: "Agent-Based AI System",
      status: "In development",
      details: [
        "Python Agents is a project focused on exploring reactive, deliberative, and learning-based agents through interactive problem-solving.",
        "Built as an extension of the artificial intelligence concepts studied at ISEL, it aims to implement and compare different agent approaches in classic decision-making environments.",
        "The goal is to develop a small library with visual experiments that show how agents learn, accumulate rewards, and evaluate the utility of states in practice.",
      ],
      tags: ["Python", "PySide6", "Numpy"],
    }*/,
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
    }
  ],
};
