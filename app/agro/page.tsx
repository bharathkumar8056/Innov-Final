"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaInstagram, FaWhatsapp, FaFacebookF, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import ChatBot from "../components/ChatBot"
import FloatingWhatsApp from "../components/FloatingWhatsApp"

const products = [
  {
    name: "Coconut Oil",
    description: "Pure and natural coconut oil for cooking and skin care.",
    image: "https://i.ibb.co/dJgMXCGg/Coconut-Oil.jpg",
  },
  {
    name: "Sesame Oil",
    description: "Rich, nutty sesame oil perfect for Asian cuisine.",
    image: "https://i.ibb.co/4wc5PpQF/Sesameoil.jpg",
  },
  {
    name: "Ground Nut Oil",
    description: "High-quality groundnut oil for versatile cooking applications.",
    image: "https://i.ibb.co/N6MWdqtL/Groundnutoil.jpg",
  },
  {
    name: "Sago",
    description: "Traditional sago (javu arusi) for delicious desserts and snacks.",
    image: "https://i.ibb.co/pj8Y1pgP/sago.jpg",
  },
]

export default function AgroPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    emailjs.init("nfgaFVXE8bbPQ9PAG") // Replace with your actual EmailJS User ID
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_33yrlel", // Your EmailJS Service ID
        "template_qpworcj", // Your EmailJS Template ID
        {
          ...formData,
          to_email: "info@innovfuturesolutions.com",
        },
      )
      setSubmitMessage("Thank you for your message. We will get back to you soon!")
      setFormData({ name: "", email: "", phoneno: "", message: "" })
    } catch (error) {
      setSubmitMessage("Oops! There was an error sending your message. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="https://i.ibb.co/hJkzBhV1/Logo-Final.png" alt="Innovfuture Solutions Logo" width={50} height={50} className="mr-3" />
            <span className="text-2xl font-bold text-green-800 font-playfair">Innovfuture Solutions</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium text-lg"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium text-lg"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden text-green-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white">
            <ul className="flex flex-col space-y-4 px-4 py-6">
              <li>
                <a
                  href="#home"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium block text-lg"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium block text-lg"
                  onClick={toggleMobileMenu}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium block text-lg"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-800 hover:text-green-600 transition duration-300 font-medium block text-lg"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="pt-16">
        <section id="home" className="py-20 bg-gradient-to-r from-green-600 via-green-500 to-green-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="hero-title text-white mb-6 leading-tight font-playfair">
                Embrace Nature's Finest Essences
              </h1>
              <p className="text-xl text-white mb-8">
              At Innovfuture Solutions, we are dedicated to the art of agro exporting, specializing in high-quality oils that reflect our commitment to excellence. Our knowledgeable team ensures that every product meets the highest standards, from sourcing to delivery. We believe in fostering sustainable practices while providing our clients with exceptional service. Join us in exploring the rich flavors and benefits of our oils, as we promote the essence of nature through innovation.
              </p>
              <a
                href="#products"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
              >
                Explore Our Range
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://i.ibb.co/cSH6XhpX/main-innov.jpg"
                alt="Agro Products"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title font-playfair">Our Signature Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.name} className="product-card">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="product-title mb-2">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <button className="btn-green w-full">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title font-playfair">Our Story</h2>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a passion for quality and sustainability, Innovfuture Solutions has been at the forefront
                of delivering premium agro products to households across the nation. Our journey began with a simple
                idea: to bring the purest, most nutritious oils and traditional products directly from the farm to your
                table.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we've expanded our product line to include a variety of essential oils and agro
                products, each carefully selected and processed to meet our high standards of quality. From our
                cold-pressed oils to our traditionally prepared sago, every product tells a story of craftsmanship and
                care.
              </p>
              <h3 className="text-2xl font-semibold text-green-700 mb-4 font-playfair">Our Commitment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Sourcing the finest raw materials from trusted farmers</li>
                <li>Employing sustainable and ethical production practices</li>
                <li>Delivering products that are pure, natural, and free from additives</li>
                <li>Continuously innovating to meet the evolving needs of our customers</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title font-playfair">Get in Touch</h2>
            <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneno" className="block text-base font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneno"
                      name="phoneno"
                      value={formData.phoneno}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black text-base"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 text-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                  {submitMessage && <div className="mt-4 text-center text-base text-gray-600">{submitMessage}</div>}
                </form>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                <h3 className="text-2xl font-semibold text-green-700 mb-6 font-playfair">Reach Out to Us</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600 text-lg">
                    <FaPhone className="mr-3 text-green-600" />
                    +91-7010735275
                  </p>
                  <p className="flex items-center text-gray-600 text-lg">
                    <FaEnvelope className="mr-3 text-green-600" />
                    info@innovfuturesolutions.com
                  </p>
                  <p className="flex items-center text-gray-600 text-lg">
                    <FaMapMarkerAlt className="mr-3 text-green-600" />
                    1044, maruthupandiyar avenue, sunnambu kolathur, chennai, TamilNadu, India - 600129.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold font-playfair mb-2">INNOVFUTURE SOLUTIONS LLP</h3>
              <p className="text-base text-white">Nurturing health, naturally.</p>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-green-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
            <div>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-base">
                <li>
                  <a href="#" className="hover:text-green-400 transition duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center text-base">
            <p className="text-white">&copy; 2025 Innovfuture Solutions. All rights reserved. <a href="https://instagram.com/bkb_incorporation/" className="text-white hover:text-green-400 transition duration-300"> Powered By BKB Incorporation</a></p>
          </div>
        </div>
      </footer>
      <ChatBot />
      <FloatingWhatsApp phoneNumber="7010735275" message="Hello, I'm interested in Innovfuture Solutions products!" />
    </div>
  )
}


