import Link from "next/link";

export default function HomeConsultationCta() {
  return (
    <section className="relative py-32 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-[center_40%]"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070F22]/92 via-[#0B1F3A]/88 to-[#0B1F3A]/70" />
      </div>

      <div className="relative max-w-[82rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left content */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C09B5B] mb-5">
            Ready to Move Forward?
          </p>
          <h2 id="cta-heading" className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.03em] text-white mb-8">
            Request an Expert<br />
            <em className="italic text-[#D4B483]">Consultation</em> Today.
          </h2>
          <p className="text-[1.0625rem] text-white/68 leading-[1.8] mb-5">
            Whether you need an independent medical examiner for a workers' compensation matter,
            a forensic investigator for a breach incident, or a damages expert for a commercial
            dispute — our intake team will connect you with the right specialist within 24 hours.
          </p>
          <p className="text-[1.0625rem] text-white/68 leading-[1.8] mb-12">
            All engagements are handled with strict confidentiality. Initial consultations are complimentary.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C09B5B] hover:bg-[#8A6D3F] border-2 border-[#C09B5B] hover:border-[#8A6D3F] text-white text-[13px] font-semibold tracking-widest uppercase px-7 py-3.5 rounded-sm transition-all"
            >
              Request an Expert
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a
              href="tel:+18005550100"
              className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm font-semibold tracking-wide transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M16.5 12.69a1.5 1.5 0 01-1.635 1.5 14.843 14.843 0 01-6.473-2.302A14.625 14.625 0 013.3 7.108a14.843 14.843 0 01-2.302-6.502A1.5 1.5 0 012.49 1H5.25a1.5 1.5 0 011.5 1.29c.095.72.27 1.427.524 2.107a1.5 1.5 0 01-.338 1.583l-1.162 1.162a12 12 0 004.597 4.597l1.162-1.162a1.5 1.5 0 011.583-.338c.68.255 1.387.43 2.108.524A1.5 1.5 0 0116.5 12.69z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              (800) 555-0100
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col gap-3 pt-8 border-t border-white/12">
            {[
              "Complimentary initial consultation",
              "Strictly confidential engagement",
              "Response within 24 hours",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/55">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke="#C09B5B" strokeWidth="1.2"/>
                  <path d="M5.5 8l2 2 3-3" stroke="#C09B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white rounded-lg p-10 shadow-2xl">
          <h3 className="font-serif text-[1.5rem] font-normal text-[#0B1F3A] tracking-[-0.02em] mb-2">
            Tell us about your matter
          </h3>
          <p className="text-sm text-[#6B82A0] leading-relaxed mb-8">
            Complete the form and a member of our intake team will reach out to discuss your needs.
          </p>

          <div className="grid grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0B1F3A]" htmlFor="cta-name">Full Name *</label>
              <input id="cta-name" type="text" placeholder="Your full name" autoComplete="name"
                className="w-full bg-[#F5F6F8] border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0B1F3A] placeholder-[#9AAFC7] outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/8 transition-all" />
            </div>
            {/* Organization */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0B1F3A]" htmlFor="cta-org">Organization</label>
              <input id="cta-org" type="text" placeholder="Law firm or company" autoComplete="organization"
                className="w-full bg-[#F5F6F8] border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0B1F3A] placeholder-[#9AAFC7] outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/8 transition-all" />
            </div>
            {/* Email */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0B1F3A]" htmlFor="cta-email">Email Address *</label>
              <input id="cta-email" type="email" placeholder="your@email.com" autoComplete="email"
                className="w-full bg-[#F5F6F8] border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0B1F3A] placeholder-[#9AAFC7] outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/8 transition-all" />
            </div>
            {/* Phone */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0B1F3A]" htmlFor="cta-phone">Phone Number</label>
              <input id="cta-phone" type="tel" placeholder="(000) 000-0000" autoComplete="tel"
                className="w-full bg-[#F5F6F8] border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0B1F3A] placeholder-[#9AAFC7] outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/8 transition-all" />
            </div>
            {/* Service */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0B1F3A]" htmlFor="cta-service">Service Required *</label>
              <select id="cta-service" defaultValue=""
                className="w-full bg-[#F5F6F8] border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0B1F3A] outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/8 transition-all appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236B82A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                <option value="" disabled>Select a service</option>
                <option>IME &amp; PQME Network</option>
                <option>Medical Record Review</option>
                <option>Commercial Litigation Expert</option>
                <option>Economic Damages Expert</option>
                <option>AI Compliance &amp; Governance</option>
                <option>Healthcare Compliance</option>
                <option>Digital Forensics</option>
                <option>Cybersecurity Forensics</option>
                <option>Electronic Discovery Support</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            {/* Description */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0B1F3A]" htmlFor="cta-desc">Case Description</label>
              <textarea id="cta-desc" rows={4} placeholder="Briefly describe your matter — jurisdiction, type of dispute, and expert needs."
                className="w-full bg-[#F5F6F8] border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0B1F3A] placeholder-[#9AAFC7] outline-none focus:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]/8 transition-all resize-y min-h-[100px]" />
            </div>
            {/* Submit */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#0B1F3A] hover:bg-[#132D52] text-white text-[13px] font-semibold tracking-widest uppercase py-3.5 rounded-sm transition-colors"
              >
                Submit Request
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="text-xs text-[#9AAFC7] text-center mt-3 leading-relaxed">
                Your information is protected under our{" "}
                <Link href="/privacy-policy" className="text-[#1A7EC4] underline underline-offset-2">Privacy Policy</Link>.
                We never share your case details with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}