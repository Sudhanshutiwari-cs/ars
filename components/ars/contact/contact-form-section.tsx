import { ContactInfoRow } from './contact-info-row'
import { InquiryForm } from './inquiry-form'
import { SocialLinks } from '@/components/ars/social-links'

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

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0b2a5b]">
              Connect With Us:
            </span>
            <SocialLinks variant="light" showLabels />
          </div>

          <div className="mt-6 overflow-hidden rounded-md border border-[#dbe3ee]">
            <iframe
              title="ARS Imperial Landmark Group location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4263548216545!2d77.31505151118544!3d28.586983686046047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ba45640419%3A0xc104b800e1c8d628!2sARS%20Imperial%20Landmark%20Group!5e0!3m2!1sen!2sin!4v1791723308733!5m2!1sen!2sin"
              className="block h-[220px] w-full md:h-[260px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  )
}
