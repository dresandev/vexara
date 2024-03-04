import Link from 'next/link'
import clsx from 'clsx'
import { SideModal } from '~/components/ui/side-modal'
import { TextField } from '~/components/ui/text-field'
import { Checkbox } from '~/components/ui/checkbox'
import componentStyles from '~/styles/components.module.css'
import styles from './register-modal.module.css'

export const RegisterModal = () => {
  return (
    <SideModal urlFragment='#register'>
      <span className={styles.title}>
        Crear cuenta
      </span>

      <form className={styles.form}>
        <TextField
          id='register_email'
          label='E-mail'
          type='email'
          autoComplete='off'
          required
        />
        <TextField
          id='register_password'
          label='Contraseña'
          type='password'
          required
          hint='Mínimo 8 caracteres incluyendo minúscula, mayúscula y un número. No repitas el mismo carácter más de 3 veces'
        />
        <Checkbox label='Mantener sesión' />

        <div className={styles.formFooter}>
          <Checkbox label='Acepto recibir novedades, comunicaciones y promociones de VEXARA' />
          <div className={styles.legalCheckbox}>
            <Checkbox
              label='He leido y acepto la '
              required
            />
            <Link
              className={styles.legalLink}
              href='/'
            >
              Política de Privacidad
            </Link>
          </div>
        </div>

        <button className={clsx(
          componentStyles.button,
          styles.registerButton,
        )}>
          Crear Cuenta
        </button>
      </form>
    </SideModal >
  )
}
