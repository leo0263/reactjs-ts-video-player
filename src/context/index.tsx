import { Reducer, useReducer, Dispatch, createContext, ReactElement } from "react";
import { ON_PLAY_CLICK, ON_MUTE_CLICK, ON_VOLUME_CLICK } from './actions';

type VideoPlayerState = {
    isPlaying: boolean;
    isMuted: boolean;
    volume: number;
}

type VideoPlayerAction = {
    type: string;
    payload?: any;
}

type PlayerProviderProps = {
    children?: ReactElement;
};

export const initialState: VideoPlayerState = {
    isPlaying: false,
    isMuted: false,
    volume: 1,
}

export const VideoPlayerContext = createContext <VideoPlayerState> (initialState);
export const VideoPlayerDispatcher = createContext<Dispatch<VideoPlayerAction>> ((() => undefined) as Dispatch<VideoPlayerAction>);
export const videoPlayerReducer = (state: VideoPlayerState, action: VideoPlayerAction) => {
    switch (action.type) {
        case ON_PLAY_CLICK: {
            return { ...state, isPlaying: action.payload};
        }

        case ON_MUTE_CLICK: {
            return { ...state, isMuted: action.payload};
        }

        case ON_VOLUME_CLICK: {
            return { ...state, volume: action.payload};
        }

        default: throw Error("Invalid action: " + action.type);
    }
};
export const VideoPlayerProvider = ({ children }: PlayerProviderProps) => {
    const [state, dispatch] = useReducer<Reducer<VideoPlayerState, VideoPlayerAction>> (videoPlayerReducer, initialState)
    return (
        <VideoPlayerContext.Provider value={state}>
            <VideoPlayerDispatcher.Provider value={dispatch}>
                {children}
            </VideoPlayerDispatcher.Provider>
        </VideoPlayerContext.Provider>
    )
}

