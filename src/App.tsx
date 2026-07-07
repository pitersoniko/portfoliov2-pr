import Nav from './components/Nav'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}
