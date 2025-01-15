const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? Reach out through any of these channels:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {/* Email Card */}
        

          <a
  href="https://mail.google.com/mail/?view=cm&to=zakariyesahid96@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
>
  <div className="flex items-center gap-4">
    <span className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </span>
    <div className="space-y-1">
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
        Email Me
      </h3>
      <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
        zakariyesahid96@gmail.com
      </p>
    </div>
  </div>
</a>


          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/zakariye-sahid-855b94151/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  Connect on LinkedIn
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  Zakariye Sahid
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/60">
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact; 