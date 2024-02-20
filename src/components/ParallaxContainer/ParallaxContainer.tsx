import clsx from 'clsx'
import styles from './ParallaxContainer.module.css'

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  blockSize: string
}

interface CustomProperties extends React.CSSProperties {
  '--block-size': string
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className,
  blockSize,
}) => {
  return (
    <div
      style={{ '--block-size': blockSize } as CustomProperties}
      className={clsx(styles.container, className)}
    >
      <div className={styles.fixedContainer}>
        {children}
      </div>
    </div>
  )
}
