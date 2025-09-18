'use client'

import { useState } from 'react'

interface ProjectImage {
  id: string
  url: string
  alt: string
  category: 'main' | 'moodboard' | '3d-models' | 'prototype' | 'research'
}

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  tools: string[]
  category: string
  images: ProjectImage[]
  moodboardDescription?: string
  researchDescription?: string
  prototypeDescription?: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeImageCategory, setActiveImageCategory] = useState<string>('main')

  const projects: Project[] = [
    {
      id: 1,
      title: "Aurelia",
      subtitle: "Table Luminaire",
      description: "Inspired by the gentle elegance of jellyfish, this lamp brings a sense of calm and wonder into any space. Its soft, flowing form and translucent body glow with a dreamy light—just like the natural shimmer of jellyfish drifting through the sea.",
      tools: ["Rhino", "Fusion 360", "Blender"],
      category: "Lighting Design",
      moodboardDescription: "Marine life inspiration focusing on jellyfish movements and bioluminescent qualities found in ocean depths.",
      researchDescription: "Study of jellyfish anatomy, translucent materials, and ambient lighting effects in interior spaces.",
      prototypeDescription: "Working prototype showcasing the translucent body with internal LED lighting system and organic form factor.",
      images: [
        { id: 'a1', url: '/images/aurelia/main-1.jpg', alt: 'Aurelia Lamp Main View', category: 'main' },
        { id: 'a2', url: '/images/aurelia/main-2.jpg', alt: 'Aurelia Lamp Side View', category: 'main' },
        { id: 'a3', url: '/images/aurelia/main-3.jpg', alt: 'Aurelia Lamp Lit', category: 'main' },
        { id: 'a4', url: '/images/aurelia/mood-1.jpg', alt: 'Jellyfish Inspiration', category: 'moodboard' },
        { id: 'a5', url: '/images/aurelia/mood-2.jpg', alt: 'Ocean Textures', category: 'moodboard' },
        { id: 'a6', url: '/images/aurelia/mood-3.jpg', alt: 'Bioluminescence', category: 'moodboard' },
        { id: 'a7', url: '/images/aurelia/3d-1.jpg', alt: 'Wireframe Model', category: '3d-models' },
        { id: 'a8', url: '/images/aurelia/3d-2.jpg', alt: '3D Rendering', category: '3d-models' },
        { id: 'a9', url: '/images/aurelia/3d-3.jpg', alt: 'Technical Drawing', category: '3d-models' },
        { id: 'a10', url: '/images/aurelia/proto-1.jpg', alt: 'Working Prototype', category: 'prototype' },
        { id: 'a11', url: '/images/aurelia/proto-2.jpg', alt: 'Pattern Details', category: 'prototype' },
        { id: 'a12', url: '/images/aurelia/research-1.jpg', alt: 'Material Studies', category: 'research' }
      ]
    },
    {
      id: 2,
      title: "Gust",
      subtitle: "Exhaust Fan",
      description: "To create a modern, visually appealing, and energy-efficient fan while retaining its functionality. This design focuses on improving the aesthetic appeal of traditional exhaust fans while maintaining optimal performance.",
      tools: ["Fusion 360", "Blender"],
      category: "Product Design",
      moodboardDescription: "Modern minimalist design with focus on airflow patterns and geometric precision.",
      researchDescription: "Analysis of existing exhaust fan problems including noise, efficiency, and aesthetic integration in modern interiors.",
      prototypeDescription: "Functional prototype testing airflow efficiency and noise reduction with the new blade design.",
      images: [
        { id: 'g1', url: '/images/gust/main-1.jpg', alt: 'Gust Fan Main View', category: 'main' },
        { id: 'g2', url: '/images/gust/main-2.jpg', alt: 'Gust Fan Installed', category: 'main' },
        { id: 'g3', url: '/images/gust/main-3.jpg', alt: 'Gust Fan Detail', category: 'main' },
        { id: 'g4', url: '/images/gust/mood-1.jpg', alt: 'Airflow Patterns', category: 'moodboard' },
        { id: 'g5', url: '/images/gust/mood-2.jpg', alt: 'Modern Interiors', category: 'moodboard' },
        { id: 'g6', url: '/images/gust/3d-1.jpg', alt: 'CAD Model', category: '3d-models' },
        { id: 'g7', url: '/images/gust/3d-2.jpg', alt: 'Exploded View', category: '3d-models' },
        { id: 'g8', url: '/images/gust/3d-3.jpg', alt: 'Technical Specs', category: '3d-models' },
        { id: 'g9', url: '/images/gust/proto-1.jpg', alt: 'Prototype Testing', category: 'prototype' },
        { id: 'g10', url: '/images/gust/proto-2.jpg', alt: 'Assembly Process', category: 'prototype' },
        { id: 'g11', url: '/images/gust/research-1.jpg', alt: 'Market Analysis', category: 'research' }
      ]
    },
    {
      id: 3,
      title: "AquaSan",
      subtitle: "Redesign Washbasin",
      description: "This project focuses on redesigning the railway station washbasin to improve hygiene, accessibility, and user experience. The design addresses issues of cleanliness, accessibility for disabled users, and overall convenience.",
      tools: ["Fusion 360", "Blender"],
      category: "Public Design",
      moodboardDescription: "Public space hygiene solutions with focus on accessibility and water conservation in high-traffic environments.",
      researchDescription: "Field study of railway station washbasins identifying key problems: hygiene, accessibility, and user frustration points.",
      prototypeDescription: "Scale model demonstrating the multi-level design with separate sections for different users and improved drainage.",
      images: [
        { id: 'aq1', url: '/images/aquasan/main-1.jpg', alt: 'AquaSan Main View', category: 'main' },
        { id: 'aq2', url: '/images/aquasan/main-2.jpg', alt: 'AquaSan Context', category: 'main' },
        { id: 'aq3', url: '/images/aquasan/main-3.jpg', alt: 'AquaSan In Use', category: 'main' },
        { id: 'aq4', url: '/images/aquasan/mood-1.jpg', alt: 'Public Spaces', category: 'moodboard' },
        { id: 'aq5', url: '/images/aquasan/mood-2.jpg', alt: 'Accessibility Design', category: 'moodboard' },
        { id: 'aq6', url: '/images/aquasan/3d-1.jpg', alt: 'Design Model', category: '3d-models' },
        { id: 'aq7', url: '/images/aquasan/3d-2.jpg', alt: 'User Scenarios', category: '3d-models' },
        { id: 'aq8', url: '/images/aquasan/3d-3.jpg', alt: 'Dimensions', category: '3d-models' },
        { id: 'aq9', url: '/images/aquasan/proto-1.jpg', alt: 'Scale Model', category: 'prototype' },
        { id: 'aq10', url: '/images/aquasan/proto-2.jpg', alt: 'Material Testing', category: 'prototype' },
        { id: 'aq11', url: '/images/aquasan/research-1.jpg', alt: 'User Research', category: 'research' },
        { id: 'aq12', url: '/images/aquasan/research-2.jpg', alt: 'Problem Analysis', category: 'research' }
      ]
    }
  ]

  const getImagesByCategory = (project: Project, category: string) => {
    return project.images.filter(img => img.category === category)
  }

  const getCategoryDescription = (project: Project, category: string) => {
    switch (category) {
      case 'moodboard':
        return project.moodboardDescription
      case 'research':
        return project.researchDescription
      case 'prototype':
        return project.prototypeDescription
      default:
        return project.description
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">Featured Projects</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            A collection of design projects focusing on innovation, functionality, and user experience
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-12 items-center p-8 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-gray-500 rounded-lg mx-auto opacity-50"></div>
                        <p className="text-gray-600 font-medium">Project Image</p>
                        <p className="text-sm text-gray-500">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl font-bold text-gray-300">
                        {String(project.id).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="heading-3">{project.title}</h3>
                        <p className="text-xl text-gray-600 font-medium">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
                      {project.category}
                    </div>
                  </div>

                  <p className="body-regular text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button 
                      className="btn-primary"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    >
                      {selectedProject === project.id ? 'Hide Gallery' : 'View Gallery'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Gallery Section */}
              {selectedProject === project.id && (
                <div className="border-t border-gray-200 p-8">
                  <div className="space-y-8">
                    {/* Category Navigation */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['main', 'moodboard', '3d-models', 'prototype', 'research'].map((category) => {
                        const images = getImagesByCategory(project, category)
                        if (images.length === 0) return null
                        
                        return (
                          <button
                            key={category}
                            onClick={() => setActiveImageCategory(category)}
                            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 capitalize ${
                              activeImageCategory === category
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {category.replace('-', ' ')}
                          </button>
                        )
                      })}
                    </div>

                    {/* Category Description */}
                    <div className="text-center max-w-3xl mx-auto">
                      <h4 className="text-2xl font-semibold mb-4 capitalize">
                        {activeImageCategory.replace('-', ' ')}
                      </h4>
                      <p className="text-gray-600">
                        {getCategoryDescription(project, activeImageCategory)}
                      </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getImagesByCategory(project, activeImageCategory).map((image) => (
                        <div key={image.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md">
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <div className="text-center space-y-2">
                              <div className="w-12 h-12 bg-gray-500 rounded-lg mx-auto opacity-50"></div>
                              <p className="text-gray-600 font-medium text-sm">Image</p>
                              <p className="text-xs text-gray-500">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}