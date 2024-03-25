import Link from 'next/link'
import { SimpleHeader } from '~/components/simple-header'
import { Button } from '~/components/ui/button'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <SimpleHeader />
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          width={550}
          height={366}
          src='/images/decoration/not-found.webp'
          alt='Pagina no encontrada imagen decorativa'
        />
        <p>¡Oops! no se encontró la página buscada.</p>
        <Button asChild>
          <Link href='/'>Regresar al inicio</Link>
        </Button>
      </div>
    </>
  )
}
