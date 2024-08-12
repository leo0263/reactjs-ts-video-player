import styled from "styled-components";
import { VideoPlayerProvider } from "../context";
import Video from "./Video";
import BezelIcon from "./BezelIcon";
import ControlToolbar from "./ControlToolbar";
import VolumeControl from "./VolumeControl";

const StyledVideoContainer = styled.div`
  position: relative;
  width: fit-content;

  .video-controls {
      opacity: 0;
  }

  &:hover .video-controls {
      opacity: 1;
  } 
`;

const VideoPlayer = () => {
  return (
    <VideoPlayerProvider>
      <StyledVideoContainer>
        <Video />
        <BezelIcon />
        <ControlToolbar />
      </StyledVideoContainer>
    </VideoPlayerProvider>
  );
};

export default VideoPlayer;
