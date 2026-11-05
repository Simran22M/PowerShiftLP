import { useEffect, useState } from "react"

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10h11m-4-4 4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const struggles = [
  [
    "You feel stagnant",
    "You're putting in the effort, but the growth and opportunities aren't following.",
  ],
  [
    "You overthink everything",
    "You analyse, question and imagine what could go wrong until action feels overwhelming.",
  ],
  [
    "You doubt your readiness",
    "Despite years of experience, you wonder whether you are capable enough for the next level.",
  ],
  [
    "You hold back your voice",
    "You have valuable ideas, but don't always know how to communicate your value.",
  ],
  [
    "Your dreams keep waiting",
    "You keep telling yourself you will focus on what you want once things settle down.",
  ],
  [
    "You come last",
    "Between work, family and responsibilities, your own needs stay at the bottom of the list.",
  ],
]

const pillars = [
  {
    number: "01",
    title: "Purpose",
    subtitle: "Stop chasing expectations. Start living what matters.",
    copy: "Discover what truly matters to YOU, reconnect with your core values and uncover the deeper WHY behind your choices—so you're not just working hard, but moving toward a life that feels meaningful and fulfilling.",
    takeaway: "Purpose gives you direction.",
  },
  {
    number: "02",
    title: "Power",
    subtitle: "Stop giving away your power. Start trusting yourself.",
    copy: "Discover how fear, self-doubt and the need for approval quietly hold you back—and what it takes to build the confidence, courage and inner strength to speak up, make decisions and stand up for yourself.",
    takeaway: "Power gives you the courage.",
  },
  {
    number: "03",
    title: "Progress",
    subtitle: "Stop waiting to feel ready. Start making things happen.",
    copy: "Discover how perfectionism, procrastination and overthinking keep even capable professionals stuck—and how to move beyond these patterns to take bold, massive action toward the goals that matter to you.",
    takeaway: "Progress turns your dreams into reality.",
  },
]

const outcomes = [
  [
    "Calm",
    "A quieter mind and a greater ability to handle pressure without feeling constantly overwhelmed.",
  ],
  [
    "Confidence",
    "Greater trust in yourself to make decisions, speak up and pursue meaningful opportunities.",
  ],
  [
    "Freedom",
    "More freedom to choose, act, set boundaries and enjoy your life without fear or guilt driving you.",
  ],
]

const testimonials = [
  {
    quote:
      "What an amazing session on Power*N led by our in-house agile coach Manisha Agrawal. We witnessed how yielding power lies well within us yet we continuously let the YES and NO battle in our mind and let the negativity win. More often than not perfection is the enemy of progress. The role-playing was just apt for us to resonate.",
    name: "Mayukhi Sen",
  },
  {
    quote:
      "After going through your sessions I know how to prioritise, how to be non judgemental... how to be more empathetic, different leadership styles, how to manage stress and most importantly what is the impact that I am creating with my own behaviour. These sessions were very important for me. I started taking care of myself. I evolved. I became self confident. I know my worth and I don't depend on others anymore for their validation.",
    name: "Sunetra",
  },
  {
    quote:
      "There were days when I waited for an opportunity to knock my door, or was sitting through my comfort zone, thinking I would never be able to break barriers or that I could achieve excellence beyond a limit. After I started my transformation journey with you, and 6 months now—I was able to open my own doors, even open hidden ones, grab my own opportunities, break my own barriers and learn and grow to a level that once seemed impossible to even achieve. And yes, I am able to reinforce the fact that, yes indeed, I am too cut out for excellence, and I have Manisha to help me realise my journey and make me realise my own power and potential!",
    name: "Sudha",
  },
  {
    quote:
      "I had the privilege of undertaking leadership coaching with Manisha, and the experience was nothing short of transformative! Her sessions were a deep dive into self-discovery, clarity, understanding responsibilities, decision-making, and powerful communication. Manisha's insightful guidance and supportive approach helped me uncover my strengths and identify areas for growth. Her ability to foster clarity and confidence in decision-making is truly remarkable. Plus, her emphasis on effective communication has significantly boosted my leadership skills. Manisha also provided invaluable techniques for handling emotions, which have been crucial in maintaining composure and resilience in challenging situations.",
    name: "Roopa Mahishi",
  },
  {
    quote:
      "Manisha's workshop is focused towards bringing confidence, clarity and lifting women up. This workshop will be very helpful for you to get your goals clear and start working towards those. Also, it can help you change your mindset towards positivity.",
    name: "Pooja Toonwal",
  },
  {
    quote:
      "Manisha ma'am has been a powerful guiding force in my journey. Her coaching helped me rebuild my confidence, especially during interviews, and gave me a mindset that genuinely uplifted me. The affirmations she taught and the simple routine she helped me follow made me feel grounded, positive, and ready to face challenges. Because of her, I walk into opportunities with clarity and self belief. She truly changed the way I see myself.",
    name: "Saanchi",
  },
]

function OutcomeVisual({ type }: { type: string }) {
  if (type === "Calm") {
    return (
      <svg
        className="outcome-visual"
        viewBox="0 0 320 180"
        role="img"
        aria-label="A quiet sun resting above calm, flowing lines"
      >
        <circle className="visual-gold" cx="160" cy="75" r="42" />
        <path
          className="visual-royal-line"
          d="M54 106c31-17 58-17 88 0s58 17 89 0 54-17 71-7"
        />
        <path
          className="visual-royal-line visual-faint"
          d="M35 129c37-17 70-17 106 0s68 17 105 0 58-17 74-9"
        />
        <path
          className="visual-royal-line visual-faint"
          d="M71 151c25-11 50-11 75 0s50 11 75 0 47-11 68-3"
        />
      </svg>
    )
  }

  if (type === "Confidence") {
    return (
      <svg
        className="outcome-visual"
        viewBox="0 0 320 180"
        role="img"
        aria-label="A graceful flower opening upward in confident growth"
      >
        <path
          className="visual-gold-line visual-stem"
          d="M160 157c-2-28-1-54 0-76"
        />
        <path
          className="visual-royal"
          d="M158 91c-28-3-49-21-55-50 31-2 52 15 55 50Z"
        />
        <path
          className="visual-royal"
          d="M162 91c28-3 49-21 55-50-31-2-52 15-55 50Z"
        />
        <path
          className="visual-gold"
          d="M160 88c-18-15-23-39 0-64 23 25 18 49 0 64Z"
        />
        <path
          className="visual-royal-line visual-faint"
          d="M160 130c-17-18-34-24-52-21M160 144c20-19 40-26 61-21"
        />
        <path className="visual-gold-line" d="M104 158h112" />
      </svg>
    )
  }

  return (
    <svg
      className="outcome-visual"
      viewBox="0 0 320 180"
      role="img"
      aria-label="An open circular form with flowing lines moving freely beyond it"
    >
      <path
        className="visual-royal-line visual-heavy"
        d="M117 150a72 72 0 1 1 99-41"
      />
      <path className="visual-gold-line" d="M107 116c30-6 54-25 68-56" />
      <path className="visual-gold-line" d="M118 136c46-5 80-29 99-71" />
      <path className="visual-gold-line" d="M155 148c44-9 77-33 99-73" />
      <circle className="visual-gold" cx="104" cy="118" r="8" />
    </svg>
  )
}

const faqs = [
  [
    "Why should I join now instead of waiting?",
    "Because waiting for perfect clarity can quietly become another year of the same patterns. If this page feels familiar, use the masterclass as your checkpoint: step out of autopilot, understand what is holding you back and begin building momentum while your goals still matter deeply to you.",
  ],
  [
    "How is this different from other trainings?",
    "This masterclass focuses on the Purpose, Power and Progress shifts that influence how you use the knowledge and skills you already have.",
  ],
  [
    "Is this only for professionals already in leadership?",
    "No. It's for experienced working professionals who want to grow—whether they already lead teams or aspire to bigger roles.",
  ],
  [
    "Is 12 years of work experience a must?",
    "No. If you are a working professional ready to accelerate your career growth and take meaningful ownership of your next move, you are welcome to join.",
  ],
  [
    "I am a student. Can I join?",
    "This masterclass is not designed for students. Its conversations, examples and actions are created for working professionals navigating real career decisions, workplace visibility and leadership growth.",
  ],
  [
    "What if I don't know what I want next?",
    "That's completely fine. The Purpose pillar explores what matters to you and how you can begin reconnecting with your direction.",
  ],
  [
    "Will I get a promotion or a new job?",
    "No, this programme does not guarantee a job placement or promotion. It is designed to strengthen the mindset, self-trust, visibility and action-oriented identity that help you recognise opportunities, communicate your value and accelerate your own growth—instead of waiting for someone else to create your next move.",
  ],
  [
    "Will I have to share personal experiences?",
    "No. You can participate at your own comfort level and reflect privately during activities.",
  ],
  [
    "Is the masterclass really free?",
    "Yes. The live masterclass is completely free to attend.",
  ],
]

function CTA({
  children,
  light = false,
  pulse = false,
}: {
  children: React.ReactNode
  light?: boolean
  pulse?: boolean
}) {
  return (
    <a
      className={`button ${light ? "button-light" : ""} ${
        pulse ? "button-pulse" : ""
      }`}
      href="#masterclass"
    >
      <span>{children}!</span>
      <Arrow />
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [countdownSeconds, setCountdownSeconds] = useState(24 * 60 * 60)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdownSeconds((current) =>
        current === 0 ? 24 * 60 * 60 : current - 1,
      )
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const countdownMinutes = Math.ceil(countdownSeconds / 60)
  const countdownParts = [
    { label: "Days", value: Math.floor(countdownMinutes / (24 * 60)) },
    { label: "Hours", value: Math.floor((countdownMinutes % (24 * 60)) / 60) },
    { label: "Minutes", value: countdownMinutes % 60 },
  ]
  const countdownLabel = countdownParts
    .map(({ label, value }) => `${value} ${label.toLowerCase()}`)
    .join(", ")

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="The Power Shift home">
          <span className="brand-mark">
            <img src="/power-shift-symbol.webp" alt="" />
          </span>
          <span>
            <strong>The Power Shift</strong>
            <small>Career growth without personal sacrifice</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#discover" onClick={() => setMenuOpen(false)}>
            What you'll discover
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Meet Manisha
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <CTA>Reserve my seat</CTA>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <span /> Free live masterclass for professionals with 12 years or
              more of experience
            </p>
            <h1>
              You've worked hard for years.{" "}
              <em>So why does your career still feel stuck?</em>
            </h1>
            <p className="hero-lead">
              Discover three powerful shifts to break free from overthinking,
              self-doubt and career stagnation—without sacrificing your peace,
              relationships or joy. The longer you wait for perfect clarity, the
              more opportunities can pass unnoticed.
            </p>
            <div className="hero-actions">
              <CTA pulse>Reserve my free seat</CTA>
              <p>
                <strong>Live on Zoom</strong>
                <br />
                Date announced soon · Free to attend
              </p>
            </div>
            <div className="host-line">
              <span className="host-monogram">MA</span>
              <p>
                With <strong>Manisha Agrawal</strong>
                <br />
                Leadership Coach · 20 years corporate experience
              </p>
            </div>
          </div>
          <div className="hero-visual reveal delay">
            <div className="image-wrap">
              <img
                src="/manisha-hero.webp"
                alt="Manisha Agrawal, leadership coach"
              />
            </div>
            <div className="quote-card">
              <span>“</span>
              <p>You're Just One Shift Away.</p>
            </div>
          </div>
        </section>

        <section className="recognition section" id="recognition">
          <div className="section-heading centered">
            <p className="eyebrow">Does this feel familiar?</p>
            <h2>
              You've come so far.
              <br />
              <em>So why aren't you moving forward?</em>
            </h2>
            <p>
              On paper, you are doing well. Deep inside, you know you are
              capable of so much more.
            </p>
          </div>
          <div className="struggle-grid">
            {struggles.map(([title, copy]) => (
              <article className="struggle-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <p>
              You know what you should be doing. But somehow, you keep falling
              back into the same patterns. Don't let another season pass while
              you wait to feel completely ready.
            </p>
            <CTA>Yes, I'm ready to move forward</CTA>
          </div>
        </section>

        <section className="cost section">
          <div className="cost-intro">
            <p className="eyebrow light">The hidden cost</p>
            <h2>
              Feeling stuck affects more than <em>your career.</em>
            </h2>
            <p>
              Over time, it quietly touches the things that matter most—the way
              you feel, the way you trust yourself and the way you connect with
              others.
            </p>
          </div>
          <div className="cost-list">
            {[
              [
                "Your Calm",
                "Your mind rarely switches off. Even at home, you replay conversations, question decisions and carry the noise of the day.",
              ],
              [
                "Your Confidence",
                "Every big decision comes with a hundred questions. The longer you hesitate, the harder it becomes to trust yourself.",
              ],
              [
                "Your Connections",
                "Managing everything leaves little energy for the people you love—or for your own interests, dreams and happiness.",
              ],
            ].map(([title, copy]) => (
              <article key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="possibility section">
          <div className="possibility-copy">
            <p className="eyebrow">A different way forward</p>
            <h2>
              Imagine if your next level didn't require <em>more sacrifice.</em>
            </h2>
            <p>
              Imagine feeling excited about your future again—not because every
              challenge has disappeared, but because you trust yourself to
              navigate what comes.
            </p>
          </div>
          <div className="possibility-prose">
            <p>
              Know what you want and where you are going. Make decisions without
              endlessly second-guessing yourself, and speak up so your
              contribution becomes visible.
            </p>
            <p>
              Pursue opportunities before you feel perfectly ready. Set
              healthier boundaries without the guilt, and grow while staying
              connected to yourself and your family.
            </p>
          </div>
        </section>

        <section className="secrets section" id="discover">
          <div className="section-heading">
            <p className="eyebrow light">Inside the masterclass</p>
            <h2>
              Discover the 3 pillars to become <em>unstoppable.</em>
            </h2>
            <p>
              The three shifts that will help you stop living on autopilot and
              start creating a life of clarity, confidence and meaningful
              growth.
            </p>
          </div>
          <div className="secret-list">
            {pillars.map((pillar, index) => (
              <article className="secret-card" key={pillar.number}>
                <div className="secret-content">
                  <p>Pillar {index + 1}</p>
                  <h3>{pillar.title}</h3>
                  <h4>{pillar.subtitle}</h4>
                  <p>{pillar.copy}</p>
                  <blockquote>{pillar.takeaway}</blockquote>
                </div>
              </article>
            ))}
          </div>
          <div className="secrets-cta">
            <p>
              <strong>
                Purpose gives you direction. Power gives you the courage.
                Progress turns your dreams into reality.
              </strong>
              <span>
                Together, they help you move from simply managing your life to
                leading it.
              </span>
            </p>
            <CTA light>Discover the 3 pillars</CTA>
          </div>
        </section>

        <section className="outcomes section">
          <div className="section-heading centered">
            <p className="eyebrow">What you can take away</p>
            <h2>
              Less busy. More <em>intentional.</em>
            </h2>
            <p>
              Begin moving towards three outcomes that matter far beyond your
              job title.
            </p>
          </div>
          <div className="outcome-grid">
            {outcomes.map(([title, copy]) => (
              <article key={title}>
                <OutcomeVisual type={title} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="manifesto">
            Because success should feel meaningful on the inside,{" "}
            <em>not just look impressive on the outside.</em>
          </p>
        </section>

        <section className="about section" id="about">
          <div className="about-portrait">
            <img
              className="about-photo"
              src="/manisha-coach.webp"
              alt="Manisha Agrawal standing in a garden"
            />
            <div className="portrait-panel">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>I didn't have to become less ambitious to become happier.</p>
              <span className="quote-author">Manisha Agrawal</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow light">Meet your coach</p>
            <h2>
              I was achieving my goals. <em>But I was losing my peace.</em>
            </h2>
            <p>
              For nearly 20 years, I built my career in the corporate world. I
              was ambitious, hardworking and results-driven. I delivered
              projects, achieved goals and took on responsibility.
            </p>
            <p>
              Then my boss gave me feedback that changed the way I looked at
              leadership:{" "}
              <strong>
                “You've achieved your goals. But your team feels left behind.”
              </strong>
            </p>
            <p>
              That moment began a journey into Agile Coaching, mindset,
              communication and relationships. I learned that I could grow
              professionally without losing myself along the way.
            </p>
            <p>
              Today, I help ambitious working professionals reconnect with their
              confidence, move towards meaningful growth and create more space
              for the people and things that matter most.
            </p>
            <div className="credentials">
              <span>
                <strong>20 years</strong>Corporate experience
              </span>
              <span>
                <strong>Leadership</strong>& Agile coaching
              </span>
              <span>
                <strong>Practical</strong>Mindset-led approach
              </span>
            </div>
          </div>
        </section>

        <section className="fit section">
          <div className="fit-column yes">
            <p className="eyebrow">This is for you if...</p>
            <h2>You are ready to explore a different way forward.</h2>
            <div className="fit-prose">
              <p>
                You're an ambitious professional with 12 years or more of
                experience who feels stuck, stagnant or unsure about your next
                move.
              </p>
              <p>
                You may be navigating overthinking, self-doubt or difficult
                decisions. You want to speak up, create greater visibility and
                grow without losing your peace or relationships along the way.
              </p>
            </div>
          </div>
          <div className="fit-column no">
            <p className="eyebrow">This is not for you if...</p>
            <h2>You are looking for a shortcut.</h2>
            <p>
              This is not a promise of guaranteed promotions or job placements.
              It is not technical skills training.
            </p>
            <p>
              It is for professionals willing to reflect honestly on their
              patterns, choices and possibilities.
            </p>
            <blockquote>
              You don't need to have everything figured out. You just need to be
              willing to begin.
            </blockquote>
          </div>
        </section>

        <section className="masterclass section" id="masterclass">
          <div className="masterclass-copy">
            <p className="eyebrow light">Your masterclass details</p>
            <h2>
              Your next chapter can begin with <em>one decision.</em>
            </h2>
            <p>
              Bring a notebook, an open mind and a willingness to explore your
              next level.
            </p>
            <div className="event-details">
              <span>
                <small>Format</small>
                <strong>Live on Zoom</strong>
              </span>
              <span>
                <small>Date & time</small>
                <strong>Announced soon · IST</strong>
              </span>
              <span>
                <small>Investment</small>
                <strong>Free</strong>
              </span>
            </div>
          </div>
          <div className="registration-card">
            <p className="card-kicker">From stuck to unstoppable</p>
            <h3>Claim your free place</h3>
            <p>
              Your next opportunity may arrive before you feel ready. Join the
              masterclass now so you can meet it with greater clarity,
              confidence and courage—not another round of hesitation.
            </p>
            <a
              className="button button-wide button-light"
              href="mailto:?subject=Reserve%20my%20seat%20—%20From%20Stuck%20to%20Unstoppable"
            >
              <span>Reserve my free seat!</span>
              <Arrow />
            </a>
            <small>
              Joining instructions will be shared after registration.
            </small>
          </div>
        </section>

        <section className="testimonials section" id="testimonials">
          <div className="section-heading centered">
            <p className="eyebrow">Real professionals. Meaningful shifts.</p>
            <h2>
              What becomes possible when you stop <em>staying stuck.</em>
            </h2>
            <p>
              Hear honest stories from professionals who created greater
              clarity, confidence and momentum in their careers.
            </p>
          </div>

          <div className="text-testimonial-grid">
            {testimonials.map(({ quote, name }) => (
              <article className="text-testimonial-card" key={name}>
                <span className="testimonial-quote">“</span>
                <p>{quote}</p>
                <div>
                  <strong>{name}</strong>
                </div>
              </article>
            ))}
          </div>

          <p className="testimonial-note">
            Individual experiences vary. Participation does not guarantee a
            promotion or specific career outcome.
          </p>
        </section>

        <section
          className="recognition section"
          aria-labelledby="recognition-heading"
        >
          <div className="recognition-copy">
            <p className="eyebrow light">
              <span />
              Recognition
            </p>
            <h2 id="recognition-heading">Recognised along the way.</h2>
            <p>
              Diamond Club, Leadership and Quantum Club recognition for Manisha
              Agrawal.
            </p>
          </div>

          <div className="recognition-gallery">
            <figure>
              <img
                src="/recognition-certificates.webp"
                alt="Manisha Agrawal with her Diamond Club certification, leadership certificate and award"
              />
              <figcaption>
                With her Diamond Club Certification, Leadership Certificate and
                Certificate of Appreciation.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/recognition-quantum-club.webp"
                alt="Manisha Agrawal receiving her Quantum Club recognition on stage"
              />
              <figcaption>Receiving Quantum Club recognition.</figcaption>
            </figure>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="faq-intro">
            <p className="eyebrow">Questions, answered</p>
            <h2>Everything you need to know.</h2>
            <p>
              Still have a question? Reach out and we will help you decide if
              the session is right for you.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta section">
          <p className="eyebrow">You're one shift away</p>
          <h2>
            You've spent years building your career.
            <br />
            <em>Now step into the growth you truly want.</em>
          </h2>
          <p>
            Your next level begins with one intentional decision. The cost of
            waiting is not only time—it is every opportunity you remain too
            uncertain to claim.
          </p>
          <CTA light>Yes, reserve my free seat</CTA>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <img src="/power-shift-symbol.webp" alt="" />
          </span>
          <span>
            <strong>The Power Shift</strong>
            <small>Career growth without personal sacrifice</small>
          </span>
        </a>
        <p>Manisha Agrawal · Leadership Coach</p>
      </footer>
      <a
        className="floating-countdown"
        href="#masterclass"
        aria-label={`Temporary masterclass countdown: ${countdownLabel}. View masterclass details.`}
      >
        <span className="countdown-icon">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="13"
              r="7.5"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M12 9v4.4l3 1.8M9 3h6M12 3v2.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="countdown-copy">
          <small>GOING LIVE SOON!</small>
          <span className="countdown-values">
            {countdownParts.map(({ label, value }) => (
              <span className="countdown-part" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </span>
            ))}
          </span>
        </span>
      </a>
      <div className="mobile-cta">
        <CTA pulse>Reserve my free seat</CTA>
      </div>
    </div>
  )
}
