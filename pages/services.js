import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const SERVICES_DETAILED = [
  {
    id: 'school-uniforms',
    icon: '🏫',
    title: 'School Uniforms',
    subtitle: 'For Every Academy & Institution',
    desc: 'We specialize in bulk school uniform stitching across all styles — from traditional shalwar kameez to trousers, shirts, and blazers. Consistent sizing, durable fabric, and school color accuracy guaranteed.',
    features: ['Custom school logo embroidery', 'All sizes — junior to senior', 'Durable, easy-wash fabric', 'Minimum 50 pieces', 'Color-matched accuracy'],
    color: '#1E3A5F',
  },
  {
    id: 'restaurant-uniforms',
    icon: '🍽️',
    title: 'Restaurant Uniforms',
    subtitle: 'Chef Coats, Aprons & Waiter Wear',
    desc: 'Elevate your dining brand with professional uniforms. From chef whites to elegant waiter attire — we stitch uniforms that are both stylish and functional in the kitchen and front-of-house.',
    features: ['Chef coats & pants', 'Aprons & bandanas', 'Waiter & hostess outfits', 'Heat-resistant fabrics', 'Quick turnaround'],
    color: '#2D1A0A',
  },
  {
    id: 'petrol-pump-uniforms',
    icon: '⛽',
    title: 'Petrol Pump Uniforms',
    subtitle: 'Fuel Station Staff Wear',
    desc: 'Keep your fuel station staff looking professional and safe. We create durable, branded uniforms with reflective strips and company colors for maximum visibility and brand identity.',
    features: ['Reflective safety strips', 'Brand color matching', 'Weather-resistant fabric', 'Company logo printing', 'Bulk pricing available'],
    color: '#0A2010',
  },
  {
    id: 'hotel-corporate',
    icon: '🏨',
    title: 'Hotel & Corporate Uniforms',
    subtitle: 'Housekeeping, Security & Reception',
    desc: 'From front desk reception to housekeeping and security — we provide complete uniform solutions for hotels, offices, and corporate setups that project professionalism and brand image.',
    features: ['Reception & front desk', 'Housekeeping uniforms', 'Security guard wear', 'Custom ID badge holders', 'Seasonal collections'],
    color: '#1A0A2D',
  },
  {
    id: 'party-wear',
    icon: '👗',
    title: 'Party & Event Wear',
    subtitle: 'Weddings, Celebrations & Events',
    desc: 'Your special occasion deserves perfect stitching. Bring us your fabric and design — we craft exquisite party wear, formal dresses, sherwanis, and lehengas to your exact measurements.',
    features: ['Custom design execution', 'Premium hand-finish', 'Exact body measurements', 'All fabrics accepted', 'Bridal & groom wear'],
    color: '#2D0A1A',
  },
  {
    id: 'bulk-orders',
    icon: '📦',
    title: 'Bulk Order Specialist',
    subtitle: '50 to 10,000+ Pieces',
    desc: 'We are built for volume. Whether you need 50 uniforms or 10,000 — our production setup ensures consistent quality across every single piece, delivered on your timeline.',
    features: ['Volume discounts available', 'Dedicated account manager', 'Quality control per batch', 'Flexible payment plans', 'Express delivery options'],
    color: '#0A1A2D',
  },
];

export default function Services() {
  return (
    <>
      <NextSeo
        title="Our Services | School Uniforms, Restaurant & Bulk Tailoring — Dar Al Nujoom"
        description="Complete tailoring services: school uniforms, restaurant staff wear, petrol pump uniforms, hotel uniforms, party wear & bulk stitching orders. Get a free quote today."
        canonical="https://www.daralnujoomtextiles.com/services"
        openGraph={{
          title: 'Tailoring Services | Dar Al Nujoom Textiles',
          description: 'Expert stitching for all uniform types and party wear. Bulk orders from 50 to 10,000 pieces.',
          url: 'https://www.daralnujoomtextiles.com/services',
        }}
      />
      <Layout>
        {/* Page Header */}
        <section style={{
          background: 'linear-gradient(135deg, #050D1A 0%, #0A1628 60%, #0F2040 100%)',
          padding: '160px 0 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="geo-pattern" style={{ position: 'absolute', inset: 0 }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">What We Do</div>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: 'var(--cream)',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                Our <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Services</span>
              </h1>
              <div className="gold-line" />
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.8 }}>
                From a single outfit to a 10,000-piece institutional order — we stitch it all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--navy)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {SERVICES_DETAILED.map((svc, i) => (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
                    gap: '0',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                  }}
                  className="service-row"
                >
                  {/* Icon panel */}
                  <div style={{
                    background: `linear-gradient(135deg, ${svc.color}, rgba(10,22,40,0.9))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '60px 40px',
                    order: i % 2 === 0 ? 0 : 1,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div className="geo-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
                    <motion.div
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        fontSize: '80px',
                        position: 'relative',
                        zIndex: 2,
                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                      }}
                    >
                      {svc.icon}
                    </motion.div>
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '80px',
                      fontWeight: 700,
                      color: 'rgba(201,168,76,0.08)',
                      lineHeight: 1,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div style={{
                    padding: '60px 48px',
                    order: i % 2 === 0 ? 1 : 0,
                    background: 'rgba(255,255,255,0.02)',
                  }}>
                    <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 600 }}>
                      {svc.subtitle}
                    </div>
                    <h2 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      color: 'var(--cream)',
                      fontWeight: 600,
                      marginBottom: '20px',
                    }}>
                      {svc.title}
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
                      {svc.desc}
                    </p>

                    {/* Features */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                      {svc.features.map((f) => (
                        <span key={f} style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: 'rgba(201,168,76,0.08)',
                          border: '1px solid var(--border)',
                          color: 'var(--gold)',
                          fontSize: '12px',
                          padding: '6px 14px',
                          fontWeight: 500,
                        }}>
                          ✓ {f}
                        </span>
                      ))}
                    </div>

                    <Link href="/contact" className="btn-primary" style={{ fontSize: '11px', padding: '14px 32px' }}>
                      <span>Get a Quote →</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @media (max-width: 768px) {
              .service-row {
                grid-template-columns: 1fr !important;
              }
              .service-row > div {
                order: unset !important;
              }
            }
          `}</style>
        </section>

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))',
          padding: '80px 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: 'var(--navy)',
                fontWeight: 700,
                marginBottom: '16px',
              }}>
                Don't See What You Need?
              </h2>
              <p style={{ color: 'var(--navy)', opacity: 0.7, fontSize: '16px', marginBottom: '36px' }}>
                We tailor any type of clothing. Just bring your fabric and design — we'll stitch it perfectly.
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
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
