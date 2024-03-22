import { Menu } from './_components/menu'
import styles from './layout.module.css'

export default async function ProtectedRoutesLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <section className={styles.wrapper}>
      <Menu />
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}
