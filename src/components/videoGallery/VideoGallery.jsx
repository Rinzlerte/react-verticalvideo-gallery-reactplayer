import VideoCard from './VideoCard';
import video from '../../assets/video/v1.mp4'

const VideoGallery = () => {
  return (
    <div className='videocard-gallery--container'>
      <VideoCard src={video}/>
      <VideoCard src={`https://www.youtube.com/watch?v=wMmUFmytVcs`}/>
      <VideoCard src={video}/>
      <VideoCard src={video}/>
      <VideoCard src={video}/>
    </div>
  )
}

export default VideoGallery