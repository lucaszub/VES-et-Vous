"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#zones", label: "Zones" },
    { href: "#rdv", label: "Rendez-vous" },
    { href: "#avance", label: "Avance Immédiate" },
    { href: "#about", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto" style={{ padding: "0 1.5rem" }}>
        <div
          className="flex items-center justify-between"
          style={{ height: "80px" }}
        >
          {/* Logo */}
          <a href="#accueil" className="flex items-center">
            <Image
              src="/Logo VES ET VOUS.png"
              alt="VES et Vous - Services à domicile"
              width={230}
              height={230}
              priority
              style={{ objectFit: "contain" }}
            />
          </a>

          {/* Menu Desktop */}
          <div
            className="hidden gap-3 md:flex items-center"
            style={{ gap: "0.5rem" }}
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-[#E1F0F7] transition-all font-medium"
                style={{ color: "#333" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center"
            style={{ width: "40px", height: "40px", gap: "6px" }}
            aria-label="Menu"
          >
            <span
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "var(--primary-blue)",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: isMenuOpen
                  ? "rotate(45deg) translateY(9px)"
                  : "none",
              }}
            ></span>
            <span
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "var(--primary-blue)",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: isMenuOpen ? "0" : "1",
              }}
            ></span>
            <span
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "var(--primary-blue)",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: isMenuOpen
                  ? "rotate(-45deg) translateY(-9px)"
                  : "none",
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          right: 0,
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          maxHeight: "calc(100vh - 80px)",
          overflowY: "auto",
        }}
      >
        <div style={{ padding: "1.5rem" }}>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleMenuClick}
              className="block py-3 px-4 rounded-lg hover:bg-[#E1F0F7] font-medium"
              style={{
                color: "#333",
                fontSize: "1.125rem",
                marginBottom: "0.5rem",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+33603163070"
            onClick={handleMenuClick}
            className="block py-3 px-4 rounded-lg font-semibold text-center"
            style={{
              backgroundColor: "var(--primary-blue)",
              color: "white",
              marginTop: "1rem",
            }}
          >
            📞 Appeler maintenant
          </a>
          <a
            href="sms:+33603163070"
            onClick={handleMenuClick}
            className="block py-3 px-4 rounded-lg font-semibold text-center"
            style={{
              backgroundColor: "var(--orange)",
              color: "white",
              marginTop: "0.75rem",
            }}
          >
            💬 Envoyer un SMS
          </a>
        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          }}
        ></div>
      )}
    </nav>
  );
}
