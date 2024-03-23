import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
