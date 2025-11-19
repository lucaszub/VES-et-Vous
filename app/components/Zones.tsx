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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-blue)' }}>
          Nous Intervenons Dans Votre Commune
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          Services d'aide à domicile de qualité dans 5 communes de Loire-Atlantique
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-3" style={{ color: 'var(--orange)' }}>📍</span>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
                    {zone.ville}
                  </h3>
                  <p className="text-gray-600 text-sm">{zone.services}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700">
            <strong>Zone de couverture :</strong> Rezé, Bouguenais, Bouaye, La Montagne, Saint-Jean-de-Boiseau et communes limitrophes
          </p>
        </div>
      </div>
    </section>
  );
}
