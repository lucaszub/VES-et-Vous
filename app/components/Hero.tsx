export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex items-center justify-center px-6"
      style={{
        height: "85vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight mb-8">
          Aide à Domicile
          <br />
          Rezé, Bouguenais, Bouaye et communes voisines
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-xl font-light leading-relaxed mb-8">
          Votre tranquillité d'esprit,
          <br />
          notre priorité
        </p>
        <p
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white drop-shadow-lg leading-relaxed"
          style={{ marginBottom: "2rem" }}
        >
          Services professionnels de ménage complet, garde d'enfants de plus de 3 ans,
          et repassage à domicile
        </p>
        <div
          className="flex flex-col md:flex-row gap-4 justify-center"
          style={{ marginTop: "2rem" }}
        >
          <a href="#rdv" className="btn btn-primary">
            Prendre rendez-vous
          </a>
          <a href="#services" className="btn btn-secondary">
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
