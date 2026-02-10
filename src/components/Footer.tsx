import Link from "next/link";
import { Mail, Phone, Building2, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-screen w-full bg-gray-50 flex flex-col justify-between p-4 md:p-6 overflow-hidden">
      {/* Contact Card */}
      <div className="flex-grow w-full bg-white rounded-[3rem] shadow-sm p-8 md:p-12 lg:p-20 flex flex-col justify-center mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8">
              Contact Us
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md font-light">
              Let us help you find a property that will be not only a profitable
              asset, but also a place of energy, inspiration, and growth.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-gray-900 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-gray-900 font-medium text-lg">
                    office@estetico.estate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-gray-900 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-gray-900 font-medium text-lg">
                    +62 812 3983 8440
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center">
            <form className="space-y-6 w-full max-w-lg mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                />
              </div>

              <button className="w-full bg-black text-white rounded-xl py-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-4">
                Get project presentation
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 pb-2 text-gray-500 text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-6 h-6 border border-gray-400 rounded-md flex items-center justify-center text-gray-900">
            <Building2 size={14} />
          </div>
          <span className="font-bold text-gray-900">Estetico.</span>
        </div>

        <nav className="flex gap-8 mb-4 md:mb-0 text-xs font-medium uppercase tracking-wide">
          <Link href="#about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#units" className="hover:text-gray-900 transition-colors">
            Unit Types
          </Link>
          <Link href="#video" className="hover:text-gray-900 transition-colors">
            Video
          </Link>
          <Link href="#contact" className="hover:text-gray-900 transition-colors">
            Contacts
          </Link>
        </nav>

        <div>
          <p>&copy; {new Date().getFullYear()} Estetico Estate.</p>
        </div>
      </div>
    </footer>
  );
}
