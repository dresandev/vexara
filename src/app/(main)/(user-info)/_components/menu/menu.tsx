'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { logout } from '~/actions/logout'
import { useCartStore } from '~/store/use-cart-store'
import { useCurrentUser } from '~/hooks/use-current-user'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import { CloseIcon, MenuIcon } from '~/components/svg'
import styles from './menu.module.css'

const links = [
  {
    href: '/user-orders',
    label: 'Mis compras',
  },
  {
    href: '/user-account',
    label: 'Datos personales',
  }
]

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const resetCart = useCartStore(state => state.resetCart)
  useToggleBodyOverflow(isOpen)
  const user = useCurrentUser()
  const greetingName = user?.name?.split(' ')[0]

  const handleOpenMenu = () => {
    setIsOpen(prevValue => !prevValue)
  }

  const handleLogout = async () => {
    await logout()
    resetCart()
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.menuButton}
        onClick={handleOpenMenu}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={clsx(
        styles.menu,
        { [styles.open]: isOpen })
      }>
        <div>
          <p className={styles.greetingTitle}>
            Hola {greetingName}
          </p>
          <p className={styles.greetingEmail}>
            {user?.email}
          </p>
        </div>

        <nav>
          <ul className={styles.linkList}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className={clsx(
                    { [styles.activeLink]: pathname === href }
                  )}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
