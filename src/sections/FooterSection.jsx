export function FooterSection({ contact }) {
  return (
    <footer id="contact" className="border-t border-blue-300 bg-blue-200/70 py-12 text-center">
      <div className="mx-auto w-[92%] max-w-6xl">
        <h3 className="font-['Poppins'] text-xl font-semibold text-blue-950">{contact.department}</h3>
        <p className="mt-2 text-blue-900">{contact.institution}</p>
        <p className="mt-3 text-blue-900">Email: {contact.email}</p>
        <p className="text-blue-900">Phone: {contact.phone}</p>

        <div className="mx-auto mt-8 max-w-4xl text-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-900">Venue Location</p>
          <div className="overflow-hidden rounded-2xl border border-blue-300 shadow-md">
            <iframe
              title="JNMC Belagavi Location Map"
              src="https://www.google.com/maps?q=Jawaharlal+Nehru+Medical+College+Belagavi&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
