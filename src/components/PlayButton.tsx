import { useContext } from "react";
import { VideoPlayerContext, VideoPlayerDispatcher } from "../context";
import { ON_PLAY_CLICK } from "../context/actions";
import { StyledIconButton } from "../utils";
import { HiMiniPlay, HiMiniPause } from "react-icons/hi2";


const PlayButton = () => {
    const { isPlaying } = useContext(VideoPlayerContext);
    const dispatch = useContext(VideoPlayerDispatcher);
    const onPlayPause = () => {
        dispatch({ type: ON_PLAY_CLICK, payload: !isPlaying});
    };

    return (
        <StyledIconButton onClick={onPlayPause}>
            {isPlaying?  <HiMiniPause size="25px" /> : <HiMiniPlay size="25px" />}
        </StyledIconButton>
    );
};

export default PlayButton;