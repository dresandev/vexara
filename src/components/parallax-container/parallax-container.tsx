import styles from './parallax-container.module.css'

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  blockSize: string
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className,
  blockSize,
}) => {
  return (
    <div
      style={{ blockSize }}
      className={className}
    >
      <div className={styles.fixedContainer}>
        {children}
      </div>
    </div>
  )
}
