export default function Footer() {
  return (
    <footer
      className="section"
      style={{ backgroundColor: "var(--primary-blue)", color: "white" }}
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VES et Vous</h3>
            <p className="mb-4">
              Services à domicile de qualité sur Rezé, Bouguenais, Bouaye, La
              Montagne et Saint-Jean-de-Boiseau
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contactez-nous</h4>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-2xl font-bold">
                  <a href="tel:+33603163070" className="hover:underline">
                    06.03.16.30.70
                  </a>
                </p>
              </div>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:sandra.venturini44@gmail.com"
                  className="hover:underline"
                >
                  sandra.venturini44@gmail.com
                </a>
              </p>
              <p>
                <strong>Zone :</strong> Rezé, Bouguenais, Bouaye, La Montagne,
                Saint-Jean-de-Boiseau
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Horaires</h4>
            <div className="space-y-1">
              <p>Lundi - Vendredi : 9h - 17h</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Suivez-nous</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80" aria-label="Facebook">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm opacity-90">
          <p>&copy; 2025 VES et Vous - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
