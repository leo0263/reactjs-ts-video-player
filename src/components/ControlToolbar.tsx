import styled from "styled-components";
import PlayButton from "./PlayButton";
import { useContext } from "react";
import { VideoPlayerContext } from "../context";
import { motion } from 'framer-motion';


const StyledVideoControl = styled(motion.div)<{ isPlaying?: boolean }>`
    position: absolute;
    width: 100%;
    color: #eee;
    bottom: 0rem;
    background: #ffffff00;
    background: linear-gradient(180deg, #ffffff00, #010101);
    ${(props) => (!props.isPlaying ? 'opacity: 1 !important' : '')};
`;

const ControlToolbar = () => {
    const { isPlaying } = useContext(VideoPlayerContext);

    return (
        <StyledVideoControl className="video-controls" isPlaying={isPlaying}>
            <PlayButton />
        </StyledVideoControl>      
    );
};

export default ControlToolbar;