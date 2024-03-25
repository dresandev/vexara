import Link from 'next/link'
import { VexaraLogo } from '~/components/svg'
import styles from './simple-header.module.css'

export const SimpleHeader = () => {
  return (
    <header className={styles.wrapper}>
      <Link
        className={styles.homeLink}
        href='/'
      >
        <VexaraLogo />
      </Link>
    </header>
  )
}
