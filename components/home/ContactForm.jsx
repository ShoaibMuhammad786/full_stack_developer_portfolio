"use client";
import React, { useState } from "react";
import AnimatedText from "../common/AnimatedText";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      company: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(25, "Name must be 25 characters or less")
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
        .required("Please enter your name"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),

      message: Yup.string()
        .min(20, "Message must be at least 20 characters")
        .max(1500, "Message must be 1500 characters or less")
        .required("Please enter your message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (values.company) return;

      try {
        setLoading(true);
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          enqueueSnackbar("Message sent successfully!", { variant: "success" });
          resetForm();
        } else {
          enqueueSnackbar("Something went wrong. Try again later.", {
            variant: "error",
          });
        }
      } catch {
        enqueueSnackbar("Something went wrong. Try again later.", {
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full mt-12"
      noValidate
      aria-label="Contact form"
    >
      {/* Honeypot field (hidden from users) */}
      <input
        type="text"
        name="company"
        value={formik.values.company}
        onChange={formik.handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Name */}
        <AnimatedText>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
            aria-describedby="name-error"
            className="bg-[#f9f9f9] px-5 py-4 rounded-xl w-full text-lg outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <p id="name-error" className="text-xs text-red-500 mt-1">
              {formik.errors.name}
            </p>
          )}
        </AnimatedText>

        {/* Email */}
        <AnimatedText>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
            aria-describedby="email-error"
            className="bg-[#f9f9f9] px-5 py-4 rounded-xl w-full text-lg outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <p id="email-error" className="text-xs text-red-500 mt-1">
              {formik.errors.email}
            </p>
          )}
        </AnimatedText>
      </div>

      {/* Message */}
      <div className="mt-6">
        <AnimatedText>
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            autoComplete="off"
            placeholder="Tell me about your project..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            aria-invalid={Boolean(
              formik.touched.message && formik.errors.message
            )}
            aria-describedby="message-error"
            className="bg-[#f9f9f9] px-5 py-4 rounded-xl w-full text-lg outline-none"
          />
          {formik.touched.message && formik.errors.message && (
            <p id="message-error" className="text-xs text-red-500 mt-1">
              {formik.errors.message}
            </p>
          )}
        </AnimatedText>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <AnimatedText>
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="w-full bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:opacity-80"
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </AnimatedText>
      </div>
    </form>
  );
};

export default ContactForm;
