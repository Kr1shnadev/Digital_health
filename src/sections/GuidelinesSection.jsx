import { SectionWrapper } from "../components/SectionWrapper";
import { Download, FileText } from "lucide-react";

export function GuidelinesSection({ guidelines }) {
  if (!guidelines || guidelines.length === 0) return null;

  return (
    <SectionWrapper id="guidelines" className="bg-slate-50/50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-['Poppins'] text-3xl font-semibold text-blue-950 md:text-4xl">
          Competition Guidelines
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guidelines.map((item, idx) => (
            <a
              key={idx}
              href={`${import.meta.env.BASE_URL}${item.file.replace(/^\//, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="panel flex flex-col items-center p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                <FileText size={32} />
              </div>
              <h3 className="mb-6 flex-1 text-lg font-semibold text-blue-950">{item.title}</h3>
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
                <Download size={16} />
                Download PDF
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
