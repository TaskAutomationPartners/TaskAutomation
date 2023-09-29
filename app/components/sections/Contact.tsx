import React from 'react';

type Props = {
    title: string;
    contactDescription: string;
};

export default function Contact({ title, contactDescription }: Props) {
    return (
        <div id="contact" className="container mx-auto p-4">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-base-100">{title}</h2>
                        <p className="text-base-100">{contactDescription}</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-base-100" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    className="mt-1 p-2 w-full border rounded-md"
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-base-100" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    className="mt-1 p-2 w-full border rounded-md"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-base-100" htmlFor="email">
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
                                <label className="block text-sm font-medium text-base-100" htmlFor="message">
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
