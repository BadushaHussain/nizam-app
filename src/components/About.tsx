'use client'

export default function About() {
  const experience = [
    {
      role: "Industrial Design Intern",
      company: "GenXReality",
      period: "Present",
      description: "Contributing to cutting-edge design projects in virtual and augmented reality applications"
    }
  ]

  const education = [
    {
      degree: "Bachelors in Industrial Design",
      institution: "Avantika University, Ujjain",
      period: "Current",
      description: "Comprehensive design education focusing on user-centered design methodology"
    },
    {
      degree: "Higher Secondary School",
      institution: "St. Ignatius HSS Kerala",
      period: "Completed",
      description: "Strong foundation in sciences and mathematics"
    },
    {
      degree: "Secondary School",
      institution: "Kendriya Vidyalaya",
      period: "Completed",
      description: "Well-rounded educational background"
    }
  ]

  const designPhilosophy = [
    {
      principle: "User-Centric Approach",
      description: "Every design decision starts with understanding the user's needs, behaviors, and pain points."
    },
    {
      principle: "Functional Beauty",
      description: "Believing that great design seamlessly merges aesthetic appeal with practical functionality."
    },
    {
      principle: "Sustainable Innovation", 
      description: "Creating solutions that are not only innovative but also environmentally conscious."
    },
    {
      principle: "Iterative Refinement",
      description: "Embracing the design process through continuous testing, learning, and improvement."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 tracking-wide uppercase mb-6">
            About Me
          </div>
          <h2 className="heading-2 mb-6">Designer's Journey</h2>
          <p className="body-large text-gray-600">
            From concept to creation - my story of passion, learning, and design innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Profile & Story */}
          <div className="lg:col-span-2 space-y-12">
            {/* Personal Introduction */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/images/nizamuddin-profile.jpg" 
                      alt="Nizamuddin NS - Industrial Designer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallbackElement) {
                          fallbackElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center space-y-1">
                        <div className="w-8 h-8 bg-gray-500 rounded-full mx-auto opacity-50"></div>
                        <p className="text-gray-600 font-medium text-xs">Profile</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio Text */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Hello, I'm Nizamuddin</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      I am a passionate Industrial Designer from Kochi, Kerala, currently pursuing my Bachelor's 
                      in Industrial Design at Avantika University in Ujjain. My journey in design is driven by 
                      a deep fascination with creating solutions that genuinely improve people's lives.
                    </p>
                    <p>
                      My work focuses on creating innovative, user-centric solutions through careful research, 
                      thoughtful ideation, and meticulous attention to detail. I believe that great design 
                      happens at the intersection of functionality, aesthetics, and sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Design Philosophy</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {designPhilosophy.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">{item.principle}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Education Sidebar */}
          <div className="space-y-12">
            {/* Current Experience */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Current Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-gray-900 pl-6 pb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg text-gray-900">{exp.role}</h4>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 font-medium">{exp.period}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mt-3">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`border-l-4 pl-6 pb-6 ${index === 0 ? 'border-gray-900' : 'border-gray-300'}`}>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-700">{edu.institution}</p>
                      <p className="text-sm text-gray-500 font-medium">{edu.period}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Currently</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Based in Kochi, Kerala</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-gray-700">Studying in Ujjain</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}