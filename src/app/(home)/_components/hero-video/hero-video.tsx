import { VideoControls } from '~/components/ui/video-controls'
import styles from './hero-video.module.css'

export const HeroVideo = () => {
  return (
    <>
      <span></span>
      {/* This span is to avoid this warning: Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element */}
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
    </>
  )
}
