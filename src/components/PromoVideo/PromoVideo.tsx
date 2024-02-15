import { VideoControls } from '~/components/VideoControls'
import styles from './PromoVideo.module.css'

export const PromoVideo = () => {
  return (
    <VideoControls color='hsl(0 0% 100%)'>
      <video
        className={styles.video}
        src='/videos/promo/man-nflteaser.mp4'
        autoPlay
        muted
        loop
      ></video>
    </VideoControls>
  )
}
