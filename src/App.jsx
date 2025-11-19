import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Menu, X, Github, Linkedin, Mail, ArrowRight, ExternalLink, Sparkles, Code2, Cpu, Rocket } from 'lucide-react'

function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(124,58,237,0.15)]">
          <div className="flex items-center justify-between px-6 py-3">
            <button onClick={() => handleScroll('home')} className="text-xl font-semibold tracking-tight text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">/Portfolio</span>
            </button>
            <div className="hidden md:flex items-center gap-6 text-sm">
              {['about','skills','projects','contact'].map((id) => (
                <button key={id} onClick={() => handleScroll(id)} className="text-slate-300 hover:text-white transition-colors">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow">
                Let’s talk <ArrowRight size={16} />
              </a>
            </div>
            <div className="md:hidden">
              <Menu className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="inline-flex items-center gap-2 text-cyan-300/90 text-sm tracking-widest uppercase">
                <Sparkles size={16} /> Futuristic UI Engineer
              </p>
              <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Building immersive experiences for the modern web
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                I craft premium, performant interfaces with WebGL, Three.js, and cinematic motion. Minimal, refined, and technically excellent.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">
                  View Work <ExternalLink size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition">
                  Contact <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
            <div className="relative aspect-[4/3] w-full rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -z-[0] inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.15),transparent_40%)]" />
    </section>
  )
}

function GlassCard({ children }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(139,92,246,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 p-3 text-cyan-300">
                <Code2 />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Engineer</h3>
                <p className="mt-2 text-slate-300">Clean, scalable frontend architecture with TypeScript, React, and modern tooling.</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-purple-600/30 p-3 text-fuchsia-300">
                <Cpu />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">3D & Motion</h3>
                <p className="mt-2 text-slate-300">WebGL/Three.js scenes, Spline, and GSAP-driven micro-interactions with purpose.</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500/30 to-cyan-600/30 p-3 text-indigo-300">
                <Rocket />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Product First</h3>
                <p className="mt-2 text-slate-300">Experiences that feel effortless, refined, and delightful — with business impact.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const iconVariants = {
    initial: { rotateX: 15, rotateY: -15, z: 0 },
    hover: { rotateX: 0, rotateY: 0, z: 10 },
  }
  const items = [
    { label: 'React', color: 'from-cyan-500 to-blue-500' },
    { label: 'Three.js', color: 'from-indigo-500 to-purple-500' },
    { label: 'GSAP', color: 'from-fuchsia-500 to-pink-500' },
    { label: 'Tailwind', color: 'from-sky-500 to-cyan-500' },
    { label: 'WebGL', color: 'from-violet-500 to-indigo-500' },
    { label: 'Spline', color: 'from-purple-500 to-fuchsia-500' },
  ]
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <p className="text-slate-300 mt-2">A blend of engineering precision and visual craft.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it) => (
            <motion.div key={it.label} initial="initial" whileHover="hover" variants={iconVariants} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center shadow-lg">
              <div className={`mx-auto h-16 w-16 rounded-xl bg-gradient-to-br ${it.color} shadow-[0_0_30px_rgba(99,102,241,0.35)]`} />
              <p className="mt-3 text-sm font-medium text-white">{it.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    { title: 'Holographic Dashboard', desc: 'Real-time WebGL analytics with parallax depth and motion design.', url: '#'},
    { title: 'Interactive 3D Profile', desc: 'Avatar-driven portfolio powered by Three.js and Spline.', url: '#'},
    { title: 'Cinematic Landing', desc: 'Premium hero with GSAP scroll choreography and glassmorphism.', url: '#'},
  ]
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="text-slate-300 mt-2">Selected work — immersive, performant, and production ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group perspective">
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-40 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30" style={{ transform: 'translateZ(30px)' }} />
                <h3 className="mt-4 text-xl font-semibold text-white" style={{ transform: 'translateZ(20px)' }}>{p.title}</h3>
                <p className="mt-2 text-slate-300" style={{ transform: 'translateZ(15px)' }}>{p.desc}</p>
                <a href={p.url} className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-white transition" style={{ transform: 'translateZ(10px)' }}>
                  Explore <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something remarkable</h2>
            <p className="mt-3 text-slate-300">Open to collaborations, product teams, and creative experiments.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-6 py-3 text-white shadow-lg">
                <Mail size={18} /> Email
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white">
                <Github size={18} /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <form className="grid grid-cols-1 gap-4">
              <input className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
              <input type="email" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Email address" />
              <textarea rows="4" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Tell me about your project" />
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">
                Send <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    // 3D tilt on project cards
    const cards = document.querySelectorAll('.perspective > div')
    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -6
        const rotateY = ((x - centerX) / centerX) * 6
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
      const reset = () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)'
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', reset)
    })

    return () => {
      cards.forEach((card) => {
        card.replaceWith(card.cloneNode(true))
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-fuchsia-500/30 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_40%)]" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-slate-400">© {new Date().getFullYear()} Your Name — Designed & engineered with care.</footer>
    </div>
  )
}
