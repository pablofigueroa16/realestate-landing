export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-emerald-900 -z-20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl grid lg:grid-cols-2 gap-12">
          
          <div className="text-white">
            <span className="text-emerald-300 font-medium tracking-wider text-sm uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Ready to Find Your Dream Villa?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-md leading-relaxed">
              Contact our team of experts today to start your journey towards
              owning a piece of paradise in Bali. We&apos;re here to answer all your
              questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-emerald-100/80">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-emerald-100/80">hello@baliestates.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-gray-900"
                  placeholder="I'm interested in..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
