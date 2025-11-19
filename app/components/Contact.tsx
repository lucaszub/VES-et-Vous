'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simuler l'envoi du formulaire
    console.log('Message envoyé:', formData);

    setShowSuccess(true);
    setFormData({ service: '', message: '' });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#E1F0F7' }}>
      <div className="container max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: 'var(--primary-blue)' }}>
          Nous Contacter
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Une question ? N'hésitez pas à nous envoyer un message
        </p>

        <form onSubmit={handleSubmit} className="card">
          <div className="mb-6">
            <label htmlFor="contact-service" className="block mb-2 font-semibold">
              Service concerné *
            </label>
            <select
              id="contact-service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="form-select"
            >
              <option value="">Sélectionnez un service</option>
              <option value="ménage">Ménage Complet</option>
              <option value="garde">Garde d'Enfants</option>
              <option value="senior">Accompagnement Senior</option>
              <option value="autre">Autre question</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Votre message *
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="form-input"
              placeholder="Décrivez votre demande..."
              style={{ height: 'auto', minHeight: '150px' }}
            ></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </div>

          {showSuccess && (
            <div className="success-message mt-4">
              Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
