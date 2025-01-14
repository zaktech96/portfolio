const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zaksahid',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/zakariye',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Orbital elements */}
      <div className="orbit-container">
        <div 
          className="orbit-element w-32 h-32 top-[15%] left-[15%]" 
          style={{ animationDelay: '-2s' }}
        />
        <div 
          className="orbit-element w-24 h-24 top-[60%] right-[20%]" 
          style={{ animationDelay: '-4s' }}
        />
        <div 
          className="orbit-element w-16 h-16 bottom-[20%] left-[25%]" 
          style={{ animationDelay: '-6s' }}
        />
        <div 
          className="orbit-element w-20 h-20 top-[30%] right-[25%]" 
          style={{ animationDelay: '-8s' }}
        />
      </div>

      {/* Background blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative -mt-16">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-primary font-medium animate-fade-in">Welcome to my portfolio</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground animate-fade-in-up tracking-tight">
              Hi, I'm <span className="gradient-text">Zakariye</span>
            </h1>
            <p className="hero-subtitle max-w-2xl mx-auto" style={{ animationDelay: '200ms' }}>
              Full Stack Developer | Problem Solver | Creative Thinker
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card hover:bg-card/80 text-foreground/90 
                hover:text-primary transition-all duration-300 hover:-translate-y-1 
                border border-border hover:border-primary/50 shadow-lg hover:shadow-xl"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up" 
            style={{ animationDelay: '400ms' }}
          >
            <a 
              href="#projects" 
              className="button-primary group flex items-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="button-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 