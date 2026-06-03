import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';


export default function SchoolUniformSharjah() {
  return (
    <>
      <NextSeo
        title="School Uniforms in Sharjah | Tailoring | Dar Al Nujom"
        description="school uniforms bulk stitching orders. Get a free quote today."
        canonical="https://daralnujom.shop/school-uniforms-sharjah"
        openGraph={{
          title: 'School Uniforms in Sharjah | Dar Al Nujom',
          description: 'Expert stitching for all uniform types and party wear. Bulk orders from 50 to 10,000 pieces.',
          url: 'https://daralnujom.shop/school-uniforms-sharjah',
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
            <div>
                <h1>School Uniforms in Sharjah</h1>

                <p> We supply school uniforms across Sharjah</p>
            </div>

        </section>
    </Layout>
    </>
  )
}
