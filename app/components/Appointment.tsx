"use client";

import { useState, FormEvent } from "react";
import { sendEmail } from "@/lib/email";

export default function Appointment() {
  const [formData, setFormData] = useState({
    service: "",
    créneau: "",
    date: "",
    email: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      await sendEmail({
        type: "appointment",
        service: formData.service,
        creneau: formData.créneau,
        date: formData.date,
        email: formData.email,
        reply_to: formData.email,
      });

      setStatus("success");
      setFormData({ service: "", créneau: "", date: "", email: "" });
    } catch (error) {
      console.error("Erreur EmailJS (rendez-vous):", error);
      setErrorMessage(
        "Une erreur est survenue lors de l'envoi. Merci de réessayer dans un instant.",
      );
      setStatus("error");
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="rdv"
      className="section"
      style={{ backgroundColor: "#E1F0F7" }}
    >
      <div className="container max-w-2xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--primary-blue)", marginBottom: "1.5rem" }}
        >
          Prendre Rendez-vous
        </h2>
        <p
          className="text-center text-gray-600 text-base md:text-lg"
          style={{ marginBottom: "3rem" }}
        >
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
              <option value="ménage">Ménage à Domicile et Bureaux</option>
              <option value="garde">Garde d'Enfants à Domicile</option>
              <option value="repassage">Repassage à Domicile</option>
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

          <div className="mb-6">
            <label
              htmlFor="appointment-email"
              className="block mb-2 font-semibold"
            >
              Votre email *
            </label>
            <input
              type="email"
              id="appointment-email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="vous@example.com"
              className="form-input"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi..." : "Demander un rendez-vous"}
            </button>
          </div>

          {status === "success" && (
            <div className="success-message mt-4">
              Merci ! Votre demande a bien été enregistrée. Nous vous
              recontacterons très prochainement.
            </div>
          )}

          {status === "error" && (
            <div className="error-message mt-4" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
