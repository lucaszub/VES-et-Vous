export default function Services() {
  const services = [
    {
      title: "Ménage à Domicile et Bureaux",
      price: "25€/heure",
      description:
        "Service de ménage régulier ou ponctuel pour votre domicile et vos locaux professionnels à Rezé, Bouguenais, Bouaye, La Montagne et Saint-Jean-de-Boiseau",
      features: [
        "Nettoyage complet domiciles et bureaux",
        "Intervention régulière ou ponctuelle",
        "Produits d'entretien professionnels fournis",
        "Personnel qualifié et de confiance",
        "Devis gratuit sur demande",
      ],
    },
    {
      title: "Garde d'Enfants à Domicile",
      price: "25€/heure",
      description:
        "Garde d'enfants occasionnelle ou régulière avec sorties d'école dans votre commune : Rezé, Bouguenais, Bouaye, La Montagne",
      features: [
        "Garde occasionnelle ou régulière",
        "Sorties d'école et activités",
        "Baby-sitting pour enfants de 3 ans et plus",
        "Aide aux devoirs",
        "Personnel expérimenté et sécurisé",
      ],
    },
    {
      title: "Repassage à Domicile",
      price: "25€/heure",
      description:
        "Service de repassage professionnel à domicile ou avec retrait et livraison sur Rezé, Bouguenais, Bouaye et communes voisines",
      features: [
        "Repassage professionnel à domicile",
        "Option retrait et livraison disponible",
        "Repassage soigné de tous vos vêtements",
        "Pliage et rangement inclus",
        "Gain de temps précieux",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="section"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
        >
          Nos Services à Domicile à Rezé
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg" style={{ marginBottom: "4rem" }}>
          Des prestations de qualité adaptées à vos besoins
        </p>

        <div className="grid md:grid-cols-3" style={{ gap: "2rem" }}>
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--primary-blue)", marginBottom: "1.25rem" }}
              >
                {service.title}
              </h3>
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "1.5rem" }}
              >
                {service.price}
              </div>
              <p className="text-gray-600" style={{ marginBottom: "1.75rem", lineHeight: "1.7" }}>{service.description}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span style={{ color: "var(--orange)", marginRight: "0.75rem", fontSize: "1.25rem" }}>
                      ✓
                    </span>
                    <span style={{ lineHeight: "1.6" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
