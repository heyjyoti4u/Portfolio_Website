"use client"

import type React from "react"

import { useState } from "react"
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  ChevronDown,
  Book,
  Eye,
  PlaneIcon as PaperPlane,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [showContacts, setShowContacts] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: "/images/web-design-icon.png",
      title: "Web Design",
      description:
        "I can design websites that are more than just visually appealing. They're also user-friendly, accessible, and optimized.",
    },
    {
      icon: "/images/web-dev-icon.png",
      title: "Web Applications",
      description: "I can create dynamic and interactive web applications that provide a seamless user experience.",
    },
    {
      icon: "/images/data-analysis-icon.png",
      title: "Big Data Analyst",
      description: "Data Analyst with prior experience in data analysis and visualization helps in business growth.",
    },
    {
      icon: "/images/writing-icon.png",
      title: "Writer",
      description: "Dedicated writer with a passion for crafting emerging non-fiction and self-help articles.",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Stock Market Analysis",
      category: "Applications",
      image: "/images/stock-analysis.png",
      link: "https://github.com/heyjyoti4u/Stock_Market_Analysis",
    },
    {
      id: 2,
      title: "Netflix Visualization",
      category: "Applications",
      image: "/images/netflix-viz.png",
      link: "https://github.com/heyjyoti4u/Netflix_visualization",
    },
    {
      id: 3,
      title: "Oak - Travel Platform",
      category: "Web Development",
      image: "/images/oak-travel.png",
      link: "https://github.com/heyjyoti4u/Oak",
    },
    {
      id: 4,
      title: "Sentiment Analysis - IMDB Reviews",
      category: "Applications",
      image: "/images/sentiment-analysis.png",
      link: "https://github.com/heyjyoti4u/Sentiment-Analysis-on-IMDB-Movie-Reviews-using-Machine-Learning",
    },
    {
      id: 5,
      title: "Smart Health Record System",
      category: "Web Development",
      image: "/images/health-record-system.png",
      link: "https://github.com/heyjyoti4u/Smart-health-record-system",
    },
  ]

  const achievements = [
    {
      title: "Google Data Analytics",
      category: "Certification",
      date: "Jan 10, 2024",
      description:
        "Completed Google's Professional Certificate in Data Analytics covering data cleaning, visualization, and SQL with hands-on projects.",
      image: "/images/google-analytics-cert.png",
    },
    {
      title: "IT Specialist – JavaScript",
      category: "Certification",
      date: "Nov 28, 2023",
      description:
        "Earned a globally recognized certification from Certiport validating my JavaScript programming and DOM manipulation skills.",
      image: "/images/javascript-cert.png",
    },
    {
      title: "AWS Community Day – Delhi NCR",
      category: "Seminar",
      date: "Mar 3, 2024",
      description:
        "Participated in AWS's largest community-driven event featuring cloud innovations, industry use cases, and live hands-on workshops.",
      image: "/images/aws-event.png",
    },
  ]

  const skills = [
    { name: "Full Stack Developer", percentage: 80 },
    { name: "Numpy, Pandas", percentage: 70 },
    { name: "Java Programming", percentage: 90 },
    { name: "Python", percentage: 50 },
  ]

  const filterCategories = ["All", "Web Design", "Applications", "Web Development"]

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.category === selectedFilter)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ fullname: "", email: "", message: "" })
  }

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-8">
            <header>
              <h2 className="text-3xl font-bold text-white mb-6">About me</h2>
            </header>

            <section className="text-gray-300 space-y-4">
              <p>I am a data analytics enthusiast pursuing an MCA in Big Data Analytics at Parul University.</p>
              <p>
                I specialize in statistical modeling, predictive analytics, and data visualization to derive actionable
                business insights.
              </p>
            </section>

            <Stats />

            <section>
              <h3 className="text-2xl font-semibold text-white mb-6">What I'm doing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={service.icon || "/placeholder.svg"}
                          alt={`${service.title} icon`}
                          className="w-10 h-10"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Testimonials />
          </div>
        )

      case "education":
        return (
          <div className="space-y-8">
            <header>
              <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
            </header>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Book className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-yellow-500 pl-6 pb-6">
                  <h4 className="text-xl font-semibold text-white">Parul University</h4>
                  <span className="text-yellow-500 font-medium">2024 — 2026</span>
                  <p className="text-gray-300 mt-2">
                    Masters in Computer Application with specialization in Big Data Analytics.
                  </p>
                </div>

                <div className="border-l-2 border-yellow-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Utkal University</h4>
                  <span className="text-yellow-500 font-medium">2021 — 2024</span>
                  <p className="text-gray-300 mt-2">Bachelors in Commerce with specialization in Accounts.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <Book className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Skills</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-yellow-500 pl-6 pb-6">
                  <h4 className="text-xl font-semibold text-white">Data Analyst</h4>
                  <span className="text-yellow-500 font-medium">Hadoop, Spark</span>
                  <p className="text-gray-300 mt-2">
                    Proficient in data analysis, data visualization, and data mining.
                  </p>
                </div>

                <div className="border-l-2 border-yellow-500 pl-6 pb-6">
                  <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
                  <span className="text-yellow-500 font-medium">HTML, CSS, JS, React</span>
                  <p className="text-gray-300 mt-2">
                    Frontend Developer expert in building interactive and visually appealing web applications.
                  </p>
                </div>

                <div className="border-l-2 border-yellow-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Backend Developer</h4>
                  <span className="text-yellow-500 font-medium">PHP, MySQL, Node.js, Next.js</span>
                  <p className="text-gray-300 mt-2">Backend Developer with good command in backend technologies.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-6">My Skills</h3>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="text-white font-medium">{skill.name}</h5>
                          <span className="text-yellow-500">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-8">
            <header>
              <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
            </header>

            <section>
              <div className="flex flex-wrap gap-2 mb-6">
                {filterCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedFilter === category ? "default" : "outline"}
                    onClick={() => setSelectedFilter(category)}
                    className={
                      selectedFilter === category
                        ? "bg-yellow-500 text-black hover:bg-yellow-600"
                        : "border-gray-600 text-gray-300 hover:bg-gray-700"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="bg-gray-800 border-gray-700 overflow-hidden group">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-black" />
                        </a>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-yellow-500 text-sm">{project.category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )

      case "achievements":
        return (
          <div className="space-y-8">
            <header>
              <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
            </header>

            <section>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={achievement.image || "/placeholder.svg"}
                          alt={achievement.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-medium">
                              {achievement.category}
                            </span>
                            <span className="text-gray-400 text-sm">•</span>
                            <time className="text-gray-400 text-sm">{achievement.date}</time>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                          <p className="text-gray-300 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-8">
            <header>
              <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
            </header>

            <section className="mb-8">
              <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.674!2d73.1812!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0x93b9b0e8e4b8e4b8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1647608789441!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Form</h3>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full name"
                        value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button
                      type="submit"
                      className="bg-yellow-500 text-black hover:bg-yellow-600 flex items-center gap-2"
                    >
                      <PaperPlane className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-80 bg-gray-800 p-6 lg:min-h-screen">
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img src="/images/my-photo.jpg" alt="Jyotiranjan Mohanty" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-bold text-white">Jyotiranjan Mohanty</h1>
            <p className="text-gray-400">Software Engineer</p>

            <Button
              variant="outline"
              onClick={() => setShowContacts(!showContacts)}
              className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700 flex items-center gap-2"
            >
              Show Contacts
              <ChevronDown className={`w-4 h-4 transition-transform ${showContacts ? "rotate-180" : ""}`} />
            </Button>
          </div>

          {showContacts && (
            <div className="space-y-6">
              <div className="h-px bg-gray-600"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:jyotimohanty289@gmail.com" className="text-white hover:text-yellow-500">
                      jyotimohanty289@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+918144850415" className="text-white hover:text-yellow-500">
                      +91 8144850415
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    <Calendar className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Birthday</p>
                    <time className="text-white">28 June, 2004</time>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500 rounded-lg">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <address className="text-white">Vadodara, Gujarat</address>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-600"></div>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/jyotiranjan-mohanty-b8a655308"
                  className="p-2 bg-gray-700 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-700 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Navigation */}
          <nav className="mb-8">
            <div className="lg:hidden mb-4">
              <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="bg-gray-700 text-white">
                Menu
              </Button>
            </div>
            <div className={`flex flex-wrap gap-2 ${mobileMenuOpen ? "block" : "hidden lg:flex"}`}>
              {[
                { key: "about", label: "About Me" },
                { key: "education", label: "Education" },
                { key: "projects", label: "Projects" },
                { key: "achievements", label: "Achievements" },
                { key: "contact", label: "Contact" },
              ].map((item) => (
                <Button
                  key={item.key}
                  variant={activeSection === item.key ? "default" : "ghost"}
                  onClick={() => {
                    setActiveSection(item.key)
                    setMobileMenuOpen(false)
                  }}
                  className={
                    activeSection === item.key
                      ? "bg-yellow-500 text-black hover:bg-yellow-600"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>

          {/* Content */}
          <div className="max-w-4xl">{renderSection()}</div>
        </main>
      </div>
    </div>
  )
}
