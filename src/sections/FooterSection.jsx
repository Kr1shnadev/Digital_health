export function FooterSection({ contact }) {
  return (
    <div id="contact">
      <section className="bg-transparent pb-12 pt-8 md:pt-16">
        <div className="mx-auto w-[92%] max-w-5xl">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-blue-900 md:text-left">
            Venue Location
          </p>
          <div className="overflow-hidden rounded-2xl border border-blue-300 shadow-md">
            <iframe
              title="JNMC Belagavi Location Map"
              src="https://www.google.com/maps?q=Jawaharlal+Nehru+Medical+College+Belagavi&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </section>

      <footer className="relative border-t border-blue-300 bg-blue-200/70 py-12 text-center">
        <div className="mx-auto w-[92%] max-w-6xl">
          <h3 className="font-['Poppins'] text-xl font-semibold text-blue-950">{contact.department}</h3>
          <p className="mt-2 font-medium text-blue-900">{contact.institution}</p>
          <p className="mt-3 font-medium text-blue-900">Email: {contact.email}</p>
          <p className="font-medium text-blue-900">Phone: {contact.phone}</p>
        </div>

        {/* Easter Egg */}
        <div className="absolute bottom-2 left-4 text-[10px] font-medium text-transparent selection:bg-blue-900 selection:text-white cursor-default">
          Designed by Krishnadev
        </div>
      </footer>
    </div>
  );
}
