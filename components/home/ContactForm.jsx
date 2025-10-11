import React from "react";
import AnimatedText from "../common/AnimatedText";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(25, "Name must be 25 characters or less")
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
        .required("Please enter your name"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address")
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          "Invalid email format"
        ),

      message: Yup.string()
        .min(20, "Message must be at least 20 characters")
        .max(500, "Message must be 500 characters or less")
        .required("Please enter your message"),
    }),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      console.log("values >>> ", values);
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full mt-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedText>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter your name"
            className="bg-[#f9f9f9] px-5 py-4 outline-none text-lg rounded-xl w-full"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-xs text-red-500">{formik.errors.name}</div>
          )}
        </AnimatedText>
        <AnimatedText>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter your email"
            className="bg-[#f9f9f9] px-5 py-4 outline-none text-lg rounded-xl w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-xs text-red-500">{formik.errors.email}</div>
          )}
        </AnimatedText>
      </div>
      <div className="w-full mt-6">
        <AnimatedText>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Write your message..."
            className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-lg outline-none"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="text-xs text-red-500">{formik.errors.message}</div>
          )}
        </AnimatedText>
      </div>

      <div className="w-full mt-5">
        <AnimatedText>
          <button
            type="submit"
            className="w-full bg-black text-white text-lg px-8 py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </AnimatedText>
      </div>
    </form>
  );
};

export default ContactForm;
