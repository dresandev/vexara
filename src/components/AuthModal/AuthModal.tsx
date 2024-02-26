import Link from 'next/link'
import { TextField } from '~/components/TextField'
import { Checkbox } from '~/components/Checkbox'
import { SideModal } from '~/components/SideModal'
import { CloseModalButton } from '~/components/CloseModalButton'
import { CloseIcon } from '~/components/SVG'
import styles from './AuthModal.module.css'

export const AuthModal = () => {
  return (
    <SideModal className={styles.modal}>
      <CloseModalButton className={styles.closeModalButton}>
        <CloseIcon />
      </CloseModalButton>

      <div className={styles.content}>
        <img
          className={styles.imgDecoration}
          src='/images/decoration/monster.webp'
          alt=''
          width={150}
          height={150}
        />
        <h1 className={styles.title}>
          Inicia sesión o crea tu cuenta
        </h1>
        <p className={styles.legal}>
          Al iniciar sesión con mi login social, acepto vincular mi cuenta conforme a la{' '}
          <Link
            className={styles.legalLink}
            href='#'>
            Política de Privacidad
          </Link>
        </p>

        <div className={styles.separator}>
          <span className={styles.separatorText}>o</span>
        </div>

        <form className={styles.form}>
          <TextField
            id='login_email'
            label='E-mail'
            autoComplete='off'
            type='email'
            required
          />
          <TextField
            id='login_password'
            label='Contraseña'
            type='password'
            required
          />

          <div className={styles.options}>
            <Checkbox label='Mantener sesión' />

            <Link
              className={styles.forgotPasswordLink}
              href='#'
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </div>

          <button className={styles.submitButton}>
            Iniciar Sesión
          </button>

          <Link
            className={styles.registerLink}
            href='#'
          >
            ¿No tienes cuenta?
            <span className={styles.registerLinkText}> Regístrate</span>
          </Link>
        </form>
      </div>
    </SideModal>
  )
}
