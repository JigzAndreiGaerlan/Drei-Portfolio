import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

type SkillItem = {
  icon: React.ReactNode;
  label: string;
};

type SkillCardProps = {
  title: string;
  items: SkillItem[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="p-5 border border-slate-200 rounded-lg">
      <h3 className="font-medium text-slate-900">{title}</h3>

      <div className="mt-3 flex flex-wrap gap-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1 border border-slate-200 rounded-md text-slate-600 text-sm"
          >
            <span className="text-slate-700">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen bg-slate-50 text-slate-900 flex items-center px-6"
    >
      {" "}
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Skills
          </h2>
          <div className="mt-2 h-1 w-16 bg-indigo-500 rounded"></div>
        </div>

        <div className="space-y-6">
          {/* Frontend */}
          <SkillCard
            title="Frontend"
            items={[
              { icon: <FaHtml5 />, label: "HTML" },
              { icon: <FaCss3Alt />, label: "CSS" },
              { icon: <FaJs />, label: "JavaScript" },
              { icon: <SiTailwindcss />, label: "Tailwind" },
              { icon: <FaReact />, label: "React" },
              { icon: <SiNextdotjs />, label: "Next.js" },
              { icon: <SiVite />, label: "Vite" },
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            items={[
              { icon: <FaNodeJs />, label: "Node.js" },
              { icon: <FaPhp />, label: "PHP" },
              { icon: <SiLaravel />, label: "Laravel" },
              { icon: <SiMysql />, label: "MySQL / MySQLi" },
              { icon: <SiPostgresql />, label: "PostgreSQL" },
              { icon: <SiRedis />, label: "Redis" },
            ]}
          />

          {/* Tools */}
          <SkillCard
            title="Tools & APIs"
            items={[
              { icon: <FaGitAlt />, label: "Git" },
              { icon: <FaGithub />, label: "GitHub" },
              { icon: <FaReact />, label: "React Router" },
              { icon: <FaReact />, label: "Jotai" },
              { icon: <FaReact />, label: "TanStack Query" },
              { icon: <FaReact />, label: "Zod Validation" },
              { icon: <FaReact />, label: "REST API Handling" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
