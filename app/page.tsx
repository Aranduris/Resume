"use client";

import Image from "next/image";
import { useState } from "react";

import portraitImage from "../public/images/portrait.png";
import { ArrowIcon, ExternalIcon } from "./components/Icons";
import {
  presentations,
  projects,
  publications,
  repositoryProjects,
  skillGroups,
  submittedManuscripts,
  type Project,
  type RepositoryProject,
  type ResearchEntry,
} from "./data/portfolio";

const projectRepositoryUrl = "https://github.com/Aranduris/Projects";
const sourceRepositoryUrl =
  process.env.NEXT_PUBLIC_SOURCE_REPOSITORY ?? "https://github.com/Aranduris";

function ProjectCard({ project }: { project: Project }) {
  const evidenceIsExternal = project.evidenceHref.startsWith("http");

  return (
    <article className={`project-card ${project.tone}`}>
      <div className="project-topline">
        <span>{project.number}</span>
        <em>{project.label}</em>
      </div>

      <div className="project-figure has-image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul aria-label={`${project.title} methods`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-note">
          <span>{project.note}</span>
          <a
            href={project.evidenceHref}
            target={evidenceIsExternal ? "_blank" : undefined}
            rel={evidenceIsExternal ? "noreferrer" : undefined}
          >
            {project.evidenceLabel}
            {evidenceIsExternal ? <ExternalIcon /> : <ArrowIcon />}
          </a>
        </div>
      </div>
    </article>
  );
}

function RepositoryProjectCard({ project }: { project: RepositoryProject }) {
  return (
    <article className="repository-card">
      <div className="repository-card-meta">
        <span>{project.number}</span>
        <em>{project.domain}</em>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul aria-label={`${project.title} tools`}>
        {project.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <a href={project.href} target="_blank" rel="noreferrer">
        View project <ExternalIcon />
      </a>
    </article>
  );
}

function ResearchRow({ entry }: { entry: ResearchEntry }) {
  return (
    <article className="ledger-row">
      <div>
        <strong>{entry.year}</strong>
        <small>{entry.status}</small>
      </div>

      <div>
        <h3>{entry.title}</h3>
        <p>{entry.venue}</p>
      </div>

      <div>
        <span>{entry.role}</span>
        {entry.href && (
          <a
            href={entry.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${entry.title}`}
          >
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const [showAllResearch, setShowAllResearch] = useState(false);

  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  const visibleResearch = showAllResearch
    ? [...publications, ...submittedManuscripts]
    : publications.slice(0, 5);

  return (
    <main>
      {/* ------------------------------------------------------------------ */}
      {/* Navigation */}
      {/* ------------------------------------------------------------------ */}

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ritwik Katiyar, home">
          <span className="brand-mark">RK</span>
          <span className="brand-copy">
            <strong>Ritwik Katiyar</strong>
            <em>Data scientist and researcher</em>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#work">Healthcare work</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
        </nav>

        <a className="header-contact" href="#contact">
          Contact <ArrowIcon />
        </a>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Introduction */}
      {/* ------------------------------------------------------------------ */}

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Healthcare AI · Applied statistics · Data systems
          </p>
          <h1>
            I develop data science and AI systems for healthcare research.
          </h1>
          <p className="hero-intro">
            My work covers electronic health and dental records, clinical text,
            and radiographs. I build workflows from raw data ingestion through
            statistical analysis, model development, validation, and delivery.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() => scrollToSection("work")}
            >
              View selected work <ArrowIcon />
            </button>
            <a className="button button-quiet" href="#research">
              Review research record
            </a>
          </div>

          <div className="current-role">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <small>Current role</small>
              <strong>Lead Data Scientist · Temple University</strong>
            </div>
            <time>2024—Present</time>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Portrait of Ritwik Katiyar">
          <div className="portrait-placeholder has-image">
            <Image
              className="portrait-image"
              src={portraitImage}
              alt="Ritwik Katiyar wearing a navy suit outdoors"
              fill
              priority
              sizes="(max-width: 680px) 100vw, (max-width: 1080px) 48vw, 36vw"
            />
          </div>

          <p className="margin-note">
            <span>Primary areas</span>
            EHR and EDR data · NLP · computer vision · clinical applications
          </p>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div>
          <strong>12</strong>
          <span>published, in-press, and submitted research entries</span>
        </div>
        <div>
          <strong>08</strong>
          <span>conference presentations and panel contributions</span>
        </div>
        <div>
          <strong>03</strong>
          <span>clinical data domains: records, text, and imaging</span>
        </div>
        <p>
          Each technical skill is linked to work that shows where I used it.
        </p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Selected healthcare work */}
      {/* ------------------------------------------------------------------ */}

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected healthcare work / 2023—2026</p>
            <h2>Healthcare AI and data science projects.</h2>
          </div>
          <p>
            These projects cover clinical imaging, clinical NLP, and linked
            health and dental records. Each example is connected to a paper,
            manuscript, or conference presentation.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.number} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Public GitHub projects */}
      {/* ------------------------------------------------------------------ */}

      <section className="repository-section" id="projects">
        <div className="repository-heading">
          <div>
            <p className="kicker">Public GitHub projects / multidomain work</p>
            <h2>Projects across biology, environment, sports, and networks.</h2>
          </div>
          <div>
            <p>
              This work shows how I apply the same analytical foundation across
              different domains. The repository includes code, notebooks,
              reports, and presentations.
            </p>
            <a href={projectRepositoryUrl} target="_blank" rel="noreferrer">
              Open complete project repository <ExternalIcon />
            </a>
          </div>
        </div>

        <div className="repository-grid">
          {repositoryProjects.map((project) => (
            <RepositoryProjectCard project={project} key={project.number} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Background and working approach */}
      {/* ------------------------------------------------------------------ */}

      <section className="story-section" id="background">
        <div className="story-label">
          <span>01</span>
          <p>Background</p>
        </div>

        <div className="story-copy">
          <p className="kicker">Biology, computer science, and data science</p>
          <h2>Training across clinical and computational work.</h2>

          <div className="story-columns">
            <p>
              My background combines bioinformatics, computer science, data
              science, and diagnostic laboratory experience. This training helps
              me understand both the structure of the data and the process that
              produced it.
            </p>
            <p>
              At Temple University, I work with clinicians, researchers,
              analysts, and students on projects using health records, dental
              records, claims, clinical text, and radiographs.
            </p>
          </div>
        </div>

        <div className="principles" aria-label="Working approach">
          <article>
            <span>01</span>
            <h3>Define the question.</h3>
            <p>Start with a clear clinical or analytical objective.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Build the data.</h3>
            <p>Document preprocessing, linkage, features, and missingness.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Test the result.</h3>
            <p>
              Evaluate performance, limitations, and whether the output is
              usable.
            </p>
          </article>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Research record */}
      {/* ------------------------------------------------------------------ */}

      <section className="research-section" id="research">
        <div className="research-intro">
          <p className="kicker">Research record</p>
          <h2>Published work and active research.</h2>
          <p>
            This record includes peer-reviewed publications, in-press work,
            active manuscripts, and my master’s thesis. Authorship and
            acknowledgment roles are listed directly.
          </p>
        </div>

        <div className="research-ledger">
          <div className="ledger-head">
            <span>Year / status</span>
            <span>Research</span>
            <span>Role</span>
          </div>

          {visibleResearch.map((entry) => (
            <ResearchRow entry={entry} key={entry.title} />
          ))}

          <button
            className="ledger-toggle"
            type="button"
            onClick={() => setShowAllResearch((currentValue) => !currentValue)}
            aria-expanded={showAllResearch}
          >
            {showAllResearch
              ? "Show selected entries"
              : "View all 12 research entries"}
            <span>{showAllResearch ? "−" : "+"}</span>
          </button>
        </div>

        <section className="conference-record" id="conference-record">
          <div className="conference-heading">
            <p className="kicker">Conference record / 2024—2026</p>
            <h3>Eight presentations and panel contributions.</h3>
          </div>
          <div className="conference-grid">
            {presentations.map((presentation, index) => (
              <article key={presentation.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{presentation.year}</time>
                <h4>{presentation.title}</h4>
                <p>
                  {presentation.venue}
                  {presentation.role && ` · ${presentation.role}`}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Experience and education */}
      {/* ------------------------------------------------------------------ */}

      <section className="experience-section" id="experience">
        <div className="experience-title">
          <p className="kicker">Experience and education</p>
          <h2>Clinical research and technical training.</h2>
        </div>

        <div className="timeline">
          <article>
            <div className="timeline-meta">
              <span>2024—Present</span>
              <small>Temple University</small>
            </div>
            <div className="timeline-copy">
              <p>Current role</p>
              <h3>
                Lead Data Scientist <em>(Big Data Analyst)</em>
              </h3>
              <ul>
                <li>
                  Develop ML, NLP, generative-AI, computer-vision, and
                  statistical workflows using clinical data.
                </li>
                <li>
                  Lead preprocessing, feature engineering, model evaluation,
                  visualization, and analytical delivery.
                </li>
                <li>
                  Contribute to manuscripts, abstracts, grants, applications,
                  and student mentorship.
                </li>
              </ul>
            </div>
          </article>

          <article>
            <div className="timeline-meta">
              <span>2021—2022</span>
              <small>Medical Diagnostics Laboratory — GBG</small>
            </div>
            <div className="timeline-copy">
              <p>Previous role</p>
              <h3>Laboratory Technician</h3>
              <ul>
                <li>
                  Performed and supported diagnostic laboratory procedures and
                  related clinical data workflows.
                </li>
                <li>
                  Worked with ELISA, DNA/RNA extraction, NGS, PCR,
                  spectrophotometry, and analytical software.
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className="education-grid">
          <article>
            <span>MS</span>
            <div>
              <h3>Data Science</h3>
              <p>Ramapo College of New Jersey</p>
            </div>
            <strong>3.9 / 4.0 · 2024</strong>
          </article>
          <article>
            <span>BS</span>
            <div>
              <h3>Bioinformatics</h3>
              <p>Ramapo College of New Jersey</p>
            </div>
            <strong>2020</strong>
          </article>
          <article>
            <span>AS</span>
            <div>
              <h3>Computer Science</h3>
              <p>Bergen Community College</p>
            </div>
            <strong>2021</strong>
          </article>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Evidence-backed technical skills */}
      {/* ------------------------------------------------------------------ */}

      <section className="stack-section" id="skills">
        <div className="stack-heading">
          <p className="kicker">Technical skills and supporting work</p>
          <h2>Skills with a demonstrated application.</h2>
          <p>
            Each skill group includes selected work where I used the methods or
            tools. Links open the related paper, manuscript, presentation, or
            public project.
          </p>
        </div>

        <div className="stack-list">
          {skillGroups.map((group) => (
            <article key={group.index}>
              <span>{group.index}</span>
              <div className="skill-summary">
                <h3>{group.title}</h3>
                <p>{group.detail}</p>
              </div>
              <div
                className="skill-evidence"
                aria-label={`${group.title} evidence`}
              >
                {group.evidence.map((reference) => {
                  const isExternal = reference.href.startsWith("http");

                  return (
                    <a
                      href={reference.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      key={`${reference.kind}-${reference.label}`}
                    >
                      <small>{reference.kind}</small>
                      <strong>{reference.label}</strong>
                      {isExternal ? <ExternalIcon /> : <ArrowIcon />}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contact */}
      {/* ------------------------------------------------------------------ */}

      <footer className="contact-section" id="contact">
        <div className="contact-topline">
          <span>Contact</span>
          <span>Healthcare AI · Data science · Research</span>
        </div>
        <p>Interested in working together?</p>
        <h2>Let’s discuss the research question, data, and next steps.</h2>

        <div className="contact-links">
          <a href="mailto:ritwikk6@gmail.com">
            Email <span>ritwikk6@gmail.com</span>
            <ArrowIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ritwikkatiyar"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>Professional profile</span>
            <ExternalIcon />
          </a>
          <a href={projectRepositoryUrl} target="_blank" rel="noreferrer">
            GitHub <span>Public project archive</span>
            <ExternalIcon />
          </a>
          <a href={sourceRepositoryUrl} target="_blank" rel="noreferrer">
            Source <span>Portfolio source code</span>
            <ExternalIcon />
          </a>
        </div>

        <div className="footer-note">
          <span>Ritwik Katiyar</span>
          <span>Data scientist and researcher</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
