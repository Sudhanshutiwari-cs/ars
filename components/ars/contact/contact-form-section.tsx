import { ContactInfoRow } from './contact-info-row'
import { InquiryForm } from './inquiry-form'

export function ContactFormSection() {
  return (
    <section id="contact" className="scroll-mt-4 bg-[#f7f9fc] py-10 font-alt">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-12 lg:grid-cols-[1fr_1fr] lg:gap-7">
        <div>
          <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0b2a5b]">
            Get in touch
            <span aria-hidden="true" className="flex items-center gap-1">
              <span className="h-px w-12 bg-[#0b2a5b]" />
              <span className="h-[3px] w-[3px] rounded-full bg-[#0b2a5b]" />
            </span>
          </p>
          <h2 className="mt-1 text-[32px] font-bold leading-[1.15] text-[#0b2a5b] md:text-[36px]">
            {'Let’s Build Something'}
            <br />
            Great Together
          </h2>
          <p className="mt-5 max-w-[400px] text-[14px] leading-relaxed text-ink/60">
            {
              'Have a project in mind, a question, or just want to say hello? Our team is here to help. Fill out the form or reach out to us directly — we’d love to hear from you.'
            }
          </p>

          <ContactInfoRow variant="inline" className="mt-6" />

          <div className="mt-6 overflow-hidden rounded-md border border-[#dbe3ee]">
            <iframe
              title="ARS Group office location — Sector 62, Noida"
              src="https://maps.google.com/maps?q=Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309&z=14&output=embed"
              className="block h-[200px] w-full md:h-[230px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  )
}
