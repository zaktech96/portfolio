import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { TimelineNav } from './components/ui/timeline-nav'

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <TimelineNav />
        <div className="min-h-screen">
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
