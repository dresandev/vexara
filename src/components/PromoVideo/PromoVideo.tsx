import styles from './PromoVideo.module.css'

export const PromoVideo = () => {
  return (
    <video
      className={styles.video}
      src='/videos/promo/man-nflteaser.mp4'
      autoPlay
      muted
      loop
    ></video>
  )
}
