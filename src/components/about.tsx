export default function About() {
  return (
    <section
      id="about"
      className="h-screen bg-slate-50 text-slate-900 flex items-center px-6"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 bg-indigo-500 rounded"></div>
        </div>

        <div className="max-w-3xl space-y-5 text-slate-600 leading-relaxed">
          <p>
            I’m a Web Developer building full-stack applications using React,
            Next.js, Node.js, PHP, and Laravel. I develop UI systems with
            Tailwind CSS and implement client-side logic using tools like React
            Router, Jotai, and TanStack Query.
          </p>

          <p>
            On the backend, I build REST APIs, authentication flows using JWT,
            and database-driven applications with MySQL, PostgreSQL, and Redis
            for caching and performance optimization.
          </p>

          <p>
            My workflow includes version control with Git and GitHub, API
            integration, and structured component-based architecture focused on
            maintainability and predictable data flow.
          </p>
        </div>
      </div>
    </section>
  );
}
