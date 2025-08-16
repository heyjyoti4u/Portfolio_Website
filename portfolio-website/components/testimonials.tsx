"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "T Srumith Rajput",
    role: "Project Manager",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Jyotiranjan delivered exceptional work on our data analytics project. His attention to detail and technical expertise made a significant impact on our business insights.",
  },
  {
    name: "Lakshmi R Kanaujiya",
    role: "Senior Developer",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Working with Jyotiranjan was a great experience. His full-stack development skills and problem-solving approach helped us deliver the project ahead of schedule.",
  },
  {
    name: "Akanksha Gupta",
    role: "Data Scientist",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Jyotiranjan's expertise in big data analytics and visualization tools helped us transform complex data into actionable business insights.",
  },
  {
    name: "Pranab Sharaswat",
    role: "Tech Lead",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "His dedication to learning new technologies and applying them effectively makes him a valuable team member. Highly recommended!",
  },
]

export function Testimonials() {
  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold text-white mb-6">Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
