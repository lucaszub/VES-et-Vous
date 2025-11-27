import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ backgroundColor: "#E1F0F7" }}
    >
      <div className="container">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
        >
          Qui Sommes-Nous ?
        </h2>
        <p
          className="text-center text-gray-600 text-base md:text-lg"
          style={{ marginBottom: "4rem" }}
        >
          Agence de services d'aide à domicile à Rezé et alentours
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
            >
              Sandra, votre interlocutrice privilégiée
            </h3>
            <p
              className="text-lg"
              style={{ marginBottom: "1.5rem", lineHeight: "1.8" }}
            >
              Issue du secteur de la restauration haut de gamme où j'ai exercé
              en tant que Maître d'Hôtel, j'ai toujours évolué dans des
              environnements où l'excellence du service et l'attention aux
              détails sont primordiales.
            </p>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.7" }}>
              <strong>
                La propreté et la rigueur ont toujours été au cœur de mon
                métier.
              </strong>{" "}
              Dans la restauration, chaque détail compte : une table impeccable,
              un service irréprochable, un environnement sans faille. Ces
              exigences, je les applique aujourd'hui à VES et Vous.
            </p>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.7" }}>
              C'est cette expertise et cette passion pour le travail bien fait
              qui m'ont conduite à créer VES et Vous. Mon objectif est simple :
              offrir à votre domicile le même niveau de qualité et de soin que
              celui que j'ai toujours apporté dans mes précédents métiers.
            </p>
            <p style={{ marginBottom: "2.5rem", lineHeight: "1.7" }}>
              Pour moi, <strong>la transparence et la clarté</strong> sont
              essentielles. Vous méritez de savoir exactement qui intervient
              chez vous, comment nous travaillons, et ce que vous pouvez
              attendre de nos services.
            </p>
            <div
              className="p-4 bg-white rounded-lg"
              style={{ borderLeft: "4px solid var(--orange)" }}
            >
              <p
                className="font-semibold text-lg"
                style={{ marginBottom: "1.5rem", color: "var(--primary-blue)" }}
              >
                Mes engagements envers vous :
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li className="flex items-start">
                  <span
                    className="mr-2"
                    style={{ color: "var(--orange)", fontSize: "1.25rem" }}
                  >
                    ✓
                  </span>
                  <span>
                    Personnel rigoureusement sélectionné et formé aux standards
                    de qualité
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-2"
                    style={{ color: "var(--orange)", fontSize: "1.25rem" }}
                  >
                    ✓
                  </span>
                  <span>
                    Relation de confiance basée sur la transparence et la
                    proximité
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-2"
                    style={{ color: "var(--orange)", fontSize: "1.25rem" }}
                  >
                    ✓
                  </span>
                  <span>
                    Même exigence de propreté que dans la restauration haut de
                    gamme
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-2"
                    style={{ color: "var(--orange)", fontSize: "1.25rem" }}
                  >
                    ✓
                  </span>
                  <span>Agrément qualité Services à la Personne</span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-2"
                    style={{ color: "var(--orange)", fontSize: "1.25rem" }}
                  >
                    ✓
                  </span>
                  <span>
                    Accompagnement complet : de l'inscription URSSAF au crédit
                    d'impôt 50%
                  </span>
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
