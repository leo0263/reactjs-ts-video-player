import { useContext, useEffect, useRef } from "react";
import { HiMiniPlay, HiMiniPause } from "react-icons/hi2";
import styled, { keyframes } from "styled-components";
import { VideoPlayerContext } from "../context";

const bezelFadeoutKeyframe = keyframes`
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(2);
    }
`;

const StyledBezelContainer = styled.div`
  position: absolute;
  top: 44%;
  left: 44%;
  color: #cacaca;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 12px;
  border-radius: 50%;
  animation: ${bezelFadeoutKeyframe} 0.5s linear 1 normal forwards;
  display: none;
`;

const BezelIcon = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const { isPlaying } = useContext(VideoPlayerContext);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    if (iconContainerRef.current) {
      iconContainerRef.current.style.display = "block";
    }

    const timerId = setTimeout(() => {
      if (iconContainerRef.current) {
        iconContainerRef.current.style.display = "none";
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [isPlaying]);

  return (
    <StyledBezelContainer ref={iconContainerRef}>
        {isPlaying ? <HiMiniPause size="35px" /> : <HiMiniPlay size="35px" />}
    </StyledBezelContainer>
  );
};

export default BezelIcon;
