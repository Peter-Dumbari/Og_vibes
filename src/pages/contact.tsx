import { MapPinIcon } from "@heroicons/react/16/solid";
import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="banner">
        <h3>Contact OG Vibes on any deals</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          possimus ipsam optio, veniam quas alias dignissimos blanditiis aliquam
          sed quibusdam.
        </p>
      </div>

      <section className="contacts_means">
        <h3>Get in Touch</h3>
        <div className="inner">
          <div className="office_Add">
            <MapPinIcon className="icon" />
          </div>
          <div className="phone">
            <PhoneIcon className="icon" />
          </div>
          <div className="email">
            <EnvelopeOpenIcon className="icon" />
          </div>
        </div>

        <div className="form">
          <h3>Send Us a Message</h3>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
