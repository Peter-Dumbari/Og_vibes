import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useRef, useState } from "react";
import { AlbumCard, EventCard } from "./card";

interface CarouselProps {
  item: {
    image: string;
    album: string;
    likes: number;
    track: number;
    artist: string;
    title: string;
    description: string;
  }[];
}

//Carousel

interface EventCarouselProps {
  item: {
    event: string;
    eventPoster: string;
    eventTime: string;
    evenDate: string;
    address: string;
  }[];
}

export const Carousel: React.FC<CarouselProps> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const slideForward = () => {
    setCurrentIndex((prev) => (prev + 1) % item.length);
  };

  const startSliding = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(slideForward, 1000 * 5); // Slide every 5 seconds
    }
  };

  const pauseSliding = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSliding();
    return () => pauseSliding(); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Trigger the shake animation on title, description, and buttons when text changes
    setIsShaking(true);
    const shakeTimeout = setTimeout(() => setIsShaking(false), 500); // Shake duration of 0.5s

    return () => clearTimeout(shakeTimeout);
  }, [currentIndex]);

  return (
    <div
      className="carousel_cont relative overflow-hidden w-full"
      onMouseEnter={() => pauseSliding()} // Corrected to call the function
      onMouseLeave={startSliding} // Restarts sliding when mouse leaves
      tabIndex={0}
      aria-live="polite">
      <div className="carousel-img relative w-full h-full">
        {item.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[100ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}>
            <img
              className="w-full h-full object-cover"
              src={slide.image}
              alt={slide.title}
            />
            <div className="overlay absolute"></div>
          </div>
        ))}

        <div className="carousel_body">
          <div
            className={`text ${
              isShaking ? "animate-flip-up delay-150 duration-500" : ""
            }`}>
            <h2 className="text-black text-2xl font-bold">
              {item[currentIndex].title}
            </h2>
            <p className="description text-black text-lg">
              {item[currentIndex].description}
            </p>
          </div>
          <div
            className={`btns flex space-x-4 ${
              isShaking && "animate-rotate-x  delay-150 duration-500"
            }`}>
            <button className="">Continue</button>
            <button className="">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

//Album Carousel

export const AlbumCarousel: React.FC<CarouselProps> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Calculate number of visible cards based on screen size
  const [visibleItems, setVisibleItems] = useState(3); // Default for desktop

  // Update visible items based on screen width
  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleItems(1); // Mobile view
    } else if (width < 1024) {
      setVisibleItems(2); // Tablet view
    } else {
      setVisibleItems(3); // Desktop view
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const transformValue = -(currentIndex * (100 / visibleItems));

  // Update the number of visible items based on screen width

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    setCurrentIndex(
      // (prevIndex) => (prevIndex + 1) % Math.ceil(item.length / visibleItems)
      (prevIndex) =>
        prevIndex === item.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="album-carousel">
      <div
        className="carousel_inner transition-transform duration-500"
        style={{ transform: `translateX(${transformValue}%)` }}>
        {item.map((item, index) => (
          <div
            key={index}
            className="carousel-item flex-none"
            style={{ flex: `0 0 ${100 / visibleItems}%` }}>
            <AlbumCard
              title={item.title}
              description={item.description}
              artist={item.artist}
              image={item.image}
              likes={item.likes}
              tracks={item.track}
              album={item.album}
            />
          </div>
        ))}
      </div>
      <div className="carousel-footer">
        <div className="line"></div>
        <div className="btns">
          <button onClick={() => goToPrevSlide()}>
            <ChevronLeftIcon className="h-6 w-6 " />
          </button>
          <button onClick={() => goToNextSlide()}>
            <ChevronLeftIcon className="h-6 w-6 rotate-180" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
    </div>
  );
};

//Event Carousel
export const EventCarousel: React.FC<EventCarouselProps> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState(3); // Default for desktop

  const transformValue = -((currentIndex * 100) / visibleItems);

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    setCurrentIndex(
      // (prevIndex) => (prevIndex + 1) % Math.ceil(item.length / visibleItems)
      (prevIndex) => (prevIndex === item.length - 1 ? 0 : prevIndex + 1)
    );
  };

  // Function to navigate to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.length - 1 : prevIndex - 1
    );
  };

  // Update visible items based on screen width
  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleItems(1); // Mobile view
    } else if (width < 1024) {
      setVisibleItems(2); // Tablet view
    } else {
      setVisibleItems(3); // Desktop view
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  return (
    <div className="event-carousel">
      <div className="event_car_cont">
        <div
          className="event_carousel_inner transition-transform duration-500"
          style={{ transform: `translateY(${transformValue}%)` }}>
          <div className="event_carousel-item">
            {item.map((item, index) => (
              <EventCard
                key={index}
                name={item.event}
                eventDate={item.evenDate}
                eventPoster={item.eventPoster}
                eventTime={item.eventTime}
                address={item.address}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="event_carousel-footer">
        <div className="line"></div>
        <div className="btns">
          <button onClick={() => goToPrevSlide()}>
            <ChevronLeftIcon className="h-6 w-6 " />
          </button>
          <button onClick={() => goToNextSlide()}>
            <ChevronLeftIcon className="h-6 w-6 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};
