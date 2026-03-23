import Nav from '@/components/Nav'
import GallerySection from '@/components/Gallery'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export const metadata = {
  title: 'Project Gallery | Emanuel Blueboard & Plastering Corp',
  description: 'Browse our portfolio of blueboard installation, skim coat plastering, vaulted ceilings, and renovation work across MetroWest Massachusetts.',
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
