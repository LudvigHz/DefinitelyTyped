import * as React from 'react';

interface TimeRanges {
    length: Readonly<number>;
    start(): number;
    end(): number;
}

interface PlayerProps extends React.HTMLProps<HTMLVideoElement> {
    width?: string | number;
    height?: string | number;
    fluid?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    aspectRatio?: string;
    className?: string;
    videoId?: string;
    startTime?: number;
    loop?: boolean;
    autoPlay?: boolean;
    src?: string;
    poster?: string;
    preload?: 'auto' | 'metadata' | 'none';
}

interface PlayerState {
    currentSrc: string;
    duration: number;
    currentTime: number;
    seekingTime: number;
    buffered: TimeRanges;
    waiting: boolean;
    seeking: boolean;
    paused: boolean;
    autoPaused: boolean;
    ended: boolean;
    playbackRate: number;
    muted: boolean;
    volume: number;
    readyState: number;
    networkState: number;
    videoWidth: number;
    videoHeight: number;
    hasStarted: boolean;
    userActivity: boolean;
    isActive: boolean;
    isFullscreen: boolean;
    videoId: string;
}

declare class Player extends React.Component<PlayerProps> {
    /**
     * Get the player state
     */
    getState(): PlayerState;

    /**
     * Set video to playing.
     */
    play(): void;

    /**
     * Set video to paused.
     */
    pause(): void;

    /**
     * Re-load the video. Ex. when changing the source.
     */
    load(): void;

    /**
     * Add a text track.
     */
    addTextTrack(...args: ReadonlyArray<any>): void;

    /**
     * Check if the browser can play a video.
     */
    canPlayType(...args: ReadonlyArray<any>): boolean;

    /**
     * Seek the video to a specific time in seconds.
     */
    seek(time: number): void;

    /**
     * Seek forwards in seconds.
     */
    forward(time: number): void;

    /**
     * Seek backwards in time.
     */
    replay(time: number): void;

    /**
     * Toggle player fullscreen.
     */
    toggleFullscreen(): void;

    /**
     * Register a callback to listen to state changes in the video.
     */
    subscribeToStateChange(listener: (state: PlayerState, prevState: PlayerState) => any): void;
}

export default Player;
