import { useContext, useEffect, useRef } from 'react';
import { VideoPlayerContext, VideoPlayerDispatcher } from "../context";
import { ON_PLAY_CLICK } from "../context/actions";

const Video = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isPlaying, isMuted, volume } = useContext(VideoPlayerContext);
    const dispatch = useContext(VideoPlayerDispatcher);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;
            if (isPlaying) video.play();
            else video.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);
    
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    const onPlayButtonClick = () => {
        dispatch({ type: ON_PLAY_CLICK, payload: !isPlaying});
    }

    return (
        <div onClick={onPlayButtonClick} className="video-player-container">
            <video 
                ref={videoRef}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
            />
        </div>
    );
  };  

  export default Video;