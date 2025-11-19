export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex items-center justify-center px-6"
      style={{
        height: "100vh",
        marginTop: "80px",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight mb-12">
          Services à Domicile<br />Rezé et Alentours
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-xl font-light leading-relaxed mb-16">
          Profitez de votre famille,<br />nous prenons soin de votre quotidien
        </p>

        <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full mb-12 shadow-lg">
          <span className="text-2xl">🏅</span>
          <span className="text-sm md:text-base font-semibold" style={{ color: "var(--primary-blue)" }}>
            Agréé Services à la Personne • Crédit d'impôt 50%
          </span>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-white drop-shadow-xl font-medium mb-8">
          Ménage • Garde d'Enfants • Repassage
        </p>

        <p className="text-base md:text-lg text-white drop-shadow-xl font-light mb-12">
          Rezé • Bouguenais • La Montagne • Bouaye • Saint-Jean-de-Boiseau
        </p>

        <div
          className="flex flex-col md:flex-row gap-4 justify-center px-8 md:px-0"
          style={{ marginTop: "2rem" }}
        >
          <a href="tel:+33603163070" className="btn btn-primary">
            📞 Je prends rendez-vous
          </a>
          <a href="sms:+33603163070" className="btn btn-secondary">
            💬 Être rappelé(e)
          </a>
        </div>
        <p className="text-white text-lg md:text-xl mt-6 drop-shadow-lg">
          <a href="tel:+33603163070" className="hover:underline font-semibold">
            06.03.16.30.70
          </a>
        </p>
      </div>
    </section>
  );
}
