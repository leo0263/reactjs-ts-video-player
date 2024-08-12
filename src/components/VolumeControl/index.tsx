import styled from "styled-components";
import MuteButton from "./MuteButton";

const StyledVolumeControl = styled.div`
    width: 20%;
    display: flex;
`;

const VolumeControl = () => {
    return (
        <StyledVolumeControl className="volume-control">
            <MuteButton />
            
        </StyledVolumeControl>
    );
};

export default VolumeControl;