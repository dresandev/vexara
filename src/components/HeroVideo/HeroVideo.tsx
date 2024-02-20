import { ParallaxContainer } from '~/components/ParallaxContainer'
import { VideoControls } from '~/components/VideoControls'
import styles from './HeroVideo.module.css'

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
