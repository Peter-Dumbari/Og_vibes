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

      <section className="contact_means">
        <div className="inner">
          <div className="means">
            <div className="headin">
              <MapPinIcon className="icon" />
              <h4>Address</h4>
            </div>

            <div className="details">
              <p>
                Garrison office: No.5 Ogbunabali Road, Port Harcourt, Rivers
                State, NG
              </p>

              <p>
                Postal Address: P.O. Box 1234, Port Harcourt, Rivers State, NG
              </p>
            </div>
          </div>
          <div className="means">
            <div className="headin">
              <PhoneIcon className="icon" />
              <h4>Phone</h4>
            </div>

            <div className="details">
              <p>WhatsApp: +2348169204689</p>

              <p>Calls: +2348052027785</p>
            </div>
          </div>
          <div className="means">
            <div className="headin">
              <EnvelopeOpenIcon className="icon" />
              <h4>Email</h4>
            </div>

            <div className="details">
              <p>peterdumbari08@gmail.com</p>

              <p>dummytwiz@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="message">
          <h3>Send Us a Message</h3>

          <div className="message_inner">
            <div className="contact_message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                officia beatae. Dolorem praesentium modi quod ratione
                reiciendis, sunt neque assumenda similique rem excepturi
                obcaecati quo debitis quos asperiores quaerat pariatur.
              </p>
            </div>

            <div className="form_cont">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
