export default function Contact() {
  const contactInfo = [
    {
      label: "Phone",
      value: "+91 7994495586",
      href: "tel:+917994495586",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      label: "Email",
      value: "nsnizamuddin123@gmail.com",
      href: "mailto:nsnizamuddin123@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      value: "Nizamuddin N S",
      href: "https://linkedin.com/in/nizamuddin-ns",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="heading-2 mb-6">Let's Work Together</h2>
              <p className="text-2xl font-medium text-gray-300 mb-4">
                Would love to collaborate!
              </p>
              <p className="body-large text-gray-400 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can create something amazing together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                  target={info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 Nizamuddin NS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}