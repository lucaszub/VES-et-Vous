export default function AdvanceImmediate() {
  return (
    <section
      id="avance"
      className="section"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
        >
          Crédit d'Impôt 50% pour Vos Services à Domicile
        </h2>
        <p
          className="text-center text-gray-600 text-base md:text-lg"
          style={{ marginBottom: "3rem" }}
        >
          Avance immédiate URSSAF : bénéficiez de votre crédit d'impôt sans
          attendre !
        </p>

        {/* Qu'est-ce que l'avance immédiate */}
        <div
          className="card"
          style={{ backgroundColor: "#E1F0F7", marginBottom: "2rem" }}
        >
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1rem" }}
          >
            Qu'est-ce que l'avance immédiate ?
          </h3>
          <p className="text-lg" style={{ lineHeight: "1.8" }}>
            L'avance immédiate est un dispositif qui vous permet d'obtenir
            immédiatement le montant de la réduction d'impôt ou du crédit
            d'impôt auquel vous avez droit, sans attendre votre déclaration
            fiscale.
          </p>
        </div>

        {/* Avantages principaux */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
          >
            Avantages principaux
          </h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Obtenez jusqu'à 50% du montant de vos dépenses en aide à
                domicile
              </span>
            </li>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Paiement direct par l'URSSAF sans avance de frais
              </span>
            </li>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Simplification administrative
              </span>
            </li>
          </ul>
        </div>

        {/* Conditions d'éligibilité */}
        <div
          className="card"
          style={{ backgroundColor: "#E1F0F7", marginBottom: "2rem" }}
        >
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
          >
            Conditions d'éligibilité
          </h3>
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "8px",
              marginBottom: "1.5rem",
              borderLeft: "4px solid var(--orange)",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "var(--primary-blue)",
              }}
            >
              Je me propose de tout mettre en place pour vous de l'inscription à
              la déclaration
            </p>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Être particulier employeur déclaré à l'URSSAF
              </span>
            </li>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Utiliser des services éligibles (ménage, garde d'enfants, etc.)
              </span>
            </li>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Respecter les plafonds annuels de dépenses
              </span>
            </li>
            <li className="flex items-start">
              <span
                style={{
                  color: "var(--orange)",
                  marginRight: "0.75rem",
                  fontSize: "1.25rem",
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: "1.125rem" }}>
                Avoir un compte bancaire enregistré auprès de l'URSSAF
              </span>
            </li>
          </ul>
        </div>

        {/* Comment ça fonctionne */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3
            className="text-2xl font-bold text-center"
            style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}
          >
            Comment ça fonctionne ?
          </h3>

          <div className="grid md:grid-cols-3" style={{ gap: "2rem" }}>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "1rem" }}
              >
                1
              </div>
              <h4
                className="font-bold text-xl"
                style={{
                  color: "var(--primary-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                Déclaration
              </h4>
              <p style={{ fontSize: "1rem" }}>
                Déclarez vos heures travaillées chaque mois via le compte URSSAF
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "1rem" }}
              >
                2
              </div>
              <h4
                className="font-bold text-xl"
                style={{
                  color: "var(--primary-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                Calcul
              </h4>
              <p style={{ fontSize: "1rem" }}>
                L'URSSAF calcule automatiquement votre avantage fiscal
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "1rem" }}
              >
                3
              </div>
              <h4
                className="font-bold text-xl"
                style={{
                  color: "var(--primary-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                Paiement
              </h4>
              <p style={{ fontSize: "1rem" }}>
                Le montant est versé directement sur votre compte sous 48h
              </p>
            </div>
          </div>
        </div>

        {/* Plafonds et Taux */}
        <div className="grid md:grid-cols-2" style={{ gap: "2rem" }}>
          {/* Plafonds 2023 */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <h3
              className="text-xl font-bold text-center"
              style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
            >
              Plafonds 2023
            </h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <li
                className="flex justify-between items-center"
                style={{
                  padding: "0.75rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontWeight: "600" }}>Ménage/Repassage</span>
                <span
                  style={{
                    color: "var(--orange)",
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                  }}
                >
                  12 000€/an
                </span>
              </li>
              <li
                className="flex justify-between items-center"
                style={{
                  padding: "0.75rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontWeight: "600" }}>Garde d'enfants</span>
                <span
                  style={{
                    color: "var(--orange)",
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                  }}
                >
                  15 000€/an
                </span>
              </li>
            </ul>
          </div>

          {/* Taux de remboursement */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <h3
              className="text-xl font-bold text-center"
              style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
            >
              Taux de remboursement
            </h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <li
                className="flex justify-between items-center"
                style={{
                  padding: "0.75rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontWeight: "600" }}>Ménage</span>
                <span
                  style={{
                    color: "var(--orange)",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  50%
                </span>
              </li>
              <li
                className="flex justify-between items-center"
                style={{
                  padding: "0.75rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontWeight: "600" }}>Garde d'enfants</span>
                <span
                  style={{
                    color: "var(--orange)",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  50%
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
