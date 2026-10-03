import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2023 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, programming, and data analytics."
        />
        <TimelineItem
          period="2025"
          title="Group Project Member"
          place="IT317 Project Management"
          description="Worked with my group on the AutoHub project charter and work breakdown structure."
        />
        <TimelineItem
          period="2021 – 2023"
          title="Senior High School"
          place="Senior High School"
          description="Built my first web page and got hooked."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
