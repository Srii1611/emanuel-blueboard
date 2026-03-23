import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import GallerySection from '@/components/Gallery'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export const metadata: Metadata = {
  title: 'Project Gallery | Blueboard & Plastering Work — Emanuel Blueboard Corporation',
  description: 'Browse photos of blueboard installation, skim coat plastering, vaulted ceilings, water damage repair, and renovation projects across Framingham and MetroWest MA.',
  openGraph: {
    title: 'Project Gallery — Emanuel Blueboard Corporation',
    description: 'Real plastering and blueboard work across MetroWest MA. Vaulted ceilings, new construction, renovations, and repairs.',
    images: ['/images/architectural-diamond-ceiling-plaster.jpg'],
  },
}

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '80px' }}>
        <GallerySection />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  )
}
