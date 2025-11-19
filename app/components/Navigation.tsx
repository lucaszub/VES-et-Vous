"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)" }}
          >
            VES et Vous
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#services"
              className="px-4 py-2 rounded-lg hover:bg-[#E1F0F7] hover:text-[#2A6B84] transition-all font-medium"
            >
              Services
            </a>
            <a
              href="#rdv"
              className="px-4 py-2 rounded-lg hover:bg-[#E1F0F7] hover:text-[#2A6B84] transition-all font-medium"
            >
              Rendez-vous
            </a>
            <a
              href="#avance"
              className="px-4 py-2 rounded-lg hover:bg-[#E1F0F7] hover:text-[#2A6B84] transition-all font-medium"
            >
              Avance Immédiate
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg hover:bg-[#E1F0F7] hover:text-[#2A6B84] transition-all font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
