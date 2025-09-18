'use client'

export default function FeaturedWork() {
  const featuredProjects = [
    {
      id: 1,
      title: "Aurelia",
      subtitle: "Table Luminaire",
      description: "Jellyfish-inspired lighting design with organic forms and ambient illumination",
      category: "Lighting Design",
      year: "2024",
      image: "/images/aurelia-featured.jpg"
    },
    {
      id: 2,
      title: "Gust",
      subtitle: "Exhaust Fan",
      description: "Modern, energy-efficient fan design focused on aesthetics and performance",
      category: "Product Design", 
      year: "2024",
      image: "/images/gust-featured.jpg"
    },
    {
      id: 3,
      title: "AquaSan",
      subtitle: "Washbasin Redesign",
      description: "Public infrastructure solution improving hygiene and accessibility",
      category: "Public Design",
      year: "2024", 
      image: "/images/aquasan-featured.jpg"
    }
  ]

  return (
    <section id="featured-work" className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 tracking-wide uppercase mb-6 shadow-sm">
            Featured Work
          </div>
          <h2 className="heading-2 mb-6">Selected Projects</h2>
          <p className="body-large text-gray-600">
            A curated showcase of recent design work spanning lighting, product, and public space solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gray-500 rounded-xl mx-auto opacity-50"></div>
                    <div className="space-y-1">
                      <p className="text-gray-600 font-medium">{project.title}</p>
                      <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-lg text-gray-600 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 flex items-center group"
                  >
                    Explore Project
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Interested in seeing more detailed project breakdowns?</p>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}