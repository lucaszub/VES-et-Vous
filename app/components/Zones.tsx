export default function Zones() {
  const zones = [
    {
      ville: 'Rezé',
      services: 'Services ménagers, garde d\'enfants, repassage'
    },
    {
      ville: 'Bouguenais',
      services: 'Aide à domicile et nettoyage bureaux'
    },
    {
      ville: 'La Montagne',
      services: 'Tous services à domicile'
    },
    {
      ville: 'Bouaye',
      services: 'Ménage et garde d\'enfants'
    },
    {
      ville: 'Saint-Jean-de-Boiseau',
      services: 'Services complets à domicile'
    }
  ];

  return (
    <section id="zones" className="section" style={{ backgroundColor: 'var(--light-blue)' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
          Nous Intervenons Dans Votre Commune
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg" style={{ marginBottom: '4rem' }}>
          Services d'aide à domicile de qualité dans 5 communes de Loire-Atlantique
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              style={{ padding: '2rem' }}
            >
              <div className="flex items-start">
                <span className="text-3xl" style={{ color: 'var(--orange)', marginRight: '1rem' }}>📍</span>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
                    {zone.ville}
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '1rem' }}>{zone.services}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '4rem' }}>
          <p className="text-gray-700" style={{ fontSize: '1.125rem' }}>
            <strong>Zone de couverture :</strong> Rezé, Bouguenais, Bouaye, La Montagne, Saint-Jean-de-Boiseau et communes limitrophes
          </p>
        </div>
      </div>
    </section>
  );
}
