import Link from 'next/link'
import { SideModal } from '~/components/ui/side-modal'
import { LoginForm } from '~/components/login-form'
import { SocialAuthButtons } from '~/components/social-auth-buttons'
import { OrSeparator } from '~/components/or-separator'
import styles from './login-modal.module.css'

export const LoginModal = () => {
  return (
    <SideModal fragment='#login'>
      <div className={styles.content}>
        <img
          src='/images/decoration/monster.webp'
          alt=''
          width={150}
          height={150}
        />
        <h2 className={styles.title}>
          Inicia sesión o crea tu cuenta
        </h2>
        <SocialAuthButtons />
        <OrSeparator />
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
