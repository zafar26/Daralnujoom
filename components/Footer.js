import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--navy) 0%, #050D1A 100%)',
      borderTop: '1px solid var(--border)',
      padding: '80px 0 30px',
    }}>
      <div className="container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--cream)',
              marginBottom: '6px',
            }}>
              Dar Al Nujoom
            </div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px',
              letterSpacing: '4px',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Textiles & Tailoring
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.8, maxWidth: '280px' }}>
              Crafting excellence in every stitch. From school uniforms to party wear — we tailor your vision into reality.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              {['Fb', 'Ig', 'Wa'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    fontSize: '11px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                  }}
                  className="social-icon"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 600,
            }}>
              Services
            </div>
            {[
              'School Uniforms',
              'Restaurant Uniforms',
              'Petrol Pump Uniforms',
              'Hotel Uniforms',
              'Party Wear',
              'Bulk Orders',
            ].map((item) => (
              <div key={item} style={{ marginBottom: '10px' }}>
                <Link href="/services" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s',
                }} className="footer-link">
                  {item}
                </Link>
              </div>
            ))}
          </div>

          {/* Links */}
          <div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 600,
            }}>
              Company
            </div>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <div key={item.href} style={{ marginBottom: '10px' }}>
                <Link href={item.href} style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s',
                }} className="footer-link">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px',
              letterSpacing: '3px',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 600,
            }}>
              Get In Touch
            </div>
            {[
              { icon: '📍', text: 'Your Shop Address, City' },
              { icon: '📞', text: '+92-XXX-XXXXXXX' },
              { icon: '✉️', text: 'info@daralnujoom.com' },
              { icon: '⏰', text: 'Mon–Sat: 9AM – 9PM' },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '14px',
              }}>
                <span style={{ fontSize: '14px', marginTop: '1px' }}>{icon}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
            <a
              href="https://wa.me/92XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '12px', fontSize: '11px', padding: '12px 24px' }}
            >
              <span>💬 WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          marginBottom: '30px',
          opacity: 0.3,
        }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
            © {year} Dar Al Nujoom Textiles & Tailoring. All Rights Reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'Amiri, serif', direction: 'rtl' }}>
            دار النجوم للنسيج والخياطة ✦
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover { color: var(--gold) !important; }
        .social-icon:hover { background: var(--gold) !important; border-color: var(--gold) !important; color: var(--navy) !important; }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
