export default function page() {
  return (
    <section
      id="hero"
      className="h-screen bg-slate-50 text-slate-900 flex items-center px-6"
    >
      {" "}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        {/* Small label */}
        <p className="text-slate-500 text-sm tracking-wide">Web Developer</p>

        {/* Main heading */}
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-slate-900 leading-tight">
          Building clean{" "}
          <span className="text-indigo-600">web experiences</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-slate-600 text-base md:text-lg">
          I design and develop modern web applications with focus on
          performance, simplicity, and usability.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-md border border-slate-300 text-slate-700 hover:border-indigo-500 hover:text-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
