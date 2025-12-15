import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex items-center justify-center px-6"
      style={{
        minHeight: "70vh",
        marginTop: "80px",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo en haut à gauche */}

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6 flex flex-col items-center gap-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-tight">
          Services à Domicile
          <br />
          Rezé et Alentours
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-xl font-light leading-relaxed">
          Profitez de votre famille,
          <br />
          nous prenons soin de votre quotidien
        </p>

        <div className="flex items-center justify-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg w-fit mx-auto">
          <span className="text-2xl">🏅</span>
          <span
            className="text-sm md:text-base font-semibold"
            style={{ color: "var(--primary-blue)" }}
          >
            Agréé Services à la Personne • Crédit d'impôt 50%
          </span>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-white drop-shadow-xl font-medium">
          Ménage • Garde d'Enfants • Repassage
        </p>

        <p className="text-sm md:text-base text-white drop-shadow-xl font-light">
          Rezé • Bouguenais • La Montagne • Bouaye • Saint-Jean-de-Boiseau
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center px-8 md:px-0">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+33603163070" className="btn btn-primary">
              📞 Je prends rendez-vous
            </a>
            <a href="sms:+33651476211" className="btn btn-secondary">
              💬 Être rappelé(e)
            </a>
          </div>
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white/70">
            <span className="text-xl">⏱️</span>
            <div className="text-left">
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--primary-blue)" }}
              >
                Rappel en moins de 30 min
              </p>
              <p className="text-xs text-gray-700">
                Du lundi au samedi, 9h-19h
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-base md:text-lg drop-shadow-lg">
          <a href="tel:+33651476211" className="hover:underline font-semibold">
            06.51.47.62.11
          </a>
        </p>
      </div>
    </section>
  );
}
