'use client'

import React from "react"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  'Web Development',
  'Mobile Applications',
  'Cloud Solutions',
  'AI & Machine Learning',
  'DevOps & Infrastructure',
  'Technical Consulting',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <div>
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-4">Get in Touch</h1>
            <p className="text-xl text-foreground/70">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Call Us</h3>
              <a href="tel:+234806225" className="text-lg text-foreground/80 hover:text-primary transition font-semibold">
                +234 806 225 0855
              </a>
              <p className="text-foreground/60 mt-2">Mon - Sat: 8AM - 6PM</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">WhatsApp</h3>
              <a href="https://wa.me/" className="text-lg text-foreground/80 hover:text-primary transition font-semibold">
                Quick Message
              </a>
              <p className="text-foreground/60 mt-2">Available 24/7</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">Location</h3>
              <p className="text-lg text-foreground/80 font-semibold">
                St Joseph's Seminary<br/>Awka Etiti, Nigeria
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-primary/20 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition bg-white"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition resize-none bg-white"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold py-3 text-lg">
                Book Service
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 text-center border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg font-semibold mb-2">St Joseph's Seminary Special Science School</p>
          <p className="text-lg font-semibold mb-6">Awka Etiti, Nigeria</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">TikTok</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">WhatsApp</a>
          </div>
          <p className="text-sm opacity-80">&copy; 2024 TimeLine Programmers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
