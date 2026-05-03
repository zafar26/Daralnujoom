import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';

const FAQ = [
  { q: 'What is the minimum order quantity?', a: 'We accept orders from as few as 10 pieces for most uniform types. For bulk pricing benefits, 50+ pieces is recommended.' },
  { q: 'How long does a bulk order take?', a: 'Delivery time depends on quantity. 50–100 pieces: 7–10 days. 100–500 pieces: 2–3 weeks. 500+ pieces: discussed on order.' },
  { q: 'Can I bring my own fabric?', a: 'Absolutely! We accept client-supplied fabric for all types of garments — uniforms, party wear, and more.' },
  { q: 'Do you do custom logo embroidery?', a: 'Yes. We offer embroidery, screen printing, and badge stitching for institutional branding on all uniform types.' },
  { q: 'What are your payment terms?', a: 'We typically require 50% advance and 50% on delivery. For large orders, flexible payment plans are available.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Dar Al Nujoom!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/92XXXXXXXXXX?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    color: 'var(--cream)',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    padding: '14px 18px',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '10px',
    letterSpacing: '2px',
    color: 'var(--gold)',
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: '8px',
  };

  return (
    <>
      <NextSeo
        title="Contact Us | Get a Free Quote — Dar Al Nujoom Textiles & Tailoring"
        description="Contact Dar Al Nujoom for a free quote on school uniforms, restaurant uniforms, party wear, or bulk stitching orders. Call, WhatsApp, or fill our form."
        canonical="https://www.daralnujoomtextiles.com/contact"
      />
      <Layout>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #050D1A 0%, #0A1628 60%, #0F2040 100%)',
          padding: '160px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="geo-pattern" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="section-label">Reach Out</div>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: 'var(--cream)',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                Let's Talk <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Tailoring</span>
              </h1>
              <div className="gold-line" />
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.8 }}>
                Get a free quote in minutes. We respond within 2 hours on WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="section" style={{ background: 'var(--navy)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.6fr',
              gap: '48px',
              alignItems: 'start',
            }} className="contact-grid">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="section-label">Our Info</div>
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '36px',
                  color: 'var(--cream)',
                  fontWeight: 600,
                  marginBottom: '32px',
                }}>
                  Visit or Call Us<br />
                  <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Anytime</span>
                </h2>

                {[
                  { icon: '📍', title: 'Location', lines: ['Shop Address', 'City, Pakistan'] },
                  { icon: '📞', title: 'Phone / WhatsApp', lines: ['+92-XXX-XXXXXXX', 'Available 9AM – 9PM'] },
                  { icon: '✉️', title: 'Email', lines: ['info@daralnujoom.com', 'orders@daralnujoom.com'] },
                  { icon: '⏰', title: 'Working Hours', lines: ['Mon – Sat: 9AM – 9PM', 'Sunday: 10AM – 6PM'] },
                ].map((info) => (
                  <div key={info.title} style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '24px',
                    border: '1px solid var(--border)',
                    marginBottom: '16px',
                    background: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.3s ease',
                  }} className="info-card">
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>
                        {info.title}
                      </div>
                      {info.lines.map((line) => (
                        <div key={line} style={{ color: 'var(--cream)', fontSize: '15px', lineHeight: 1.6 }}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/92XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    background: '#25D366',
                    padding: '20px 28px',
                    textDecoration: 'none',
                    marginTop: '8px',
                    transition: 'opacity 0.3s',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div>
                    <div style={{ color: 'white', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', fontFamily: 'Montserrat, sans-serif' }}>
                      Chat on WhatsApp
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
                      Fastest way to get a quote
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  padding: '48px 40px',
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', color: 'var(--gold)', marginBottom: '12px' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>
                      Your request was forwarded via WhatsApp. We'll get back to you within 2 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="section-label" style={{ marginBottom: '8px' }}>Free Quote</div>
                    <h2 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '32px',
                      color: 'var(--cream)',
                      fontWeight: 600,
                      marginBottom: '32px',
                    }}>
                      Tell Us About Your Order
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                          <label style={labelStyle}>Your Name *</label>
                          <input
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Phone / WhatsApp *</label>
                          <input
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+92-XXX-XXXXXXX"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={labelStyle}>Email Address</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={labelStyle}>Service Needed *</label>
                        <select
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                        >
                          <option value="">Select a service...</option>
                          <option>School Uniforms</option>
                          <option>Restaurant Uniforms</option>
                          <option>Petrol Pump Uniforms</option>
                          <option>Hotel / Corporate Uniforms</option>
                          <option>Party Wear</option>
                          <option>Bulk Order (Custom)</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div style={{ marginBottom: '32px' }}>
                        <label style={labelStyle}>Your Message / Order Details *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us: quantity, sizes, colors, any special requirements..."
                          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '18px' }}
                      >
                        <span>Send via WhatsApp →</span>
                      </motion.button>

                      <p style={{ color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center', marginTop: '16px' }}>
                        Your message will open in WhatsApp for instant response
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          <style jsx>{`
            .info-card:hover { border-color: rgba(201,168,76,0.4) !important; background: rgba(201,168,76,0.04) !important; }
            input:focus, select:focus, textarea:focus { border-color: var(--gold) !important; }
            @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: 'linear-gradient(180deg, var(--navy-mid), var(--navy))' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '56px' }}
            >
              <div className="section-label">FAQ</div>
              <h2 className="section-title">
                Common <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Questions</span>
              </h2>
              <div className="gold-line" />
            </motion.div>

            {FAQ.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  border: '1px solid var(--border)',
                  marginBottom: '12px',
                  overflow: 'hidden',
                  background: openFaq === i ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.02)',
                  transition: 'background 0.3s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '24px 28px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '20px',
                    color: 'var(--cream)',
                    fontWeight: 600,
                  }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--gold)', fontSize: '24px', flexShrink: 0, lineHeight: 1 }}
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 28px 24px', color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8 }}>
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
