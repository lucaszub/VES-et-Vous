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
          style={{ color: "var(--primary-blue)", marginBottom: "1rem" }}
        >
          Les Aides Financières
        </h2>
        <p
          className="text-center text-gray-600 text-base md:text-lg"
          style={{ marginBottom: "3rem" }}
        >
          Bénéficiez de 50% de crédit d'impôt sur vos prestations à domicile
        </p>

        {/* 50% de crédit d'impôt - Mise en avant */}
        <div
          className="card"
          style={{
            backgroundColor: "var(--light-blue)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "var(--orange)",
              marginBottom: "0.5rem",
            }}
          >
            50%
          </div>
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1rem" }}
          >
            de crédit d'impôt
          </h3>
          <p className="text-lg" style={{ lineHeight: "1.6" }}>
            Faire appel à VES et Vous permet de bénéficier d'un avantage fiscal
            égal à 50% des dépenses engagées dans l'année au titre des services
            à la personne.
          </p>
        </div>

        {/* Conditions d'éligibilité */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
          >
            Qui peut en bénéficier ?
          </h3>
          <p
            className="text-lg"
            style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}
          >
            Tous les particuliers peuvent prétendre au crédit d'impôt à
            condition de :
          </p>
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
                Être fiscalement domicilié en France
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
                Être le bénéficiaire et le payeur des prestations
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
                Que la prestation se déroule dans votre résidence personnelle
                (principale ou secondaire)
              </span>
            </li>
          </ul>
        </div>

        {/* Avance immédiate */}
        <div
          className="card"
          style={{ backgroundColor: "#E1F0F7", marginBottom: "2rem" }}
        >
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1rem" }}
          >
            Avance Immédiate : Payez moitié prix !
          </h3>
          <p className="text-lg" style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
            Grâce au dispositif d'avance immédiate, payez seulement 50% de votre
            facture. Le reste est pris en charge immédiatement par l'État.
          </p>
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "8px",
              borderLeft: "4px solid var(--orange)",
            }}
          >
            <p
              className="text-lg"
              style={{
                fontWeight: "600",
                color: "var(--primary-blue)",
                marginBottom: "0.5rem",
              }}
            >
              Exemple concret :
            </p>
            <p style={{ fontSize: "1.125rem" }}>
              Facture de 246€ → Vous payez 123€
            </p>
          </div>
        </div>

        {/* Comment ça marche */}
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
          >
            Comment ça marche ?
          </h3>
          <p className="text-lg" style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>
            VES et Vous gère l'emploi et les déclarations de nos intervenants.
            De votre côté, une simple inscription à l'URSSAF suffit pour profiter
            de l'avance immédiate.
          </p>
          <div className="grid md:grid-cols-4" style={{ gap: "1.5rem" }}>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "0.5rem" }}
              >
                1
              </div>
              <p style={{ fontSize: "1rem", fontWeight: "600" }}>
                Inscrivez-vous à l'URSSAF
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "0.5rem" }}
              >
                2
              </div>
              <p style={{ fontSize: "1rem", fontWeight: "600" }}>
                Profitez du service
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "0.5rem" }}
              >
                3
              </div>
              <p style={{ fontSize: "1rem", fontWeight: "600" }}>
                Validez la facture
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{ color: "var(--orange)", marginBottom: "0.5rem" }}
              >
                4
              </div>
              <p style={{ fontSize: "1rem", fontWeight: "600" }}>
                Bénéficiez du crédit d'impôt
              </p>
            </div>
          </div>
        </div>

        {/* Plafonds 2025 */}
        <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
          <h3
            className="text-xl font-bold text-center"
            style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
          >
            Plafonds annuels 2025
          </h3>
          <div className="grid md:grid-cols-2" style={{ gap: "1.5rem" }}>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                Ménage & Repassage
              </p>
              <p
                style={{
                  color: "var(--orange)",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                12 000€
              </p>
            </div>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                Garde d'enfants
              </p>
              <p
                style={{
                  color: "var(--orange)",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                15 000€
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
