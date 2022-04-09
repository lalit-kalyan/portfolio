import React, { useRef, useState } from "react";
import "./contact.scss";
import Email from "../../assets/email.png";
import Whatsapp from "../../assets/whatsapp.png";
import Insta from "../../assets/insta.png";
import Back from "../../assets/login03.jpg";

import emailjs from "emailjs-com";

import { BsWhatsapp, BsInstagram, BsEnvelope } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMeassage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o8rdgt3",
        "template_sbahbrw",
        form.current,
        "user_ehybL9aIF87QW9oZoqGLG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName(" ");
    setEmail(" ");
    setMeassage(" ");
  };

  return (
    <div id="contact" className="contact">
      <div className="contactLeft">
        <div className="contactLeftUpper">
          <div className="leftUpperImg">
            <img src={Email} alt="" />
          </div>
          <div className="leftUpperText">
            <i>
              <BsEnvelope />
            </i>
            <p>E-mail</p>
            <h3>
              <a href="mailto:lalit.rishikalyan@gmail.com">Send Me a Message</a>
            </h3>
          </div>
        </div>

        <div className="contactLeftlower">
          <div className="leftLowerLeft">
            <div className="leftLowerImg">
              <img src={Insta} alt="" />
            </div>

            <div className="leftlowerText">
              <i>
                <BsInstagram />
              </i>
              <p>Messenger</p>
              <h3>
                <a>Send me a Message</a>
              </h3>
            </div>
          </div>

          <div className="leftLowerRight">
            <div className="leftLowerImg">
              <img src={Whatsapp} alt="" />
            </div>
            <div className="leftlowerText">
              <i>
                <BsWhatsapp />
              </i>
              <p> Whatsapp Message</p>
              <h3>
                <a href="https://api.whatsapp.com/send?phone=7206169603">
                  Send me a Message
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contactRight">
        <div className="contactRightUpper">
          <img src={Back} alt="" />

          <div className="green"></div>

          <div className="contectRightText">
            <h3>Contact</h3>
            <p>Send me a Message</p>
          </div>
        </div>

        {/* input form........................................................... */}
        <form ref={form} onSubmit={sendEmail} className="contactRightLower">
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            className="contactName"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            className="contactEmail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            name="message"
            rows="10"
            placeholder="write what is on your Mind"
            onChange={(e) => setMeassage(e.target.value)}
            value={message}
          ></textarea>
          <button>Send</button>
        </form>
      </div>
      {/* input form........................................................... */}
    </div>
  );
};

export default Contact;
