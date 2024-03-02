import Link from 'next/link'
import clsx from 'clsx'
import { TextField } from '~/components/TextField'
import { Checkbox } from '~/components/Checkbox'
import { SideModal } from '~/components/SideModal'
import componentStyles from '~/styles/components.module.css'
import styles from './LoginModal.module.css'

export const LoginModal = () => {
  return (
    <SideModal fragment='#auth'>
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
            href='#auth'>
            Política de Privacidad
          </Link>
        </p>

        <div className={styles.separator}>
          <span className={styles.separatorText}>o</span>
        </div>

        <form className={styles.form}>
          <TextField
            id='login-email'
            label='E-mail'
            autoComplete='off'
            type='email'
            required
          />
          <TextField
            id='login-password'
            label='Contraseña'
            type='password'
            required
          />

          <div className={styles.options}>
            <Checkbox label='Mantener sesión' />

            <Link
              className={styles.forgotPasswordLink}
              href='#auth'
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </div>

          <button className={clsx(
            componentStyles.button,
            styles.loginButton,
          )}>
            Iniciar Sesión
          </button>

          <Link
            className={styles.registerLink}
            href='#register'
          >
            ¿No tienes cuenta?{' '}
            <span className={styles.registerLinkText}>
              Regístrate
            </span>
          </Link>
        </form>
      </div>
    </SideModal>
  )
}
