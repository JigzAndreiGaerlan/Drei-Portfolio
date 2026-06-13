import { FiExternalLink, FiGithub } from "react-icons/fi";
type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = []; // empty for now

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white text-slate-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="text-slate-500 mt-2 max-w-xl">
            Selected work showcasing API integration, frontend architecture, and
            modern UI development practices.
          </p>
        </div>

        {/* Content */}
        {projects.length === 0 ? (
          <div className="border border-slate-200 rounded-2xl p-10 text-center">
            <p className="text-slate-500">No projects added yet</p>
            <p className="text-slate-400 text-sm mt-1">
              Building in progress — projects will appear here soon
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 transition"
              >
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-indigo-600 transition">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm mt-2 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
                      >
                        <FiExternalLink size={16} />
                        Live
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
                      >
                        <FiGithub size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
