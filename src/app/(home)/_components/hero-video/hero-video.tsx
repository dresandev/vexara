import { VideoControls } from '~/components/ui/video-controls'
import styles from './hero-video.module.css'

export const HeroVideo = () => {
  return (
    <div className={styles.fixedContainer}>
      <VideoControls>
        <video
          className={styles.video}
          src='/videos/hero/man-newin.mp4'
          autoPlay
          muted
          loop
        ></video>
      </VideoControls>
    </div>
  )
}
