import Link from 'next/link'
import { VexaraLogo } from '~/components/svg'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.wrapper}>
        <Link
          className={styles.homeLink}
          href='/'
        >
          <VexaraLogo />
        </Link>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
