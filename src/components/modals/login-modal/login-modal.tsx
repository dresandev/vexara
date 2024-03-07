import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { LoginForm } from './login-form'
import styles from './login-modal.module.css'

export const LoginModal = () => {
  return (
    <SideModal urlFragment='#login'>
      <div className={styles.content}>
        <img
          src='/images/decoration/monster.webp'
          alt=''
          width={150}
          height={150}
        />
        <h1 className={styles.title}>
          Inicia sesión o crea tu cuenta
        </h1>

        <p className={styles.legalText}>
          Al iniciar sesión con mi login social, acepto vincular mi cuenta conforme a la{' '}
          <Link
            className={styles.legalLink}
            href='#'
          >
            Política de Privacidad
          </Link>
        </p>

        <div className={styles.separator}>
          <span className={styles.separatorText}>o</span>
        </div>

        <LoginForm />

        <Link
          className={styles.registerLink}
          href='#register'
          scroll={false}
        >
          ¿No tienes cuenta?{' '}
          <span className={styles.registerLinkText}>
            Regístrate
          </span>
        </Link>
      </div>
    </SideModal >
  )
}
