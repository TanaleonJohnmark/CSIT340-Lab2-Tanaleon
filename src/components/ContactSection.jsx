import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:johnmark.tanaleon@cit.edu" text="johnmark.tanaleon@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/TanaleonJohnmark" text="github.com/TanaleonJohnmark" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/TanaleonJohnmark" text="linkedin.com/in/TanaleonJohnmark" />
      </ul>
    </section>
  )
}

export default ContactSection
