"use client";

import { useState, FormEvent } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    service: "",
    créneau: "",
    date: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simuler l'envoi du formulaire
    console.log("Rendez-vous demandé:", formData);

    setShowSuccess(true);
    setFormData({ service: "", créneau: "", date: "" });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section
      id="rdv"
      className="section"
      style={{ backgroundColor: "#E1F0F7" }}
    >
      <div className="container max-w-2xl">
        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "var(--primary-blue)" }}
        >
          Prendre Rendez-vous
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Remplissez le formulaire ci-dessous et nous vous recontacterons dans
          les plus brefs délais
        </p>

        <form onSubmit={handleSubmit} className="card">
          <div className="mb-6">
            <label htmlFor="service" className="block mb-2 font-semibold">
              Service souhaité *
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="form-select"
            >
              <option value="">Sélectionnez un service</option>
              <option value="ménage">Ménage Complet</option>
              <option value="garde">Garde d'Enfants</option>
              <option value="senior">Accompagnement Senior</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="créneau" className="block mb-2 font-semibold">
              Créneau horaire *
            </label>
            <select
              id="créneau"
              required
              value={formData.créneau}
              onChange={(e) =>
                setFormData({ ...formData, créneau: e.target.value })
              }
              className="form-select"
            >
              <option value="">Sélectionnez un créneau</option>
              <option value="matin">Matin (9h-12h)</option>
              <option value="apres-midi">Après-midi (14h-18h)</option>
              <option value="soir">Soirée (18h-21h)</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="date" className="block mb-2 font-semibold">
              Date souhaitée *
            </label>
            <input
              type="text"
              id="date"
              required
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              placeholder="JJ/MM/AAAA"
              pattern="\d{2}/\d{2}/\d{4}"
              className="form-input"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button type="submit" className="btn btn-primary">
              Demander un rendez-vous
            </button>
          </div>

          {showSuccess && (
            <div className="success-message mt-4">
              Merci ! Votre demande a bien été enregistrée. Nous vous
              recontacterons très prochainement.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
