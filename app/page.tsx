'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const services = [
  {
    title: 'Full Stack Development',
    description: 'Comprehensive web and app development services with cutting-edge technology.',
    icon: '💻',
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure setup and management.',
    icon: '☁️',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Machine learning and artificial intelligence implementation.',
    icon: '🤖',
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Deployment and infrastructure management solutions.',
    icon: '⚙️',
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance and strategic technology planning.',
    icon: '📊',
  },
]

const specialties = [
  { name: 'Web Development', desc: 'Modern responsive websites' },
  { name: 'Backend Systems', desc: 'Scalable server architecture' },
  { name: 'Frontend Design', desc: 'Beautiful user interfaces' },
  { name: 'Mobile Apps', desc: 'iOS and Android solutions' },
  { name: 'Cloud & DevOps', desc: 'Infrastructure as code' },
  { name: 'AI Integration', desc: 'Machine learning models' },
]

const programmingQuotes = [
  { text: 'Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
  { text: 'The only limit to our realization of tomorrow will be our doubts of today.', author: 'Franklin D. Roosevelt' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
]

const teamMembers = [
  { id: 1, name: 'Nworie Kingsley', role: 'Lead Developer', image: '/nworie.jpg', bio: 'Kingsley is a full-stack wizard with 10 years of experience in building scalable applications.' },
  { id: 2, name: 'Chukwu Collins', role: 'Backend Specialist', image: '/collins.jpg', bio: 'Collins loves optimizing database queries and designing robust API architectures.' },
  { id: 3, name: 'Udeagu Victory', role: 'UI/UX Designer', image: '/udeagu.jpg', bio: 'Victory brings ideas to life with stunning designs and intuitive user experiences.' },
  { id: 4, name: 'Chidiebere Arthur', role: 'Mobile Engineer', image: '/arthur.jpg', bio: 'Arthur specializes in React Native and creating seamless mobile experiences.' },
  { id: 5, name: 'Mbadugha Stanley', role: 'DevOps Engineer', image: '/mbadugha.jpg', bio: 'Stanley ensures our infrastructure is secure, scalable, and always online.' },
  { id: 6, name: 'Ezeh Franklin', role: 'AI Researcher', image: '/ezeh.jpg', bio: 'Franklin pushes the boundaries of what is possible with machine learning and AI.' },
  { id: 7, name: 'Igwe Rapheal', role: 'Security Specialist', image: '/igwe.jpg', bio: 'Rapheal is dedicated to keeping our systems safe from all external threats.' },
  { id: 8, name: 'Onyegesi Donald', role: 'Product Manager', image: '/onyegesi.jpg', bio: 'Donald aligns our technical efforts with business goals to deliver maximum value.' },
  { id: 9, name: 'Nnalue Peter', role: 'Content Strategist', image: '/ebuka.jpg', bio: 'Peter crafts compelling narratives that resonate with our target audience.' },
  { id: 10, name: 'Nnamdi Sylvester', role: 'Frontend Developer', image: '/nnamdi.jpg', bio: 'Sylvester creates beautiful, responsive, and accessible user interfaces.' },
  { id: 11, name: 'Chijioke Paschal', role: 'Data Scientist', image: '/chijioke.jpg', bio: 'Paschal uncovers hidden insights from complex datasets to drive decision making.' },
  { id: 12, name: 'Nwakamma Daniel', role: 'HR Manager', image: '/dan.jpg', bio: 'Daniel fosters a positive work culture and finds the best talent for our team.' },
  { id: 13, name: 'Obi Kyrian', role: 'Cloud Architect', image: '/kyrian.jpg', bio: 'Kyrian designs resilient cloud infrastructure that scales with our growth.' },
  { id: 14, name: 'Obi Solomon', role: 'QA Engineer', image: '/obi.jpg', bio: 'Solomon ensures every release meets our high standards of quality and performance.' },
  { id: 15, name: 'Madukaife Charles', role: 'Legal Advisor', image: '/madukaife.jpg', bio: 'Charles navigates the complex legal landscape to keep our operations compliant.' },
  { id: 16, name: 'Onwochei Daniel', role: 'Creative Director', image: '/team-onwochei-daniel.jpg', bio: 'Daniel inspires our design team to push creative boundaries.' },
  { id: 17, name: 'Ejide Desmond', role: 'Copywriter', image: '/ejide.jpg', bio: 'Desmond writes wit and charm into every piece of copy we produce.' },
  { id: 18, name: 'Mbah Loughlan', role: 'Community Manager', image: '/mbah.jpg', bio: 'Loughlan builds and nurtures our vibrant community of users and developers.' },
  { id: 19, name: 'Obiorah Paschal', role: 'Software Architect', image: '/obiora.jpg', bio: 'Paschal designs complex systems with focus on scalability and elegant architecture.' },
]

const galleryItems = [
  { id: 1, src: '/sj2.jpg', alt: 'Collaborative Coding' },
  { id: 2, src: '/hero-bg.jpg', alt: 'Team Discussion' },
  { id: 3, src: '/nworie.jpg', alt: 'Project Planning' },
]

const previousWorks = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web App',
    description: 'A comprehensive financial management system with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'HealthTrack AI',
    category: 'Mobile App',
    description: 'AI-powered mobile application for personalized health tracking and diagnostics.',
    image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'CloudSync Enterprise',
    category: 'Infrastructure',
    description: 'Scalable cloud infrastructure migration for a Fortune 500 company.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 4,
    title: 'SecurePay Gateway',
    category: 'Security',
    description: 'High-security payment gateway implementation with blockchain integration.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  }
]

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [activeQuote, setActiveQuote] = useState(0)
  const [expandedCard, setExpandedCard] = useState(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            TimeLine Programmers
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#expertise" className="text-foreground hover:text-primary font-medium transition">
                Services
              </a>
            </li>
            <li>
              <a href="#specialties" className="text-foreground hover:text-primary font-medium transition">
                Expertise
              </a>
            </li>
            <li>
              <a href="#why-us" className="text-foreground hover:text-primary font-medium transition">
                Why Us
              </a>
            </li>
            <li>
              <a href="#works" className="text-foreground hover:text-primary font-medium transition">
                Works
              </a>
            </li>
            <li>
              <a href="#contact-section" className="text-foreground hover:text-primary font-medium transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <a href="#expertise" className="text-lg font-medium hover:text-primary transition">
                    Services
                  </a>
                  <a href="#specialties" className="text-lg font-medium hover:text-primary transition">
                    Expertise
                  </a>
                  <a href="#why-us" className="text-lg font-medium hover:text-primary transition">
                    Why Us
                  </a>
                  <a href="#works" className="text-lg font-medium hover:text-primary transition">
                    Works
                  </a>
                  <a href="#contact-section" className="text-lg font-medium hover:text-primary transition">
                    Contact
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <Image
          src="/hero-bg.jpg"
          alt="Timeline Programmers Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 animate-fade-in">
          <p className="text-white/80 font-semibold mb-4 tracking-wide uppercase text-sm">Precision Engineering Excellence</p>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left break-words">
            TimeLine Programmers
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-12 animate-slide-in-right max-w-2xl mx-auto break-words px-4">
            Elite expertise in software development, AI, cloud solutions, and digital innovation. Building tomorrow's technology today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button className="px-6 py-4 md:px-8 md:py-6 text-base md:text-lg bg-white text-primary hover:bg-gray-100 font-bold">
              Book Service
            </Button>
            <Button variant="outline" className="px-6 py-4 md:px-8 md:py-6 text-base md:text-lg text-white border-white hover:bg-white/10 bg-transparent">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="expertise" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Premium Services</h2>
            <p className="text-xl text-foreground/70">Specialized solutions delivered with expertise and precision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-lg border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <a href="#contact-section" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition">
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Areas of Expertise</h2>
            <p className="text-xl text-foreground/70">Comprehensive expertise across the entire programming landscape</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{specialty.name}</h3>
                <p className="text-foreground/70">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-foreground/70">The experts behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 flex flex-col items-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-foreground/70 font-medium mb-4">{member.role}</p>

                <Button
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all mt-auto"
                  onClick={() => setExpandedCard(expandedCard === member.id ? null : member.id)}
                >
                  {expandedCard === member.id ? 'Close' : 'About'}
                </Button>

                {/* Expanded Details Overlay */}
                {expandedCard === member.id && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center animate-fade-in z-10">
                    <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary/80 mb-4">{member.role}</p>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => setExpandedCard(null)}
                    >
                      Close Profile
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Works Section */}
      <section id="works" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Our Previous Works</h2>
            <p className="text-xl text-foreground/70">A showcase of our engineering excellence and innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previousWorks.map((work, index) => (
              <div
                key={work.id}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300">
                  <span className="text-white/70 text-sm font-bold uppercase tracking-wider mb-2">{work.category}</span>
                  <h3 className="text-3xl font-bold text-white mb-3">{work.title}</h3>
                  <p className="text-white/80 mb-6 max-w-md line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {work.description}
                  </p>
                  <Button className="w-fit bg-white text-primary hover:bg-gray-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Life at TimeLine</h2>
            <p className="text-xl text-foreground/70">A glimpse into our collaborative environment and innovation hub</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-primary mb-6">Why Choose TimeLine Programmers</h2>
              <p className="text-lg text-foreground/70 mb-8">
                We represent the pinnacle of software engineering expertise. With exclusive focus on cutting-edge development, we deliver solutions that your business deserves.
              </p>
              <div className="space-y-4">
                {[
                  'Expert Development Team',
                  'Cutting-Edge Technology',
                  'Proven Track Record',
                  'Client-Focused Approach',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '15+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/70 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 px-6 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-white/90">Book your service today and experience excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Call Now</p>
                  <a href="tel:+234806225" className="text-white/80 hover:text-white transition">+234 806 225 0855</a>
                </div>
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <a href="https://wa.me/" className="text-white/80 hover:text-white transition">Quick Message</a>
                </div>
                <div>
                  <p className="font-semibold mb-1">Hours</p>
                  <p className="text-white/80">Mon - Sat: 8AM - 6PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/50 transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/50 transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <select
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/50 transition"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/50 transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button type="submit" className="w-full bg-white text-primary hover:bg-gray-100 font-bold py-3">
                Book Service
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 text-center border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg font-semibold mb-2">St Joseph's Seminary Special Science School</p>
          <p className="text-lg font-semibold mb-6">Awka Etiti, Nigeria</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" title="Facebook">f</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" title="TikTok">♪</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" title="WhatsApp">💬</a>
          </div>
          <p className="text-sm opacity-80">&copy; 2024 TimeLine Programmers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
