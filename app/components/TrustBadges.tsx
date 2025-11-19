export default function TrustBadges() {
  const badges = [
    {
      icon: "⭐",
      title: "5/5 sur Google",
      subtitle: "Avis clients vérifiés",
    },
    {
      icon: "✓",
      title: "100% de clients satisfaits",
      subtitle: "Qualité garantie",
    },
    {
      icon: "🏆",
      title: "3 ans d'expérience",
      subtitle: "À votre service depuis 2022",
    },
    {
      icon: "🔒",
      title: "Intervenants qualifiés",
      subtitle: "Sélectionnés et formés",
    },
  ];

  return (
    <section
      className="section"
      style={{
        backgroundColor: "var(--light-blue)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  lineHeight: "1",
                }}
              >
                {badge.icon}
              </div>
              <h3
                className="text-lg md:text-xl font-bold"
                style={{
                  color: "var(--primary-blue)",
                  lineHeight: "1.3",
                }}
              >
                {badge.title}
              </h3>
              <p
                className="text-sm md:text-base text-gray-600"
                style={{
                  lineHeight: "1.4",
                }}
              >
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
