import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Layout from '../components/Layout';

// ── Animation helpers ──────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function AnimatedSection({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      custom={delay}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ── Counter component ──────────────────────────────────────
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Services data ──────────────────────────────────────────
const SERVICES = [
  { icon: '🏫', title: 'School Uniforms', desc: 'Crisp, durable uniforms tailored for every school. Bulk orders with consistent quality.' },
  { icon: '🍽️', title: 'Restaurant Uniforms', desc: 'Professional chef coats, waiter uniforms & aprons that make your brand shine.' },
  { icon: '⛽', title: 'Petrol Pump Uniforms', desc: 'Comfortable, branded uniforms for fuel station staff. Weather-ready fabrics.' },
  { icon: '🏨', title: 'Hotel & Corporate', desc: 'Smart corporate wear, hotel staff uniforms, security & housekeeping outfits.' },
  { icon: '👗', title: 'Party Wear', desc: 'Exquisite stitching for weddings, events & celebrations. Your dream outfit, stitched perfectly.' },
  { icon: '📦', title: 'Bulk Orders', desc: 'From 10 to 10,000 pieces — we deliver on time without compromising quality.' },
];

const STATS = [
  { value: 5000, suffix: '+', label: 'Uniforms Delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
];

const TESTIMONIALS = [
  { name: 'Ahmed Raza', role: 'School Principal', text: 'Outstanding quality! All 500 school uniforms were delivered on time and perfectly stitched. Our students look impeccable.', stars: 5 },
  { name: 'Sana Khan', role: 'Restaurant Owner', text: 'Dar Al Nujoom transformed our staff presentation. The uniforms are comfortable, durable, and exactly our brand colors.', stars: 5 },
  { name: 'Tariq Mehmood', role: 'Petrol Station Manager', text: 'Excellent bulk pricing and super professional team. Repeat customer for 3 years and counting!', stars: 5 },
];

// ── Page ───────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <NextSeo
        title="Dar Al Nujoom Textiles & Tailoring | School, Restaurant & Bulk Uniforms"
        description="Expert tailoring for school uniforms, restaurant uniforms, petrol pump uniforms, party wear & bulk orders. Premium stitching at competitive prices. Order now!"
        canonical="https://daralnujoom.vercel.app"
      />
      <Layout>
        {/* ── HERO ────────────────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #050D1A 0%, #0A1628 50%, #0F2040 100%)',
        }}>
          {/* Geometric background */}
          <div className="geo-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

          {/* Radial glow */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
              style={{
                position: 'absolute',
                width: `${30 + i * 15}px`,
                height: `${30 + i * 15}px`,
                border: '1px solid rgba(201,168,76,0.15)',
                transform: `rotate(45deg) translate(${[10, 70, 20, 80, 15, 65][i]}vw, ${[20, 60, 80, 30, 50, 15][i]}vh)`,
                pointerEvents: 'none',
              }}
            />
          ))}

          <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
            <div style={{ maxWidth: '700px' }}>
              {/* Arabic subtitle */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                <span style={{
                  fontFamily: 'Amiri, serif',
                  fontSize: '18px',
                  color: 'var(--gold)',
                  direction: 'rtl',
                }}>دار النجوم للنسيج والخياطة</span>
                <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(48px, 7vw, 90px)',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  lineHeight: 1.05,
                  marginBottom: '24px',
                }}
              >
                Where Every
                <span style={{ display: 'block', color: 'var(--gold)' }}>Stitch Tells</span>
                a Story.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                style={{
                  fontSize: '17px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  maxWidth: '520px',
                  marginBottom: '40px',
                }}
              >
                Premium tailoring for <strong style={{ color: 'var(--cream)' }}>school uniforms</strong>, restaurant staff, petrol pump crews, party wear & bulk institutional orders. Delivered on time, every time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
              >
                <Link href="/contact" className="btn-primary">
                  <span>Get Free Quote</span>
                </Link>
                <Link href="/services" className="btn-outline">
                  <span>View Services →</span>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}
              >
                {['✓  Bulk Orders Welcome', '✓  On-Time Delivery', '✓  100% Satisfaction'].map((badge) => (
                  <div key={badge} style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    <span style={{ color: 'var(--gold)' }}>{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--gold)',
              opacity: 0.5,
            }}
          >
            <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: '1px', height: '40px', background: 'var(--gold)' }} />
          </motion.div>
        </section>

        {/* ── STATS ───────────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(90deg, var(--navy-mid) 0%, var(--navy-light) 50%, var(--navy-mid) 100%)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '60px 0',
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
            }} className="stats-grid">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(42px, 5vw, 64px)',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontSize: '11px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 600px) {
              .stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
        </section>

        {/* ── SERVICES ────────────────────────────────────── */}
        <section className="section geo-pattern" style={{ background: 'var(--navy)' }}>
          <div className="container">
            <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label">What We Offer</div>
              <h2 className="section-title">
                Tailoring for <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Every Need</span>
              </h2>
              <div className="gold-line" />
              <p className="section-desc" style={{ marginTop: '20px' }}>
                From single party outfits to 10,000-piece institutional orders — we stitch it all with precision.
              </p>
            </AnimatedSection>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }} className="services-grid">
              {SERVICES.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  className="glass-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden' }}
                >
                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    borderBottom: '60px solid transparent',
                    borderRight: '60px solid rgba(201,168,76,0.06)',
                  }} />

                  <div style={{ fontSize: '40px', marginBottom: '20px' }}>{svc.icon}</div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: 'var(--cream)',
                    marginBottom: '12px',
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.8 }}>
                    {svc.desc}
                  </p>
                  <div style={{
                    marginTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--gold)',
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}>
                    <Link href="/services" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── WHY CHOOSE US ───────────────────────────────── */}
        <section className="section" style={{ background: 'linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }} className="why-grid">
              {/* Left: visual */}
              <AnimatedSection>
                <div style={{ position: 'relative' }}>
                  {/* Large diamond shape */}
                  <motion.div
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      width: '300px',
                      height: '300px',
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                      border: '1px solid var(--border)',
                      transform: 'rotate(45deg)',
                      margin: '40px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ transform: 'rotate(-45deg)', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Amiri, serif', fontSize: '48px', color: 'var(--gold)', direction: 'rtl' }}>
                        ✦
                      </div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: 'var(--cream)', fontWeight: 600 }}>
                        Since
                      </div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', color: 'var(--gold)', fontWeight: 700, lineHeight: 1 }}>
                        2014
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating badges */}
                  {[
                    { text: 'ISO Quality', pos: { top: '0px', left: '0px' } },
                    { text: 'Bulk Ready', pos: { bottom: '20px', right: '0px' } },
                  ].map((badge) => (
                    <motion.div
                      key={badge.text}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      style={{
                        position: 'absolute',
                        ...badge.pos,
                        background: 'var(--navy)',
                        border: '1px solid var(--gold)',
                        padding: '12px 20px',
                        color: 'var(--gold)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {badge.text}
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right: content */}
              <div>
                <AnimatedSection>
                  <div className="section-label">Why Choose Us</div>
                  <h2 className="section-title">
                    Stitched with <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Passion</span>,<br />
                    Delivered with Pride
                  </h2>
                  <div className="gold-line" style={{ margin: '16px 0 28px' }} />
                </AnimatedSection>

                {[
                  { icon: '🎯', title: 'Precision Stitching', desc: 'Every seam, every hem — crafted with artisan precision for lasting quality.' },
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'Urgent bulk orders? We deliver without cutting corners on quality.' },
                  { icon: '💰', title: 'Competitive Pricing', desc: 'Best market rates for bulk orders. More you order, better you save.' },
                  { icon: '🎨', title: 'Custom Branding', desc: 'Logos, patches, embroidery & custom colors — your identity on every piece.' },
                ].map((point, i) => (
                  <AnimatedSection key={point.title} delay={i * 0.1}>
                    <div style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'flex-start',
                      marginBottom: '28px',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        flexShrink: 0,
                        background: 'rgba(201,168,76,0.05)',
                      }}>
                        {point.icon}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '20px',
                          color: 'var(--cream)',
                          fontWeight: 600,
                          marginBottom: '6px',
                        }}>
                          {point.title}
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
                          {point.desc}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
          `}</style>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--navy)', overflow: 'hidden' }}>
          <div className="container">
            <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label">Client Stories</div>
              <h2 className="section-title">
                Trusted by <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Hundreds</span>
              </h2>
              <div className="gold-line" />
            </AnimatedSection>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }} className="test-grid">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  style={{ padding: '40px 32px' }}
                >
                  <div style={{
                    fontSize: '32px',
                    color: 'var(--gold)',
                    fontFamily: 'Cormorant Garamond, serif',
                    lineHeight: 0.8,
                    marginBottom: '16px',
                  }}>
                    "
                  </div>
                  <p style={{ color: 'var(--cream)', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
                    {t.text}
                  </p>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(t.stars)].map((_, j) => (
                      <span key={j} style={{ color: 'var(--gold)', fontSize: '16px' }}>★</span>
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'var(--cream)', fontWeight: 600 }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
                      {t.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 768px) { .test-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ── CTA BANNER ──────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-light) 100%)',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="geo-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1 }} />
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ fontFamily: 'Amiri, serif', fontSize: '24px', color: 'var(--navy)', opacity: 0.5, marginBottom: '8px', direction: 'rtl' }}>
                ✦ ✦ ✦
              </div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: 'var(--navy)',
                fontWeight: 700,
                marginBottom: '16px',
              }}>
                Ready to Place Your Order?
              </h2>
              <p style={{ color: 'var(--navy)', opacity: 0.7, fontSize: '17px', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
                Get a free quote today. Bulk orders, rush delivery, custom branding — we handle it all.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '16px 40px',
                  textDecoration: 'none',
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                  transition: 'all 0.3s ease',
                }}>
                  Get Free Quote
                </Link>
                <a href="https://wa.me/92XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: 'white',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '16px 40px',
                  textDecoration: 'none',
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                }}>
                  💬 WhatsApp Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
