import { ParallaxContainer } from '~/components/parallax-container'
import { VideoControls } from '~/components/ui/video-controls'
import styles from './hero-video.module.css'

export const HeroVideo = () => {
  return (
    <ParallaxContainer blockSize='80dvh'>
      <VideoControls>
        <video
          className={styles.video}
          src='/videos/hero/man-newin.mp4'
          autoPlay
          muted
          loop
        ></video>
      </VideoControls>
    </ParallaxContainer>
  )
}
