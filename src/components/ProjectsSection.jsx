import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

// TODO: replace YOUR-USERNAME with your GitHub username (or a repo link)
const GITHUB = 'https://github.com/TanaleonJohnmark'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link={GITHUB}
        />
        <ProjectCard
          year="2026"
          title="AutoHub"
          description="A car marketplace project for our Project Management class, with a charter and work breakdown structure."
          tech="Project Management · Planning"
          link={GITHUB}
        />
        <ProjectCard
          year="2025"
          title="Data Analytics Labs"
          description="Lab activities for my Data Analytics class on cleaning and analyzing datasets."
          tech="Python · Data Analysis"
          link={GITHUB}
        />
        <ProjectCard
          year="2025"
          title="Clinic Records"
          description="A desktop app for our database class that keeps visit records for a small clinic."
          tech="Java · MySQL"
          link={GITHUB}
        />
      </div>
    </section>
  )
}

export default ProjectsSection
