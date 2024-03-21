import { Header } from '~/components/ui/header'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
