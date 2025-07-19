"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import paintSplash from "../../lottie/paint-splash.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: "Thank you for contacting us! We will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setModalOpen(true);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "There was an error submitting your form. Please try again.",
      });
      setModalOpen(true);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen overflow-x-hidden">
      {/* Macro Ink Animated Background */}
      <motion.div
        className="pointer-events-none fixed inset-0 w-full h-full z-0"
        initial={false}
        animate={{}}
      >
        {/* Red blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-35"
          style={{ background: "#ff1744", width: 320, height: 320, top: 80, left: 40 }}
          animate={{
            y: [0, 50, -35, 0],
            x: [0, 35, -25, 0],
            scale: [1, 1.18, 0.93, 1],
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Yellow blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-22"
          style={{ background: "#ffd600", width: 250, height: 250, top: 220, right: 80 }}
          animate={{
            y: [0, -38, 38, 0],
            x: [0, -28, 28, 0],
            scale: [1, 1.13, 0.87, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blue blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-23"
          style={{ background: "#2979ff", width: 310, height: 310, bottom: 90, left: 140 }}
          animate={{
            y: [0, 38, -38, 0],
            x: [0, 28, -28, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Green blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#00e676", width: 200, height: 200, bottom: 120, right: 120 }}
          animate={{
            y: [0, -28, 28, 0],
            x: [0, 18, -18, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Magenta blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#d500f9", width: 160, height: 160, top: 420, left: "54%" }}
          animate={{
            y: [0, 18, -18, 0],
            x: [0, -12, 12, 0],
            scale: [1, 1.09, 0.91, 1],
          }}
          transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Extra subtle blob for depth */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-10"
          style={{ background: "#ffd600", width: 100, height: 100, top: 500, left: "70%" }}
          animate={{
            y: [0, 10, -10, 0],
            x: [0, 8, -8, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft white overlay for luminosity */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-4 pt-36 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-900/80">
              Have questions about our products or services? We're here to help! Get in touch with our team.
            </p>
          </motion.div>
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <Image
              src="/images/contact-bg.jpg"
              alt="Contact Us"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/3 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-800">Get In Touch</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Address"
                  value="Juba Central Equatoria State, South Sudan"
                />
                <ContactInfo
                  icon={
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  label="Phone"
                  value="+211911011236 / +211918558844"
                />
                <ContactInfo
                  icon={
                    <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  label="Email"
                  value="acpaintltd@gmail.com"
                />
              </div>
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialIcon
                    href="#"
                    label="Facebook"
                    svg={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    }
                  />
                  <SocialIcon
                    href="#"
                    label="Instagram"
                    svg={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.133.036.259.077.383.122a4.999 4.999 0 011.385 1.03 4.99 4.99 0 011.031 1.385c.045.124.086.25.121.383.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.999 4.999 0 01-1.537 2.209 4.998 4.998 0 01-2.209 1.537c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.998 4.998 0 01-1.385-.122 4.99 4.99 0 01-1.384-1.03 4.99 4.99 0 01-1.03-1.385c-.045-.124-.086-.25-.122-.383-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.036-.133.077-.259.122-.383a4.99 4.99 0 011.03-1.384 4.99 4.99 0 011.385-1.03c.124-.046.25-.087.383-.123.636-.247 1.363-.416 2.427-.465C9.516 2.013 9.871 2 12.3 2h.015zm0 1.802h-.015c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.015c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.747.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344a3.097 3.097 0 00.748-1.15 3.098 3.098 0 00.747-1.15c.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-1.49-1.49c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    }
                  />
                  <SocialIcon
                    href="#"
                    label="Twitter"
                    svg={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-2/3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-800">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name *"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    popover="Please enter your full name."
                  />
                  <FormField
                    label="Email Address *"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    popover="We'll never share your email."
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    popover="Optional, but helps us reach you faster."
                  />
                  <FormField
                    label="Subject *"
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    popover="What is your inquiry about?"
                  />
                </div>
                <div>
                  <FormField
                    label="Message *"
                    id="message"
                    name="message"
                    as="textarea"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    popover="How can we help you?"
                  />
                </div>
                <div>
                  <motion.button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      formStatus.isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Success/Error */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <Lottie animationData={paintSplash} loop={false} />
            </div>
            <Dialog.Title className="text-2xl font-bold mb-2 text-blue-700">
              {formStatus.isSubmitted ? "Message Sent!" : "Oops!"}
            </Dialog.Title>
            <Dialog.Description className="mb-4 text-gray-700">
              {formStatus.message}
            </Dialog.Description>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow hover:scale-105 transition"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Our Location</h2>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 via-white to-purple-100">
            <iframe
              title="AC Paints Location"
              src="https://www.google.com/maps?q=Juba, South Sudan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Info Card
function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 rounded-full p-3 mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-blue-800">{label}</h3>
        <p className="text-gray-700 mt-1">{value}</p>
      </div>
    </div>
  );
}

// Social Icon Button with Tooltip
function SocialIcon({ href, label, svg }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <a
          href={href}
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-3 rounded-full transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {svg}
        </a>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          align="center"
          className="px-3 py-1 rounded bg-blue-700 text-white text-xs shadow-lg z-50"
          sideOffset={8}
        >
          {label}
          <Popover.Arrow className="fill-blue-700" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

// Form Field with optional Popover
function FormField({
  label,
  id,
  name,
  type = "text",
  as,
  rows,
  value,
  onChange,
  required,
  popover,
}) {
  return (
    <div>
      <div className="flex items-center mb-1">
        <label htmlFor={id} className="block text-sm font-medium text-blue-900 mr-2">
          {label}
        </label>
        {popover && (
          <Popover.Root>
            <Popover.Trigger asChild>
              <button
                type="button"
                className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 ml-1"
                tabIndex={-1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                side="top"
                align="center"
                className="px-3 py-1 rounded bg-blue-700 text-white text-xs shadow-lg z-50"
                sideOffset={8}
              >
                {popover}
                <Popover.Arrow className="fill-blue-700" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        )}
      </div>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
        />
      )}
    </div>
  );
}