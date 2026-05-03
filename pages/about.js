import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const TEAM_VALUES = [
  { icon: '🧵', title: 'Master Craftsmanship', desc: 'Over a decade of expert stitching experience across all garment types.' },
  { icon: '🤝', title: 'Client-First Promise', desc: 'Your vision, your measurements, your timeline — we make it happen.' },
  { icon: '♻️', title: 'Quality Fabrics', desc: 'We work with premium, ethically sourced fabrics for durability and comfort.' },
  { icon: '🚀', title: 'Always On Time', desc: 'We understand business deadlines. Our track record speaks for itself.' },
];

const MILESTONES = [
  { year: '2014', event: 'Dar Al Nujoom founded with a single sewing machine and a big dream.' },
  { year: '2016', event: 'First major bulk contract — 500 school uniforms for a local academy.' },
  { year: '2018', event: 'Expanded production to restaurant and corporate uniform stitching.' },
  { year: '2021', event: 'Reached 2,000+ satisfied clients across the region.' },
  { year: '2024', event: 'Scaled to 10,000+ uniform capacity per month. Multiple industry awards.' },
];

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us | Dar Al Nujoom Textiles & Tailoring — Est. 2014"
        description="Learn about Dar Al Nujoom — a decade of premium tailoring, uniform stitching, and custom garment services. Our story, our values, our mission."
        canonical="https://www.daralnujoomtextiles.com/about"
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
              <div className="section-label">Our Story</div>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: 'var(--cream)',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                About <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Dar Al Nujoom</span>
              </h1>
              <div className="gold-line" />
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '580px', margin: '20px auto 0', lineHeight: 1.8 }}>
                <span style={{ fontFamily: 'Amiri, serif', fontSize: '20px', color: 'var(--gold)' }}>دار النجوم</span> — "House of Stars" — where every garment is crafted to shine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section" style={{ background: 'var(--navy)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
              marginBottom: '100px',
            }} className="story-grid">
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, var(--navy-mid), var(--navy-light))',
                  border: '1px solid var(--border)',
                  padding: '60px 40px',
                  position: 'relative',
                }}>
                  <div className="geo-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div style={{
                      fontFamily: 'Amiri, serif',
                      fontSize: '80px',
                      color: 'var(--gold)',
                      direction: 'rtl',
                      marginBottom: '20px',
                    }}>دار النجوم</div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '18px',
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                    }}>
                      "House of Stars" — Stitching Excellence Since 2014
                    </div>
                    <div style={{
                      marginTop: '40px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '20px',
                    }}>
                      {[['10+', 'Years'], ['5000+', 'Uniforms'], ['200+', 'Clients'], ['6', 'Categories']].map(([num, label]) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: 'var(--gold)', fontWeight: 700 }}>{num}</div>
                          <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="section-label">Who We Are</div>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Passion for<br />
                  <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Perfect Stitching</span>
                </h2>
                <div className="gold-line" style={{ margin: '16px 0 28px' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.9, marginBottom: '20px' }}>
                  Dar Al Nujoom was born from a simple belief — that quality tailoring should be accessible to everyone, from individual customers seeking the perfect party outfit to large institutions needing thousands of uniforms.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.9, marginBottom: '32px' }}>
                  Over a decade later, we've grown into a trusted tailoring partner for schools, restaurants, hotels, and corporations across the region — never compromising on the precision and care we put into every single stitch.
                </p>
                <Link href="/contact" className="btn-primary">
                  <span>Start Your Order →</span>
                </Link>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ textAlign: 'center', marginBottom: '48px' }}
            >
              <div className="section-label">Our Values</div>
              <h2 className="section-title">
                What <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Drives Us</span>
              </h2>
              <div className="gold-line" />
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="values-grid">
              {TEAM_VALUES.map((val, i) => (
                <motion.div
                  key={val.title}
                  className="glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{ padding: '40px 28px', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '44px', marginBottom: '20px' }}>{val.icon}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: 'var(--cream)', marginBottom: '12px', fontWeight: 600 }}>
                    {val.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 768px) {
              .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
              .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 480px) {
              .values-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* Timeline */}
        <section className="section" style={{ background: 'linear-gradient(180deg, var(--navy-mid), var(--navy))' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '64px' }}
            >
              <div className="section-label">Our Journey</div>
              <h2 className="section-title">
                A <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Decade</span> of Excellence
              </h2>
              <div className="gold-line" />
            </motion.div>

            <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'var(--border)', transform: 'translateX(-50%)' }} />

              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{
                    display: 'flex',
                    justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                    marginBottom: '48px',
                    position: 'relative',
                  }}
                >
                  {/* Center dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '12px',
                    height: '12px',
                    background: 'var(--gold)',
                    borderRadius: '50%',
                    border: '2px solid var(--navy)',
                    zIndex: 2,
                  }} />

                  <div style={{
                    width: '44%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    padding: '24px 28px',
                    textAlign: i % 2 === 0 ? 'right' : 'left',
                  }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', color: 'var(--gold)', fontWeight: 700, marginBottom: '8px' }}>
                      {m.year}
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))',
          padding: '80px 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--navy)', fontWeight: 700, marginBottom: '16px' }}>
              Be Part of Our Story
            </h2>
            <p style={{ color: 'var(--navy)', opacity: 0.7, fontSize: '16px', marginBottom: '36px' }}>
              Join 200+ satisfied clients who trust Dar Al Nujoom for all their tailoring needs.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'var(--navy)',
              color: 'var(--gold)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '16px 48px',
              textDecoration: 'none',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}>
              Contact Us →
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
