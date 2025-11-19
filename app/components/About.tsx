import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#E1F0F7' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-blue)' }}>
          Qui Sommes-Nous ?
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          Agence de services d'aide à domicile à Rezé et alentours
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-blue)' }}>
              Sandra, votre interlocutrice privilégiée
            </h3>
            <p className="mb-4 text-lg">
              Ancienne Maître d'Hôtel, j'ai créé VES et Vous pour apporter des services de qualité à domicile
              sur Rezé, Bouguenais, Bouaye, La Montagne et Saint-Jean-de-Boiseau.
            </p>
            <p className="mb-4">
              Fort de mon expérience dans le service haut de gamme, j'ai à cœur de sélectionner uniquement
              des intervenants qualifiés, fiables et bienveillants.
            </p>
            <p className="mb-4">
              Notre objectif : créer une relation de confiance durable avec nos clients et leur apporter
              sérénité et tranquillité d'esprit.
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="font-semibold mb-2">Nos engagements :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--orange)' }}>✓</span>
                  Personnel sélectionné et qualifié
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--orange)' }}>✓</span>
                  Relation de confiance et proximité
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--orange)' }}>✓</span>
                  Agrément qualité SAP
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--orange)' }}>✓</span>
                  Crédit d'impôt 50% - Avance immédiate URSSAF
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Service à domicile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
