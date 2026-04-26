import { PrimaryButton } from "../components/PrimaryButton";
import { SectionWrapper } from "../components/SectionWrapper";

export function RegistrationSection({ registration }) {
  return (
    <SectionWrapper id="registration" className="bg-gradient-to-b from-blue-50/60 to-transparent text-center">
      <div className="mx-auto max-w-3xl panel p-8 md:p-12">
        <h2 className="font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">
          Register Now
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {registration.fees.map((feeData) => (
            <div key={feeData.type} className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-950">{feeData.type}</h3>
              <p className="mt-2 text-3xl font-bold text-blue-900">Rs. {feeData.amount}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-700">Includes Certificate and Lunch</p>
        <p className="mt-2 text-slate-600">{registration.note}</p>
        <div className="mt-8">
          <PrimaryButton href="https://docs.google.com/forms/d/e/1FAIpQLSduzXJDgAgHRtPnRezRAT2UIuF_fDUAc-N_xiZ4JRzXOl5AKA/viewform" target="_blank" rel="noopener noreferrer">Register Now</PrimaryButton>
        </div>
        <p className="mt-4 text-sm text-slate-500">Limited seats available</p>
      </div>
    </SectionWrapper>
  );
}
