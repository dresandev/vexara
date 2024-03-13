import Link from 'next/link'
import { Button } from '~/components/ui/button'
import styles from './page.module.css'

export default function ErrorPage() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        width={550}
        height={366}
        src='/images/decoration/error.webp'
        alt='error imagen decorativa'
      />
      <Button asChild>
        <Link href='/'>Regresar al inicio</Link>
      </Button>
    </div>
  )
}
