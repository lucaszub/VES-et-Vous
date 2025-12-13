"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    service: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simuler l'envoi du formulaire
    console.log("Message envoyé:", formData);

    setShowSuccess(true);
    setFormData({ service: "", message: "" });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundColor: "#E1F0F7" }}
    >
      <div className="container max-w-2xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
        >
          Nous Contacter
        </h2>
        <p
          className="text-center text-gray-600 text-base md:text-lg"
          style={{ marginBottom: "2.5rem" }}
        >
          Une question ? Besoin d'un devis gratuit ?
        </p>

        {/* Section téléphone/SMS mise en avant */}
        <div
          className="card mb-8 text-center"
          style={{ backgroundColor: "var(--primary-blue)", color: "white" }}
        >
          <h3 className="text-2xl font-bold" style={{ marginBottom: "1rem" }}>
            Réponse Rapide par Téléphone
          </h3>
          <p className="text-3xl font-bold" style={{ marginBottom: "1.5rem" }}>
            <a href="tel:+33603163070" className="hover:underline">
              06.51.47.62.11
            </a>
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center"
            style={{ gap: "1.5rem", marginBottom: "1.5rem" }}
          >
            <a
              href="tel:+33603163070"
              className="btn"
              style={{ backgroundColor: "white", color: "var(--primary-blue)" }}
            >
              📞 Appelez maintenant
            </a>
            <a
              href="sms:+33603163070"
              className="btn"
              style={{ backgroundColor: "var(--orange)", color: "white" }}
            >
              💬 Envoyez un SMS
            </a>
          </div>
          <p className="text-sm opacity-90">Lun-Ven : 8h-17h | Devis gratuit</p>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Ou remplissez le formulaire ci-dessous
        </p>

        <form onSubmit={handleSubmit} className="card">
          <div className="mb-6">
            <label
              htmlFor="contact-service"
              className="block mb-2 font-semibold"
            >
              Service concerné *
            </label>
            <select
              id="contact-service"
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="form-select"
            >
              <option value="">Sélectionnez un service</option>
              <option value="ménage">Ménage à Domicile et Bureaux</option>
              <option value="garde">Garde d'Enfants</option>
              <option value="repassage">Repassage à Domicile</option>
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
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={6}
              className="form-input"
              placeholder="Décrivez votre demande..."
              style={{ height: "auto", minHeight: "150px" }}
            ></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button type="submit" className="btn btn-primary">
              ✉️ Envoyer le message
            </button>
          </div>

          {showSuccess && (
            <div className="success-message mt-4">
              Merci pour votre message ! Nous vous répondrons dans les plus
              brefs délais.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
