import styled from "styled-components";
import { VideoPlayerProvider } from "../context";
import Video from "./Video";
import BezelIcon from "./BezelIcon";

const StyledVideoContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const VideoPlayer = () => {
  return (
    <VideoPlayerProvider>
      <StyledVideoContainer>
          <Video />
          <BezelIcon />
      </StyledVideoContainer>
    </VideoPlayerProvider>
  );
};

export default VideoPlayer;
