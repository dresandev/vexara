'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import styles from './navigation.module.css'

const links = [
  {
    href: '/user-orders',
    label: 'Mis compras',
  },
  {
    href: '/user-account',
    label: 'Datos personales y direcciones',
  }
]

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.linkList}>
        {
          links.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={clsx({ [styles.activeLink]: pathname === href })}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
