// other imports...
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/send-mail/send-contact`,
        formData
      );
      if (res.data.success) {
        setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again later.");
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      setStatus(
        "An error occurred while sending the message. Please try again later."
      );
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container px-6 sm:px-10 mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-orange-600">
                Contact Us
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-gray-900 dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                We'd love to hear from you
              </h2>
              <p className="mb-9 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Whether you're a developer, a tech enthusiast, or curious about
                facial authentication and digital identity simulations, feel
                free to reach out. We're happy to collaborate or assist.
              </p>

              <InfoBox
                iconType="location"
                title="Our Location"
                content="Smart India Hackathon 2025 Prototype Team, India
"
              />

              <InfoBox
                iconType="phone"
                title="Phone Number"
                content="+91 98765 43210"
              />

              <InfoBox
                iconType="email"
                title="Email Address"
                content="faceauth.simulation@gmail.com" // Change to your working team email
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-xl dark:bg-dark-2 sm:p-12">
              <form onSubmit={handleSubmit}>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <ContactInputBox
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <ContactTextArea
                  row="6"
                  placeholder="How can we assist you?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded bg-gradient-to-r from-orange-600 to-red-500 p-3 font-semibold text-white transition duration-300 hover:opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


const ContactInputBox = ({ type, placeholder, name, value, onChange }) => (
  <div className="mb-6">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-orange-600 dark:border-dark-3 dark:bg-dark dark:text-dark-6"
    />
  </div>
);

const ContactTextArea = ({ row, placeholder, name, value, onChange }) => (
  <div className="mb-6">
    <textarea
      rows={row}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-orange-600 dark:border-dark-3 dark:bg-dark dark:text-dark-6"
    />
  </div>
);

const InfoBox = ({ iconType, title, content }) => {
  const iconMap = {
    location: (
      <svg
        className="w-6 h-6 text-orange-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" />
      </svg>
    ),
    phone: (
      <svg
        className="w-6 h-6 text-orange-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.73 3.83.73a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.33.25 2.63.73 3.83a1 1 0 01-.21 1.11l-2.4 2.85z" />
      </svg>
    ),
    email: (
      <svg
        className="w-6 h-6 text-orange-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 4H4a2 2 0 00-2 2v1l10 6 10-6V6a2 2 0 00-2-2zM4 8.03V18a2 2 0 002 2h12a2 2 0 002-2V8.03l-8 4.8-8-4.8z" />
      </svg>
    ),
  };

  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="flex items-center justify-center rounded bg-orange-100 p-3">
        {iconMap[iconType]}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
};
