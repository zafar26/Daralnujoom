import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';

const CATEGORIES = ['All', 'School Uniforms', 'Restaurant', 'Petrol Pump', 'Party Wear', 'Corporate'];

const GALLERY_ITEMS = [
  { id: 1, category: 'School Uniforms', emoji: '👨‍🎓', label: 'Boys School Uniform', color: '#1E3A5F', size: 'large' },
  { id: 2, category: 'Restaurant', emoji: '👨‍🍳', label: 'Chef Uniform', color: '#2D1A0A', size: 'small' },
  { id: 3, category: 'Petrol Pump', emoji: '⛽', label: 'Station Staff Wear', color: '#0A2010', size: 'small' },
  { id: 4, category: 'Party Wear', emoji: '👗', label: 'Wedding Dress', color: '#2D0A1A', size: 'large' },
  { id: 5, category: 'Corporate', emoji: '👔', label: 'Corporate Suit', color: '#1A0A2D', size: 'small' },
  { id: 6, category: 'School Uniforms', emoji: '👧', label: 'Girls School Uniform', color: '#1E3A5F', size: 'small' },
  { id: 7, category: 'Restaurant', emoji: '🧑‍🍳', label: 'Waiter Outfit', color: '#2D1A0A', size: 'large' },
  { id: 8, category: 'Party Wear', emoji: '🤵', label: 'Sherwani', color: '#2D0A1A', size: 'small' },
  { id: 9, category: 'Corporate', emoji: '👩‍💼', label: 'Office Uniform', color: '#1A0A2D', size: 'small' },
  { id: 10, category: 'School Uniforms', emoji: '🏫', label: 'School Blazer', color: '#1E3A5F', size: 'small' },
  { id: 11, category: 'Petrol Pump', emoji: '🦺', label: 'Safety Vest', color: '#0A2010', size: 'large' },
  { id: 12, category: 'Party Wear', emoji: '👘', label: 'Traditional Wear', color: '#2D0A1A', size: 'small' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <>
      <NextSeo
        title="Gallery | Tailoring Portfolio — Dar Al Nujoom Textiles"
        description="Browse our tailoring portfolio — school uniforms, restaurant wear, party dresses, corporate attire, and more. See the quality of Dar Al Nujoom stitching."
        canonical="https://daralnujoom.vercel.app/gallery"
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
              <div className="section-label">Our Portfolio</div>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: 'var(--cream)',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                Our <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Gallery</span>
              </h1>
              <div className="gold-line" />
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '480px', margin: '20px auto 0', lineHeight: 1.8 }}>
                A showcase of our finest work — every piece stitched with purpose and care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section" style={{ background: 'var(--navy)' }}>
          <div className="container">
            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                marginBottom: '56px',
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    background: activeFilter === cat ? 'var(--gold)' : 'transparent',
                    color: activeFilter === cat ? 'var(--navy)' : 'var(--text-muted)',
                    border: activeFilter === cat ? '1px solid var(--gold)' : '1px solid var(--border)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    padding: '10px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              gridAutoRows: '280px',
            }} className="gallery-grid">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, rgba(10,22,40,0.9))`,
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    gridColumn: item.size === 'large' ? 'span 1' : 'span 1',
                  }}
                >
                  <div className="geo-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
                  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div style={{ fontSize: '70px', marginBottom: '16px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}>
                      {item.emoji}
                    </div>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '20px',
                      color: 'var(--cream)',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: '10px',
                      letterSpacing: '3px',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}>
                      {item.category}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(201,168,76,0.1)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    borderTop: '3px solid var(--gold)',
                  }} className="gallery-hover" />
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '14px',
                marginTop: '48px',
                fontStyle: 'italic',
              }}
            >
              📸 Contact us to receive actual photos of our work via WhatsApp
            </motion.p>
          </div>

          <style jsx>{`
            @media (max-width: 768px) {
              .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 200px !important; }
            }
            @media (max-width: 480px) {
              .gallery-grid { grid-template-columns: 1fr !important; }
            }
            .gallery-hover:hover { opacity: 1 !important; }
          `}</style>
        </section>

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))',
          padding: '80px 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--navy)', fontWeight: 700, marginBottom: '16px' }}>
              Want Work Like This?
            </h2>
            <p style={{ color: 'var(--navy)', opacity: 0.7, fontSize: '16px', marginBottom: '36px' }}>
              Place your order today and see why 200+ clients trust Dar Al Nujoom.
            </p>
            <a href="/contact" style={{
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
              Order Now →
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
