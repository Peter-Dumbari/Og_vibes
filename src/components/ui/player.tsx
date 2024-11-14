import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { BiVolume, BiVolumeMute } from "react-icons/bi";
import { FaSliders } from "react-icons/fa6";

interface PlayerProps {
  src: string;
}

export const Player: React.FC<PlayerProps> = ({ src }) => {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(1);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentTrackNextIndex, setCurrentTrackNextIndex] =
    React.useState<number>(0);

  const demoList = [
    { src: "path/to/song1.mp3", title: "Song 1" },
    { src: "path/to/song2.mp3", title: "Song 2" },
    { src: "path/to/song3.mp3", title: "Song 3" },
  ];

  React.useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
      setIsLoading(false);
    });

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  });

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const nextTrack = () => {
    setCurrentTrackNextIndex((prevIndex) => (prevIndex + 1) % demoList.length);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    setCurrentTrackNextIndex((prevIndex) =>
      prevIndex === 0 ? demoList.length - 1 : prevIndex - 1
    );
    setCurrentTime(0);
  };

  return (
    <div className="player_cont">
      <div className="music_name">
        <h3>Davido</h3>
        <span>-</span>
        <p>FEM</p>
      </div>
      <audio ref={audioRef} src={src}></audio>
      <div className="music_inner">
        <div className="time">
          <span>{formatTime(currentTime)}</span>/
          <span>{formatTime(duration)}</span>
        </div>
        <div className="controls">
          <ChevronDoubleLeftIcon onClick={prevTrack} className="icon" />
          {isPlaying ? (
            <PauseIcon className="icon" onClick={togglePlayPause} />
          ) : (
            <PlayIcon className="icon" onClick={togglePlayPause} />
          )}
          <ChevronDoubleRightIcon onClick={nextTrack} className="icon" />
        </div>

        <div className="mute_shuffle">
          {isMuted ? (
            <BiVolumeMute
              size={25}
              onClick={toggleMute}
              className="icon text-primary"
            />
          ) : (
            <BiVolume size={25} onClick={toggleMute} className="icon" />
          )}
          <FaSliders size={25} className="icon rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Player;
