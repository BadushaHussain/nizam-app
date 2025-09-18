'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-gray-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-gray-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 tracking-wide uppercase mb-4">
                    Industrial Designer
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                    Nizamuddin
                    <span className="block text-gray-600">NS</span>
                  </h1>
                  <div className="w-20 h-1 bg-gray-900 mx-auto lg:mx-0"></div>
                </div>
                
                <p className="text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed">
                  Crafting innovative, user-centric solutions through thoughtful design and meticulous attention to detail
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Explore My Work
                  <svg className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent text-gray-900 px-8 py-4 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-900 transition-colors duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Tools Mastered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">1+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full"></div>
                  <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto"></div>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-gray-800">Industrial Design</div>
                        <div className="text-sm text-gray-600">Portfolio</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </div>
                <div className="absolute top-1/2 -right-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-7 h-7 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Scroll</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}