import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
    isPinned: true
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
    isPinned: true
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
    isPinned: false
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
    isPinned: true
  }
];

export default function PinnedProjects() {
  const pinnedProjects = projects.filter((project) => project.isPinned);
  //pinnedProjects, projects dizisini filter fonksiyonu ile filtreleyerek sadece pinli projeleri içerecek.
  //pinnedProjects dizisini map fonksiyonu ile döngüye alarak her bir pinli proje için bir liste öğesi oluşturdum.
  //Her proje öğesi için, projenin adı (project.name), baş harfleri (project.initials), üye sayısı (project.members) ve projenin rengi (project.bgColor) ile birlikte bir liste öğesi oluşturdum.
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">Pinlenmiş Projeler</h2>
      <ul className="projects-list">

        {pinnedProjects.map((project, index) => (
          <li key={index} className="project-list-item">
            <div className={`project-initials ${project.bgColor}`}>
              {project.initials}
            </div>
            <div className="project-content-wrapper">
              <div className="project-content">
                <a href={project.href} className="project-link">
                  {project.name}
                </a>
                <p className="project-members">{project.members} Üye</p>
              </div>
              <div className="project-button-wrapper">
                <button type="button" className="project-button">
                  <EllipsisVerticalIcon className="project-icon" />
                </button>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
