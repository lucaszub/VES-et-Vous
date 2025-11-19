export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
          Témoignages
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg" style={{ marginBottom: '4rem' }}>
          Ce que disent nos clients de Rezé, Bouguenais et alentours
        </p>

        <div className="flex justify-center">
          <div className="card" style={{ backgroundColor: '#E1F0F7', maxWidth: '650px', width: '100%' }}>
            <div className="flex items-start" style={{ marginBottom: '1rem' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: 'var(--primary-blue)' }}>
                E
              </div>
              <div style={{ marginLeft: '1rem', flex: 1 }}>
                <h4 className="font-bold text-lg" style={{ marginBottom: '0.25rem' }}>Ecosia24</h4>
                <p className="text-sm text-gray-600" style={{ marginBottom: '0.5rem' }}>1 avis · il y a 2 mois</p>
                <div className="text-[#FF7E36]" style={{ fontSize: '1.5rem', letterSpacing: '2px' }}>
                  ★★★★★★
                </div>
              </div>
            </div>
            <p className="text-gray-700" style={{ fontSize: '1.125rem', lineHeight: '1.8', fontStyle: 'italic' }}>
              "Une prestation soignée et un résultat impeccable. Le weekend commence toujours bien lorsque Sandra est passée chez nous. La sympathie en plus d'un service très professionnel. Merci !"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
