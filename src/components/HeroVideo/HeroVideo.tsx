import { VideoControls } from '~/components/VideoControls'
import styles from './HeroVideo.module.css'

export const HeroVideo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
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
    </div>
  )
}
