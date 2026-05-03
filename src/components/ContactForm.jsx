import emailjs from '@emailjs/browser';
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { contactDetails, profile } from '../data/profile.js';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please email rishabh@tnbg.co.in directly.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey },
      );

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Thank you. Your message has been sent successfully.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error?.text || 'Unable to send the message right now. Please try again or email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Discuss a project, issue, or consulting requirement."
            description="Share the context and preferred next step. Rishabh can support automation, instrumentation, robotics, troubleshooting, and technical project work."
          />

          <div className="mt-8 grid gap-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-950">{detail.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{detail.value}</span>
                  </span>
                </>
              );

              return detail.href ? (
                <a key={detail.label} href={detail.href} className="contact-row">
                  {content}
                </a>
              ) : (
                <div key={detail.label} className="contact-row">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
          <div className="grid gap-5">
            <label className="field-label">
              Name
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="Your name"
              />
            </label>

            <label className="field-label">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="you@example.com"
              />
            </label>

            <label className="field-label">
              Message
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input min-h-40 resize-y"
                placeholder="Tell me about your requirement"
              />
            </label>
          </div>

          {status.message && (
            <div
              className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}
              role="status"
            >
              {status.message}
            </div>
          )}

          <button type="submit" className="btn-primary mt-6 w-full justify-center" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
