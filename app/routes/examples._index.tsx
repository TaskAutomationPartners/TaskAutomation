import { Link } from '@remix-run/react';
import React from 'react';

type Props = {};

const cardData = [
  {
    title: 'Business',
    description: 'Build a strong online presence for your business with our web solutions.',
    imageSrc: 'images/Construction.png', // Placeholder image source
    link: '/examples/business',
  },
  {
    title: 'Storefront',
    description: 'Set up an online storefront and start selling your products today.',
    imageSrc: 'images/Ceramic.png', // Placeholder image source
    link: '/examples/storefront',
  },
];

export default function ExamplesIndex({}: Props) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
        <div className="bg-slate-100 p-8 rounded-md shadow-xl">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Explore Our Examples
        </h1>
        <p className="text-lg text-gray-600 mb-8 mx-16">
          While our primary focus is building robust applications that support your business, we also offer our customers a variety of web development services to support their business or personal projects. From customer-facing pages and client portals, to online storefronts and more, we can help you build the web presence you need to guarantee the ongoing success of your business.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <img
              className="w-full h-60 object-cover object-center"
              src={card.imageSrc}
              alt={card.title}
            />
            <div className="px-4 py-3">
              <div className="font-bold text-xl mb-2 text-gray-800">
                {card.title}
              </div>
              <p className="text-gray-600 text-base">{card.description}</p>
            </div>
            <div className="px-4 py-3">
              <Link
                to={card.link}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full block text-center"
              >
                View Example
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
