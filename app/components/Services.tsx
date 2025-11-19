export default function Services() {
  const services = [
    {
      title: 'Ménage Complet',
      price: '25€/heure',
      description: 'Nettoyage approfondi de votre domicile',
      features: [
        'Nettoyage de toutes les pièces',
        'Repassage inclus',
        'Produits d\'entretien fournis',
        'Personnel qualifié et de confiance'
      ]
    },
    {
      title: 'Garde d\'Enfants',
      price: '25€/heure',
      description: 'Accompagnement bienveillant de vos enfants',
      features: [
        'Sortie d\'école et activités',
        'Baby-sitting pour enfants de 3 ans et plus',
        'Aide aux devoirs',
        'Personnel expérimenté et sécurisé'
      ]
    },
    {
      title: 'Repassage à Domicile',
      price: '25€/heure',
      description: 'Service de repassage professionnel chez vous',
      features: [
        'Repassage soigné de tous vos vêtements',
        'Pliage et rangement inclus',
        'Matériel professionnel fourni',
        'Gain de temps précieux'
      ]
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-blue)' }}>
          Nos Services
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          Des prestations de qualité adaptées à vos besoins
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
                {service.title}
              </h3>
              <div className="text-3xl font-bold mb-4" style={{ color: 'var(--orange)' }}>
                {service.price}
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2" style={{ color: 'var(--orange)' }}>✓</span>
                    <span>{feature}</span>
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
