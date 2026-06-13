
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="h-screen bg-slate-50 text-slate-900 flex items-center px-6"
    >
      {" "}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2">Contact</h2>

        <p className="text-slate-500 mb-10">
          No form submission. Just direct contact channels.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <p className="text-slate-700 font-medium">Email</p>
              <p className="text-slate-600">jigzgaerlan@email.com</p>
            </div>

            <div>
              <p className="text-slate-700 font-medium">Location</p>
              <p className="text-slate-600">Philippines</p>
            </div>

            <div>
              <p className="text-slate-700 font-medium">Response style</p>
              <p className="text-slate-600">
                No guaranteed response time. Best effort only.
              </p>
            </div>
          </div>

          {/* RIGHT: Links */}
          <div className="space-y-3">
            <a
              href="https://github.com/JigzAndreiGaerlan"
              target="_blank"
              className="block px-4 py-3 border border-slate-200 rounded-md hover:bg-slate-100 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              target="_blank"
              className="block px-4 py-3 border border-slate-200 rounded-md hover:bg-slate-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/drei.grln/"
              target="_blank"
              className="block px-4 py-3 border border-slate-200 rounded-md hover:bg-slate-100 transition"
            >
              Facebook
            </a>

            <a
              href="https://gmail.com"
              className="block px-4 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition text-center"
            >
              Open Email App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
