"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "15+", label: "Projects Completed" },
  { number: "5+", label: "Certifications" },
  { number: "100%", label: "Client Satisfaction" },
]

export function Stats() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
