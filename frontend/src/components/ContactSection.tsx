import React, { useState } from 'react';
import { Phone, Mail, Send, Loader2 } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';

interface ContactForm {
  name: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const message = encodeURIComponent(
      `Hello N.B. Farm! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/919978510084?text=${message}`, '_blank');
    setTimeout(() => {
      setSending(false);
      setForm({ name: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-handwritten text-terracotta text-xl">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-mud mt-1 section-heading">
            Contact & Orders
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a question or ready to order? We're just a message away!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919978510084?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order%20from%20N.B.%20Farm."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-offwhite-cream rounded-2xl border border-border shadow-card hover:shadow-farm transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#25D366]" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">WhatsApp Order</p>
                <p className="font-serif font-bold text-mud text-lg group-hover:text-terracotta transition-colors">
                  +91 99785 10084
                </p>
                <p className="font-body text-xs text-muted-foreground">Tap to open WhatsApp chat</p>
              </div>
            </a>

            {/* Call */}
            <div className="p-5 bg-offwhite-cream rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 rounded-full bg-leaf/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-leaf" />
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Call Us</p>
              </div>
              <div className="flex flex-col gap-2 pl-1">
                <a
                  href="tel:+919978510084"
                  className="flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-leaf flex-shrink-0" />
                  <span className="font-serif font-bold text-mud text-base group-hover:text-terracotta transition-colors">
                    +91 99785 10084
                  </span>
                </a>
                <a
                  href="tel:+919375310987"
                  className="flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-leaf flex-shrink-0" />
                  <span className="font-serif font-bold text-mud text-base group-hover:text-terracotta transition-colors">
                    +91 93753 10987
                  </span>
                </a>
                <p className="font-body text-xs text-muted-foreground mt-1">Available 7 AM – 8 PM</p>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:purvang2006@gmail.com"
              className="flex items-center gap-4 p-5 bg-offwhite-cream rounded-2xl border border-border shadow-card hover:shadow-farm transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-turmeric/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-mud" />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                <p className="font-serif font-bold text-mud text-base group-hover:text-terracotta transition-colors break-all">
                  purvang2006@gmail.com
                </p>
                <p className="font-body text-xs text-muted-foreground">We reply within 24 hours</p>
              </div>
            </a>

            {/* Social */}
            <div className="p-5 bg-offwhite-cream rounded-2xl border border-border shadow-card">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow N.B. Farm on Instagram"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xs"
                >
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow N.B. Farm on Facebook"
                  className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-xs"
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick inquiry form */}
          <div className="bg-offwhite-cream painted-border rounded-2xl p-6 sm:p-8 shadow-farm">
            <h3 className="font-serif text-2xl font-bold text-mud mb-6">Quick Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block font-body font-semibold text-mud mb-1.5 text-sm">
                  Your Name <span className="text-terracotta">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Enter your name"
                  className="w-full py-3 px-4 border-2 border-border rounded-xl font-body text-foreground bg-offwhite-cream focus:outline-none focus:border-turmeric placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block font-body font-semibold text-mud mb-1.5 text-sm">
                  Phone / WhatsApp <span className="text-terracotta">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Your mobile number"
                  className="w-full py-3 px-4 border-2 border-border rounded-xl font-body text-foreground bg-offwhite-cream focus:outline-none focus:border-turmeric placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-body font-semibold text-mud mb-1.5 text-sm">
                  Message <span className="text-terracotta">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us what you need..."
                  className="w-full py-3 px-4 border-2 border-border rounded-xl font-body text-foreground bg-offwhite-cream focus:outline-none focus:border-turmeric placeholder:text-muted-foreground resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 px-6 rounded-full btn-whatsapp font-body font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {sending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
