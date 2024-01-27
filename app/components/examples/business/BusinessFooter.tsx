import React from 'react'

type Props = {}

export default function BusinessFooter({}: Props) {
  return (
    <div className="bg-black text-white py-8">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="mt-2">1234 Construction Way</p>
      <p>Cityville, State 56789</p>
      <p>Email: info@constructionco.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  </div>
  )
}