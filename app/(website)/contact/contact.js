"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import LargeText from "@/components/LargeText";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "2f0b5c82-98ca-40c4-968e-4ac84edb4438";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Frank Portfolio",
      subject: "New Contact Message from Frank Portfolio"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container large alt>
      <div>
        <LargeText h1="Get In Touch" h2="Get In Touch Get In Touch" color="#ff3c00" />
      </div>
      <div className="my-10 grid md:grid-cols-2 lg:max-w-5xl mx-auto w-full lg:px-0 px-8">
        <div className="my-10">
          {/* <h2 className="text-3xl font-semibold dark:text-white text-[#ff3c00] impact uppercase">
            HAPPY TO HELP
          </h2> */}
          <p className="dm-sans-med mt-5 max-w-sm text-xl text-[#ff3c00]">
            Please get in touch via the form below, I will get back to you
            as soon as possible. I look forward to hearing from you! 
          </p>

          <div className="dm-sans-med mt-5">
            <div className="mt-2 flex items-center space-x-2 text-[#ff3c00] dark:text-gray-400">
              <MapPinIcon className="h-4 w-4" />
              <span>Seattle, WA</span>
            </div>
            {settings?.email && (
              <div className="mt-2 flex items-center space-x-2 text-[#ff3c00] dark:text-gray-400">
                <EnvelopeIcon className="h-4 w-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="mt-2 flex items-center space-x-2 text-[#ff3c00] dark:text-gray-400">
                <PhoneIcon className="h-4 w-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`dm-sans-med w-full rounded-md border bg-transparent px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200  ${
                  errors.name
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`dm-sans-med w-full rounded-md border bg-transparent px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200  ${
                  errors.email
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`h-36 w-full rounded-md border px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200 bg-transparent dm-sans-med ${
                  errors.message
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "dm-sans-med border-gray-300 bg-transparent ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("message", {
                  required: "Enter your Message"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black centima uppercase">
              {isSubmitting ? (
                <svg
                  className="mx-auto h-5 w-5 animate-spin text-white dark:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-center text-sm text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-center text-sm text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}

          
        </div>
      </div>
    </Container>
  );
}
