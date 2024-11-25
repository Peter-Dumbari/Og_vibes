import React from "react";
import Wrapper from "../components/ui/wrapper";
import PaginationComponent from "../components/ui/pagination";
import { EventMainCard } from "../components/ui/card";

const Event = () => {
  const dummyEvents = [
    {
      id: 1,
      title: "Event 1",
      description: "Event 1 Description",
      date: "2021-09-01",
      time: "12:00",
      location: "Location 1",
      price: 100,
      image:
        "https://img.freepik.com/premium-photo/man-sits-grass-with-drum-front-him_564714-31677.jpg?ga=GA1.1.1972802843.1703769385&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Event 2",
      description: "Event 2 Description",
      date: "2021-09-02",
      time: "12:00",
      location: "Location 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Event 3",
      description: "Event 3 Description",
      date: "2021-09-03",
      time: "12:00",
      location: "Location 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const eventPerPage = 2;

  const totalPage = Math.ceil(dummyEvents.length / eventPerPage);

  const startIndex = (currentPage - 1) * eventPerPage;
  const currentEvents = dummyEvents.slice(
    startIndex,
    startIndex + eventPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="event_container">
      <div className="banner">
        <h3>Host Events, Sell Tickets, or Buy Tickets</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          possimus ipsam optio, veniam quas alias dignissimos blanditiis aliquam
          sed quibusdam.
        </p>
      </div>

      <Wrapper>
        <div className="events_cont">
          {currentEvents.map((event) => (
            <div key={event.id} className="events">
              <EventMainCard
                name={event.title}
                address={event.location}
                eventTime={event.time}
                eventDate={event.date}
                eventPoster={event.image}
              />
            </div>
          ))}
        </div>
        <PaginationComponent
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Wrapper>
    </div>
  );
};

export default Event;
