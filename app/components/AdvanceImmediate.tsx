export default function AdvanceImmediate() {
  return (
    <section id="avance" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-blue)' }}>
          Avance Immédiate URSSAF
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Bénéficiez de votre crédit d'impôt sans attendre !
        </p>

        <div>
          <div className="card mb-8" style={{ backgroundColor: '#E1F0F7' }}>
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--primary-blue)' }}>
              Comment ça marche ?
            </h3>
            <p className="mb-6 text-lg text-center">
              Avec le dispositif d'avance immédiate, vous ne payez que 50% du coût de vos services à domicile.
              L'URSSAF vous verse directement les 50% restants sous forme de crédit d'impôt, sans attendre votre déclaration annuelle.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--orange)' }}>1</div>
                <h4 className="font-bold mb-2">Déclaration</h4>
                <p className="text-sm">Nous déclarons vos heures à l'URSSAF</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--orange)' }}>2</div>
                <h4 className="font-bold mb-2">Calcul automatique</h4>
                <p className="text-sm">L'URSSAF calcule votre crédit d'impôt</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--orange)' }}>3</div>
                <h4 className="font-bold mb-2">Versement rapide</h4>
                <p className="text-sm">Vous recevez 50% sous 48h</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--primary-blue)' }}>
              Plafonds annuels 2023
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold">Ménage</span>
                <span style={{ color: 'var(--orange)' }} className="font-bold">12 000€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold">Garde d'enfants</span>
                <span style={{ color: 'var(--orange)' }} className="font-bold">15 000€</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-semibold">Accompagnement senior / handicap</span>
                <span style={{ color: 'var(--orange)' }} className="font-bold">20 000€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
