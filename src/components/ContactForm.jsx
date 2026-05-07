import { Send } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { contactDetails } from '../data/profile.js';

const RECIPIENT_EMAIL = 'rishabh@tnbg.co.in';

const initialForm = {
  name: '',
  phone: '',
  message: '',
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`,
    );

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
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
              Phone
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="field-input"
                placeholder="+91 98765 43210"
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

          <button type="submit" className="btn-primary mt-6 w-full justify-center">
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;