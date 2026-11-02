import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react'
// import heroImg from './assets/hero.png'

const NAV = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['services', 'Services'],
  ['tools', 'Tools'],
  ['contact', 'Contact'],
]

const SOFT_SKILLS = [
  'Attention to details',
  'Communication Skills',
  'Organization Skills',
  'Time Management',
  'Problem Solving',
]

const HARD_SKILLS = [
  { name: 'Accounts Payable', level: 85 },
  { name: 'Invoice Processing', level: 76 },
  { name: 'Bank Reconciliation', level: 61 },
]

const STATS = [
  { value: '1+', label: 'Years of Professional Experience' },
  { value: '2', label: 'Company Successfully Aided' },
  { value: '500+', label: 'Invoices Accurately Processed' },
]

const TIMELINE = [
  { year: '2020-2024', title: 'University of Mindanao', sub: 'Bachelor of Secondary Education Major in Physical Education' },
  { year: '2025', title: 'EzAcc Online Training Academy', sub: 'Virtual Bookkeeping' },
  { year: '2025', title: 'QuickBooks Online ProAdvisor', sub: 'Level 1 Certified · Intuit' },
  { year: '2025', title: 'Xero Advisor Certified', sub: 'Xero Global Certification Programme' },
]

const CERTS = [
  {
    title: 'QuickBooks Online ProAdvisor',
    sub: 'Intuit Certified',
    year: '2025',
    link: 'https://www.credly.com/badges/b4232075-325d-4c9c-8225-b9f5f9da4094',
  },
  {
    title: 'Xero Advisor Certified',
    sub: 'Xero',
    year: '2026',
    images: [
      '/certificates/XeroL1.png',
      '/certificates/XeroL2.png',
    ],
  },
  {
    title: 'EzAcc Online Training Academy',
    sub: 'Xero and Quickbooks Navigation',
    year: '2025',
  },
]

const JOBS = [
  {
    year: '2025-2026',
    company: 'Outsourcey',
    meta: 'AU Clients · Landscaping Industry',
    text: 'Gained experience in accounts payable, invoice processing, reconciliations, and maintaining accurate financial records and organized bookkeeping systems.',
  },
  {
    year: '2025-2026',
    company: 'Moner Bookkeeping Services',
    meta: 'AU & US Clients · Bookkeeping Firm',
    text: 'Experienced in financial cleanup, revising chart of accounts, reconciling bank accounts, and ensuring accuracy in financial records and reporting.',
  },
]

const SERVICES = [
  {
    title: 'Accounts Payable Management',
    text: 'Comprehensive management of your accounts payable process, ensuring accurate vendor payments and healthy cash flow.',
  },
  {
    title: 'Invoice Processing',
    text: 'Accurate and quick processing of large volumes of invoices, reducing errors and ensuring timely payments.',
  },
  {
    title: 'Bookkeeping & Financial Records',
    text: 'Accurate, current bookkeeping that ensures your financial records are tidy, well-organised, and prepared for tax season or reporting.',
  },
]

const TOOLS = [
  { title: 'Accounting Tools', items: ['QuickBooks Online', 'Xero', 'SAP'] },
  { title: 'Communication Tools', items: ['Microsoft Outlook', 'Microsoft Teams', 'Google Meet', 'Zoom'] },
  { title: 'Other Tools', items: ['Microsoft Excel', 'Google Spreadsheet', 'Canva', 'Airtable'] },
]

function SectionHeading({ eyebrow, first, second }) {
  return (
    <div className="section-heading">
      {eyebrow && (
        <p className="eyebrow">
          {eyebrow}
          <span className="eyebrow-line" />
        </p>
      )}
      <h2>
        {first} <em>{second}</em>
      </h2>
    </div>
  )
}


function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <img
          src="/BA.png"
          alt="BA Logo"
          className="logo-mark"
        />
        <span>
          Brandon <em>Audiencia</em>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={darkMode}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀ Light' : '☾ Dark'}
      </button>

      <a href="#contact" className="btn btn-solid nav-cta">
        Hire Me
      </a>
    </header>
  )
}


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="available">Available for Work</p>
        <h1>
          <span className="first">Brandon</span>
          <span className="last">Audiencia</span>
        </h1>
        <p className="role">
          <span className="role-line" />
          Bookkeeper &amp; Accounts Payable Specialist
          <span className="role-line" />
        </p>
        <p className="lead">
          Helping businesses manage their finances through meticulous bookkeeping, efficient invoice
          processing, and precise accounts payable management.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">Hire Me</a>
          <a href="#about" className="btn btn-light">View Portfolio</a>
        </div>
      </div>

      <div className="hero-side">
        <a href="#contact" className="contact-link">Contact me</a>
      </div>
    </section>
  )
}


function About() {
  return (
    <section id="about" className="section container about">
      <div className="stats">
        {STATS.map((s) => (
          <div className="card stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="about-text">
        <SectionHeading eyebrow="Who I am" first="About" second="Me" />
        <p>
          I'm Brandon Audiencia, a detail-oriented bookkeeping and accounts payable specialist with a
          strong background in processing invoices, maintaining financial records, and guaranteeing
          accurate financial reporting.
        </p>
        <p>
          Enthusiastic about using effective bookkeeping techniques to support companies in maintaining
          order, compliance, and financial stability — every number counts.
        </p>
        <p>
          Despite having a degree in teaching education, I have gained extensive experience and
          internationally recognised certifications.
        </p>
        <div className="badges">
          <span>Xero Advisor</span>
          <span>QuickBooks ProAdvisor</span>
          <span>Remote-Ready</span>
        </div>
      </div>
    </section>
  )
}


function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading eyebrow="Capabilities" first="My" second="Skills" />
      <div className="grid-2">
        <div className="card">
          <h3>Soft Skills</h3>
          <ul className="soft-list">
            {SOFT_SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Hard Skills</h3>
          <ul className="bars">
            {HARD_SKILLS.map((s) => (
              <li key={s.name}>
                <span className="bar-name">{s.name}</span>
                <span className="bar-track">
                  <span className="bar-fill" style={{ width: `${s.level}%` }} />
                </span>
                <span className="bar-pct">{s.level}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


function Education() {
  return (
    <section id="education" className="section container">
      <SectionHeading
        eyebrow=""
        first="Education &"
        second="Certifications"
      />

      <div className="grid-2 edu-grid">

        {/* Education Timeline */}
        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <li
              key={t.title}
              className={i === 0 ? 'filled' : ''}
            >
              <span className="t-year">{t.year}</span>
              <h4>{t.title}</h4>
              <p>{t.sub}</p>
            </li>
          ))}
        </ol>

        {/* Clickable Certificates */}
        <Certificates />

      </div>
    </section>
  )
}



function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <>
      <div className="certs">
        {CERTS.map((cert) => {
          const hasCertificate = Boolean(
            cert.link ||
            cert.image ||
            (cert.images && cert.images.length > 0)
          )

          return (
            <div
              className={`cert card ${hasCertificate ? 'cert-clickable' : ''}`}
              key={cert.title}
              onClick={() => {
                if (!hasCertificate) return

                if (cert.link) {
                  window.open(
                    cert.link,
                    '_blank',
                    'noopener,noreferrer'
                  )
                } else {
                  setSelectedCert(cert)
                }
              }}
              role={hasCertificate ? 'button' : undefined}
              tabIndex={hasCertificate ? 0 : undefined}
              onKeyDown={(e) => {
                if (!hasCertificate) return

                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()

                  if (cert.link) {
                    window.open(
                      cert.link,
                      '_blank',
                      'noopener,noreferrer'
                    )
                  } else {
                    setSelectedCert(cert)
                  }
                }
              }}
            >
              <div className="cert-top">
                <div>
                  <h4>{cert.title}</h4>
                  <p>{cert.sub}</p>
                </div>

                <span className="t-year">{cert.year}</span>
              </div>
            </div>
          )
        })}
      </div>

      {selectedCert && (
        <div
          className="cert-modal"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
            >
              ×
            </button>

            <h3>{selectedCert.title}</h3>

            <div
              className={`certificate-book ${
                (selectedCert.images || []).length > 1
                  ? 'book-spread'
                  : 'single-certificate'
              }`}>
              {(selectedCert.images || [selectedCert.image])
                .filter(Boolean)
                .map((img, index) => (
                  <div
                    className="certificate-page"
                    key={index}
                  >
                    <img
                      src={img}
                      alt={`${selectedCert.title} - Certificate ${index + 1}`}
                      className="certificate-preview-image"
                    />
                  </div>
                ))}
            </div>

            <p>
              {selectedCert.sub} · {selectedCert.year}
            </p>
          </div>
        </div>
      )}
    </>
  )
}


function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeading eyebrow="" first="Professional" second="Experience" />
      <div className="grid-2">
        {JOBS.map((j) => (
          <article className="card job" key={j.company}>
            <span className="job-year">{j.year}</span>
            <h3>{j.company}</h3>
            <p className="job-meta">{j.meta}</p>
            <p>{j.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}


function Services() {
  return (
    <section id="services" className="section container">
      <SectionHeading eyebrow="What I offer" first="My" second="Services" />
      <div className="grid-3">
        {SERVICES.map((s) => (
          <div className="card service" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


function Tools() {
  return (
    <section id="tools" className="section container">
      <SectionHeading eyebrow="What I offer" first="Tools" second="I Use" />
      <div className="grid-3">
        {TOOLS.map((t) => (
          <div className="card tool" key={t.title}>
            <h3>{t.title}</h3>
            <ul>
              {t.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}


function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (!showPopup) return

    const timer = setTimeout(() => {
      setShowPopup(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [showPopup])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (status === 'sending') return

    setStatus('sending')
    setShowPopup(false)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setShowPopup(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setShowPopup(true)
    }
  }

  return (
    <section id="contact" className="section container contact">

      {/* Popup notification */}
      {showPopup && (
        <div
          className={`notification ${status === 'sent' ? 'success' : 'failure'}`}
          role="status"
          aria-live="polite"
        >
          <span className="notification-icon">
            {status === 'sent' ? '✓' : '✕'}
          </span>

          <div className="notification-content">
            <strong>
              {status === 'sent'
                ? 'Message Sent Successfully!'
                : 'Message Could Not Be Sent'}
            </strong>

            <p>
              {status === 'sent'
                ? 'Thank you for reaching out. I will get back to you soon.'
                : 'Something went wrong. Please check your connection and try again.'}
            </p>
          </div>

          <button
            type="button"
            className="notification-close"
            onClick={() => setShowPopup(false)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      <div>
        <SectionHeading
          eyebrow="Contact Me"
          first="Let's work"
          second="Together"
        />

        <ul className="contact-list">
          <li>
            <span className="icon">✉</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:brandon071802@gmail.com">
                brandon071802@gmail.com
              </a>
            </div>
          </li>
          
          <li>
            <span className="icon">in</span>
            <div>
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/in/brandon-audiencia-7406b1349/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my LinkedIn Profile
              </a>
            </div>
          </li>

          <li>
            <span className="icon">OLJ</span>
            <div>
              <strong>OnlineJobs.ph</strong>
              <a
                href="https://www.onlinejobs.ph/jobseekers/info/5290367"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my OnlineJobs.ph Profile
              </a>
            </div>
          </li>

          <li>
            <span className="icon">☎</span>
            <div>
              <strong>Phone</strong>
              <a href="tel:9278206287">927-820-6287</a>
            </div>
          </li>

          <li>
            <span className="icon">⌖</span>
            <div>
              <strong>Location</strong>
              <span>Tagum City, Davao Del Norte, Philippines</span>
            </div>
          </li>
        </ul>
      </div>

      <form className="card form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
          />
        </label>

        <button
          type="submit"
          className="btn btn-solid btn-block"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}


export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem(
      'portfolio-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((current) => !current)
  }

  return (
    <div className={`app-shell ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Services />
        <Tools />
        <Contact />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Brandon Audiencia. All rights reserved.
      </footer>
    </div>
  )
}
