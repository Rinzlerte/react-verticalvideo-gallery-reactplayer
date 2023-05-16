import ReactPlayer from 'react-player';
import './videocard.css';

// eslint-disable-next-line react/prop-types
const VideoCard = ({src}) => {
  return (
    <div className="videocontainer">
        <div className="video-staand">
            {
                !src ? null :  
                <ReactPlayer
                    className="rotated"
                    url={src}
                    width="100%"
                    height="auto"
                    controls={true}
                    loop
                />
            }
        </div>
    </div>
  )
}

export default VideoCard



