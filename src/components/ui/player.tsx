import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  PauseIcon,
  ArrowDownIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";
import {
  ClockIcon,
  EyeIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { BiComment, BiVolume, BiVolumeMute } from "react-icons/bi";
import { FaSliders } from "react-icons/fa6";

interface PlayerProps {
  src: string;
}

export const MusicPlayer: React.FC<PlayerProps> = ({ src }) => {
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

export const VideoPlayer: React.FC<PlayerProps> = ({ src }) => {
  const vidRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);
  const [volume, setVolume] = React.useState<number>(1);

  const handlePlayPause = () => {
    if (vidRef.current) {
      if (vidRef.current.paused) {
        vidRef.current.play();
        setIsPlaying(true);
      } else {
        vidRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMute = () => {
    if (vidRef.current) {
      vidRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (vidRef.current) {
      const currentTime = vidRef.current.currentTime;
      const duration = vidRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleSeek = (e) => {
    if (vidRef.current) {
      const newTime = (e.target.value / 100) * vidRef.current.duration;
      vidRef.current.currentTime = newTime;
      setProgress(e.target.value);
    }
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    vidRef.current.volume = newVolume;
  };

  React.useEffect(() => {
    if (vidRef.current.paused) {
      setIsPlaying(false);
    }
  }, [vidRef.current && vidRef.current.paused]);

  return (
    <div className="video_player_cont">
      <div className="player">
        <video
          ref={vidRef}
          onTimeUpdate={handleTimeUpdate}
          src={src}
          onClick={handlePlayPause}></video>
        <div className="controllers">
          <div className="playpause">
            {isPlaying ? (
              <PauseIcon className="icon" onClick={handlePlayPause} />
            ) : (
              <PlayIcon className="icon" onClick={handlePlayPause} />
            )}
          </div>

          <div className="range">
            <input
              type="range"
              name=""
              min={0}
              max={100}
              value={progress}
              style={{
                background: `linear-gradient(to right, #dc1937 0%, #dc1937 ${progress}%, #323d46 ${progress}%, #323d46 100%)`,
              }}
              onChange={handleSeek}
              id=""
            />
          </div>

          <div className="timer">
            <span>
              {formatTime(vidRef.current && vidRef.current.currentTime)}
            </span>
            /
            <span>{formatTime(vidRef.current && vidRef.current.duration)}</span>
          </div>

          <div className="volume">
            {isMuted ? (
              <BiVolumeMute size={20} onClick={handleMute} />
            ) : (
              <BiVolume size={20} onClick={handleMute} />
            )}
            <input
              type="range"
              name=""
              min={0}
              max={100}
              value={isMuted ? 0 : volume}
              style={{
                background: `linear-gradient(to right, #dc1937 0%, #dc1937 ${volume}%, #323d46 ${volume}%, #323d46 100%)`,
              }}
              onChange={handleVolume}
              id="" // id="volume"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="src">
          <h5>{vidRef.current && vidRef.current?.src}</h5>
        </div>

        <div className="poster">
          <div className="img_cont">
            <img
              src="https://avatars.githubusercontent.com/u/101636035?v=4"
              alt="poster"
            />
          </div>

          <div className="text">
            <a href="">Peter Dumbari</a>
            <div className="statistic">
              <div className="items">
                <div className="item">
                  <div className="icon_cont">
                    <ClockIcon className="icon" />
                  </div>
                  <div className="text">
                    <p>
                      20/10/2024
                      <span className="lab">Posted</span>
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon_cont">
                    <HandThumbUpIcon className="icon" />
                  </div>
                  <div className="text">
                    <p>
                      {30}
                      <span className="lab">Likes</span>
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon_cont">
                    <BiComment className="icon" />
                  </div>
                  <div className="text">
                    <p>
                      {2}
                      <span className="lab">Comments</span>
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon_cont">
                    <EyeIcon className="icon" />
                  </div>
                  <div className="text">
                    <p>
                      {34}
                      <span className="lab">Views</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="download">
                <button>
                  Download <ArrowDownIcon className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SimpleVideoPlayer: React.FC<PlayerProps> = ({ src }) => {
  const vidRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);

  const handlePlayPause = () => {
    if (vidRef.current) {
      if (vidRef.current.paused) {
        vidRef.current.play();
        setIsPlaying(true);
      } else {
        vidRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  React.useEffect(() => {
    if (vidRef.current.paused) {
      setIsPlaying(false);
    }
  }, [vidRef.current && vidRef.current.paused]);

  const handleMute = () => {
    if (vidRef.current) {
      vidRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (vidRef.current) {
      const currentTime = vidRef.current.currentTime;
      const duration = vidRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSeek = (e) => {
    if (vidRef.current) {
      const newTime = (e.target.value / 100) * vidRef.current.duration;
      vidRef.current.currentTime = newTime;
      setProgress(e.target.value);
    }
  };
  return (
    <div className="simple_vid_cont">
      <div className="player">
        <video ref={vidRef} onTimeUpdate={handleTimeUpdate} src={src}></video>

        <div className="range">
          <input
            type="range"
            name=""
            min={0}
            max={100}
            value={progress}
            style={{
              background: `linear-gradient(to right, #dc1937 0%, #dc1937 ${progress}%, #323d46 ${progress}%, #ffffff21 100%)`,
            }}
            onChange={handleSeek}
          />
        </div>

        <div className="overlay"></div>
        <div className="action">
          <button>Discover more</button>
        </div>
      </div>
      <div className="info">
        <div className="src">
          <p>{vidRef.current && vidRef.current.src.slice(0, 35)}...</p>
        </div>
        <div className="icon_cont">
          {isPlaying ? (
            <PauseIcon className="icon" onClick={handlePlayPause} />
          ) : (
            <PlayIcon className="icon" onClick={handlePlayPause} />
          )}
        </div>
      </div>
    </div>
  );
};
