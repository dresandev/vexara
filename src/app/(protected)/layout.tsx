import { logout } from '~/actions/logout'
import { currentUser } from '~/lib/auth'
import { Navigation } from './_components/navigation'
import styles from './layout.module.css'

export default async function ProtectedRoutesLayout({
  children,
}: { children: React.ReactNode }) {
  const user = await currentUser()
  const greetingName = user?.name?.split(' ')[0]

  return (
    <div className={styles.wrapper}>
      <section className={styles.menu}>
        <div>
          <p className={styles.greetingTitle}>
            Hola {greetingName}
          </p>
          <p className={styles.greetingEmail}>
            {user?.email}
          </p>
        </div>

        <Navigation />

        <form action={logout}>
          <button className={styles.logoutButton}>
            Cerrar sesión
          </button>
        </form>
      </section>

      <section className={styles.content}>
        {children}
      </section>
    </div>
  )
}
