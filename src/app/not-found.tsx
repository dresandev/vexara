import Link from 'next/link'
import { Button } from '~/components/ui/button'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        width={550}
        height={366}
        src='/images/decoration/not-found.webp'
        alt='Pagina no encontrada imagen decorativa'
      />
      <Button asChild>
        <Link href='/'>Regresar al inicio</Link>
      </Button>
    </div>
  )
}
