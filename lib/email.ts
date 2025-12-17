import emailjs from "@emailjs/browser";

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;

export type EmailPayload = Record<string, string>;

export async function sendEmail(templateParams: EmailPayload) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS n'est pas configuré. Vérifiez EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID et EMAILJS_PUBLIC_KEY."
    );
  }

  return emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
