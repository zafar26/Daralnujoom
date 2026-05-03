import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(10, 22, 40, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.15)' : '1px solid transparent',
          padding: scrolled ? '14px 0' : '24px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: 44,
                height: 44,
                border: '2px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'rotate(45deg)',
                flexShrink: 0,
              }}>
                <span style={{
                  transform: 'rotate(-45deg)',
                  color: 'var(--gold)',
                  fontSize: '18px',
                  fontFamily: 'Amiri, serif',
                  fontWeight: 700,
                }}>د</span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--cream)',
                  lineHeight: 1,
                  letterSpacing: '1px',
                }}>
                  Dar Al Nujoom
                </div>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '4px',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginTop: '3px',
                }}>
                  Textiles & Tailoring
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: router.pathname === link.href ? 'var(--gold)' : 'var(--cream)',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.3s ease',
                }}
                className="nav-link"
              >
                {link.label}
                {router.pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'var(--gold)',
                    }}
                  />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ fontSize: '11px', padding: '12px 28px' }}>
              <span>Get Quote</span>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                  y: menuOpen && i === 0 ? 7 : menuOpen && i === 2 ? -7 : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '1px',
                  background: 'var(--gold)',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--navy)',
              zIndex: 800,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '36px',
                    fontWeight: 600,
                    color: router.pathname === link.href ? 'var(--gold)' : 'var(--cream)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
        .nav-link:hover {
          color: var(--gold) !important;
        }
      `}</style>
    </>
  );
}
