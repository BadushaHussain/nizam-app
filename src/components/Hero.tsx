'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-medium text-gray-600 tracking-wider uppercase">
            Industrial Design
          </p>
          <h1 className="heading-1 text-gray-900 max-w-4xl">
            PORTFOLIO
          </h1>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 tracking-wide">
            NIZAMUDDIN NS
          </h2>
          
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Passionate Industrial Designer from Kochi, Kerala, focusing on creating innovative, user-centric solutions
          </p>
        </div>
        
        <div className="pt-8">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View My Work
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}