import { SimpleHeader } from '~/components/simple-header'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <SimpleHeader />
      <main>
        {children}
      </main>
    </>
  )
}
