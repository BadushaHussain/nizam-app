'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: "Design Skills",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      skills: ["Sketching", "3D Modeling", "Rendering", "Prototyping"]
    },
    {
      title: "Software",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["Adobe Suite", "Fusion 360", "Blender", "Rhino", "Figma"]
    },
    {
      title: "Specialties",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ["Product Design", "Lighting Design", "Public Infrastructure", "User Research"]
    },
    {
      title: "Process",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      skills: ["Research", "Ideation", "Prototyping", "Testing"]
    }
  ]

  const softwareTools = [
    { 
      name: "Adobe Creative Suite", 
      description: "Photoshop, Illustrator, Substance",
      proficiency: 85 
    },
    { 
      name: "Autodesk Fusion 360", 
      description: "3D CAD modeling and simulation",
      proficiency: 90 
    },
    { 
      name: "Blender", 
      description: "3D modeling and rendering",
      proficiency: 80 
    },
    { 
      name: "Rhino", 
      description: "NURBS-based 3D modeling",
      proficiency: 75 
    },
    { 
      name: "Figma", 
      description: "UI/UX design and prototyping",
      proficiency: 70 
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 tracking-wide uppercase mb-6">
            Skills & Expertise
          </div>
          <h2 className="heading-2 mb-6">Design Capabilities</h2>
          <p className="body-large text-gray-600">
            Comprehensive skill set spanning from conceptual sketching to digital prototyping and user research
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Software Proficiency */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Software Proficiency</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {softwareTools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{tool.name}</h4>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-gray-400">{tool.proficiency}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tool.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on challenging projects that push the boundaries of design and innovation.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  )
}