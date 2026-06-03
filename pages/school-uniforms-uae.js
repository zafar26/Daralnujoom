import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const items = [
  { id: 1, state: 'Dubai', emoji: '🏙️', label: 'School Uniform in Dubai', color: '#1E3A5F', size: 'large', url:"/school-uniforms-dubai" },
  { id: 2, state: 'Sharjah', emoji: '🕌', label: 'School Uniform in Sharjah', color: '#2D1A0A', size: 'small',url:"/school-uniforms-sharjah" },
  { id: 3, state: 'Ajman', emoji: '🌊', label: 'School Uniform in Ajman', color: '#0A2010', size: 'small',url:"/school-uniforms-ajman" },
  { id: 4, state: 'Ras Al Khaimah', emoji: '🏔️', label: 'School Uniform in Ras Al Khaimah', color: '#2D0A1A', size: 'large',url:"/school-uniforms-ras-al-khaimah" },
];

export default function SchoolUniformUAE() {
  return (
    <>
      <NextSeo
        title="School Uniforms in UAE | Tailoring | Dar Al Nujom"
        description="school uniforms bulk stitching orders. Get a free quote today."
        canonical="https://daralnujom.shop/school-uniforms-uae"
        openGraph={{
          title: 'School Uniforms in UAE | Dar Al Nujom',
          description: 'Expert stitching for all uniform types and party wear. Bulk orders from 50 to 10,000 pieces.',
          url: 'https://daralnujom.shop/school-uniforms-uae',
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
            <div className="container">
                <h1>School Uniforms in UAE</h1>

                {/* Grid */}
                <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                gridAutoRows: '280px',
                marginTop: '5%'
                }} className="gallery-grid">
                {items.map((item, i) => (
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
                    <Link href={item.url}>
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
                        {item.state}
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
                    </Link>
                    </motion.div>
                ))}
                </div>
            </div>

        </section>
    </Layout>
    </>
  )
}
