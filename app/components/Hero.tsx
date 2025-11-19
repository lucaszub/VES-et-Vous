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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight mb-6">
          {/* Aide à Domicile Rezé et Alentours */}
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl">
            Services Ménagers, Garde d'Enfants, Repassage
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white drop-shadow-xl font-light mb-6">
          Rezé • Bouguenais • La Montagne • Bouaye • Saint-Jean-de-Boiseau
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-xl font-light leading-relaxed mb-8">
          Votre tranquillité d'esprit,
          <br />
          notre priorité
        </p>
        <div
          className="flex flex-col md:flex-row gap-4 justify-center px-8 md:px-0"
          style={{ marginTop: "2rem" }}
        >
          <a href="tel:+33603163070" className="btn btn-primary">
            📞 Appelez-nous maintenant
          </a>
          <a href="sms:+33603163070" className="btn btn-secondary">
            💬 Envoyez un SMS
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
