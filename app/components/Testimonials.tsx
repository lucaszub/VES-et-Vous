export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
        >
          Ils Nous Font Confiance
        </h2>
        <p
          className="text-center text-gray-600 text-base md:text-lg"
          style={{ marginBottom: "4rem" }}
        >
          Ce que disent nos clients de Rezé, Bouguenais et alentours
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Avis La boutique du coin */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <div className="flex items-start" style={{ marginBottom: "1rem" }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                L
              </div>
              <div style={{ marginLeft: "1rem", flex: 1 }}>
                <h4
                  className="font-bold text-lg"
                  style={{ marginBottom: "0.25rem" }}
                >
                  La boutique du coin
                </h4>
                <p
                  className="text-sm text-gray-600"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Avis Google · 2 avis · il y a 5 jours · Nouveau
                </p>
                <div
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                    color: "var(--orange)",
                  }}
                >
                  ★★★★★
                </div>
              </div>
            </div>
            <p
              className="text-gray-700"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              "Nous travaillons avec Sandra depuis plus d'un an et en sommes
              ravis. Compétente, efficace et très méticuleuse. Nous la
              recommandons vivement. Visité en décembre 2025."
            </p>
          </div>

          {/* Avis Nathalie Del Pino */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <div className="flex items-start" style={{ marginBottom: "1rem" }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                N
              </div>
              <div style={{ marginLeft: "1rem", flex: 1 }}>
                <h4
                  className="font-bold text-lg"
                  style={{ marginBottom: "0.25rem" }}
                >
                  Nathalie Del Pino
                </h4>
                <p
                  className="text-sm text-gray-600"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Avis Google · 6 avis · il y a 2 semaines · Nouveau
                </p>
                <div
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                    color: "var(--orange)",
                  }}
                >
                  ★★★★★
                </div>
              </div>
            </div>
            <p
              className="text-gray-700"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              "Sandra est très professionnelle et très impliquée dans son
              travail. Nous sommes enchantés des prestations effectuées. Vous
              pouvez lui faire confiance à 200 %. Visité — 5 sur 5."
            </p>
          </div>

          {/* Avis Anita Regragui */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <div className="flex items-start" style={{ marginBottom: "1rem" }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                A
              </div>
              <div style={{ marginLeft: "1rem", flex: 1 }}>
                <h4
                  className="font-bold text-lg"
                  style={{ marginBottom: "0.25rem" }}
                >
                  Anita Regragui
                </h4>
                <p
                  className="text-sm text-gray-600"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Avis Google · il y a 20 heures · Nouveau
                </p>
                <div
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                    color: "var(--orange)",
                  }}
                >
                  ★★★★★
                </div>
              </div>
            </div>
            <p
              className="text-gray-700"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              "Fraîchement arrivés sur le secteur, on nous a recommandé
              VESETVOUS pour l'entretien quotidien de notre maison. En plus
              d'être sympathique, Sandra fait un travail soigné et minutieux et
              quelle bonne idée ce crédit d'impôt direct !! Un service et un
              accompagnement au top. Je recommande 👍"
            </p>
          </div>

          {/* Avis Nathalie Zubiarrain */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <div className="flex items-start" style={{ marginBottom: "1rem" }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                N
              </div>
              <div style={{ marginLeft: "1rem", flex: 1 }}>
                <h4
                  className="font-bold text-lg"
                  style={{ marginBottom: "0.25rem" }}
                >
                  Nathalie Zubiarrain
                </h4>
                <p
                  className="text-sm text-gray-600"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Avis Google · il y a 4 jours
                </p>
                <div
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                    color: "var(--orange)",
                  }}
                >
                  ★★★★★
                </div>
              </div>
            </div>
            <p
              className="text-gray-700"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              "Sandra est une personne très serviable, elle travaille pour
              embellir notre maison depuis plusieurs années et nous espérons le
              plus longtemps possible car nous n'avons rien à lui reprocher."
            </p>
          </div>

          {/* Avis Ecosia24 */}
          <div className="card" style={{ backgroundColor: "#E1F0F7" }}>
            <div className="flex items-start" style={{ marginBottom: "1rem" }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                E
              </div>
              <div style={{ marginLeft: "1rem", flex: 1 }}>
                <h4
                  className="font-bold text-lg"
                  style={{ marginBottom: "0.25rem" }}
                >
                  Ecosia24
                </h4>
                <p
                  className="text-sm text-gray-600"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Avis Google · 1 avis · il y a 4 mois
                </p>
                <div
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                    color: "var(--orange)",
                  }}
                >
                  ★★★★★
                </div>
              </div>
            </div>
            <p
              className="text-gray-700"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              "Une prestation soignée et un résultat impeccable. Le weekend
              commence toujours bien lorsque Sandra est passée chez nous. La
              sympathie en plus d'un service très professionnel. Merci !"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
