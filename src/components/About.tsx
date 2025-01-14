const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              I'm a passionate developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I love creating 
              seamless user experiences and solving complex problems.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-300">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-300">Node.js, Python, PostgreSQL</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Tools</h3>
              <p className="text-gray-300">Git, Docker, AWS</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
              <p className="text-gray-300">Communication, Leadership, Agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 