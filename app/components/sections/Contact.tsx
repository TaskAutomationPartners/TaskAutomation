import { Form } from "@remix-run/react";
import React from "react";

type Props = {
  title: string;
  contactDescription: string;
  actionData: { success?: boolean; error?: boolean };
};

export default function Contact({
  title,
  contactDescription,
  actionData,
}: Props) {
  return (
    <div id="contact" className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 p-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-base-100">
              {title}
            </h2>
            <p className="text-base-100">{contactDescription}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Form method="post">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-base-100"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="mt-1 p-2 w-full border rounded-md"
                  id="name"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-base-100"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="mt-1 p-2 w-full border rounded-md"
                  id="company"
                  name="company"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-base-100"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="mt-1 p-2 w-full border rounded-md"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-base-100"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="mt-1 p-2 w-full border rounded-md"
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-base-100"
                  htmlFor="message"
                >
                  How can we help you?
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md"
                  id="message"
                  name="message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
                {actionData && actionData?.success && (
                  <div className="w-full p-4 my-4 border-slate-500 shadow-xl bg-green-600 text-slate-50 text-lg justify-center">
                    Thank you for your inquiry. We will be in touch soon.
                  </div>
                )}
                {actionData && actionData?.error && (
                  <div className="w-full p-4 my-4 border-slate-500 shadow-xl bg-red-600 text-slate-50 text-lg justify-center">
                    There was an error submitting your inquiry. Please try again
                    later.
                  </div>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
