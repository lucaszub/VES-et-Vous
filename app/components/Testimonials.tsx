export default function Testimonials() {
  const testimonials = [
    {
      name: 'Martine D.',
      service: 'Ménage',
      text: 'Excellent service ! L\'intervenante est très professionnelle et fait un travail impeccable. Je recommande vivement.'
    },
    {
      name: 'Famille L.',
      service: 'Garde d\'enfants',
      text: 'Nos enfants sont ravis ! La personne qui s\'occupe d\'eux est bienveillante et attentive. Nous sommes sereins.'
    },
    {
      name: 'Sophie T.',
      service: 'Repassage',
      text: 'Un service de repassage impeccable ! Tout est parfaitement repassé et plié. Je gagne un temps précieux. Merci pour votre professionnalisme !'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-blue)' }}>
          Témoignages
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Ce que disent nos clients
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card" style={{ backgroundColor: '#E1F0F7' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--primary-blue)' }}>
                  {testimonial.name[0]}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.text}"</p>
              <div className="mt-4 text-[#FF7E36] text-xl">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
