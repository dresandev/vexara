import styles from './HeroVideo.module.css'

export const HeroVideo = () => {
  return (
    <div className={styles.parallaxContainer}>
      <video
        className={styles.video}
        src='/videos/hero/man-newin.mp4'
        autoPlay
        muted
        loop
      ></video>
    </div>
  )
}
