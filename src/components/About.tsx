'use client'

export default function About() {
  const experience = [
    {
      role: "Industrial Design Intern",
      company: "GenXReality",
      period: "Present"
    }
  ]

  const education = [
    {
      degree: "Bachelors in Industrial Design",
      institution: "Avantika University, Ujjain",
      period: "Current"
    },
    {
      degree: "Higher Secondary School",
      institution: "St. Ignatius HSS Kerala",
      period: "Completed"
    },
    {
      degree: "Secondary School",
      institution: "Kendriya Vidyalaya",
      period: "Completed"
    }
  ]

  const skills = [
    "Sketching",
    "3D Modeling", 
    "Rendering",
    "Prototyping"
  ]

  const software = [
    "Adobe Suite (Photoshop, Illustrator, Substance)",
    "Autodesk Fusion 360",
    "Figma",
    "Blender",
    "Rhino"
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/images/nizamuddin-profile.jpg" 
                  alt="Nizamuddin NS - Industrial Designer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallbackElement) {
                      fallbackElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto opacity-50"></div>
                    <p className="text-gray-600 font-medium text-sm">Profile Photo</p>
                    <p className="text-xs text-gray-500">Nizamuddin NS</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-8">Hello!</h2>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="body-regular text-gray-700 leading-relaxed">
                  "I am Nizamuddin NS, a passionate Industrial Designer from Kochi, Kerala, 
                  and a Bachelor of Industrial Design student at Avantika University in 
                  Ujjain. My work focuses on creating innovative, user-centric solutions."
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="heading-3 mb-6">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-gray-900 pl-6">
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="heading-3 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-gray-300 pl-6">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Software Section */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="heading-3 mb-6">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Software */}
            <div>
              <h3 className="heading-3 mb-6">Software</h3>
              <div className="space-y-3">
                {software.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <p className="body-regular">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}