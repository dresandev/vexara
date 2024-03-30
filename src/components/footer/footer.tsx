import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desarrollado por&nbsp;
        <a
          className={styles.dresanWebLink}
          href='https://www.dresan.me/'
          target='_blank'
        >
          Dresan
        </a>
      </p>
    </footer>
  )
}
