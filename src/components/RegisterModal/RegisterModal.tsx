import Link from 'next/link'
import { SideModal } from '~/components/SideModal'
import { TextField } from '~/components/TextField'
import { Checkbox } from '~/components/Checkbox'
import { CloseIcon } from '~/components/SVG'
import styles from './RegisterModal.module.css'

export const RegisterModal = () => {
  return (
    <SideModal
      className={styles.modal}
      fragment='#register'
    >
      <Link
        aria-label='Cerrar'
        className={styles.closeModalLink}
        href=''
        scroll={false}
      >
        <CloseIcon />
      </Link>

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
          <Checkbox label='Acepto recibir novedades, comunicaciones y promociones de BERSHKA' />
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

        <button className='button'>
          Crear Cuenta
        </button>
      </form>
    </SideModal >
  )
}
