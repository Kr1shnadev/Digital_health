import { SectionWrapper } from "../components/SectionWrapper";

function MemberBlock({ name, designation }) {
  return (
    <div>
      <h3 className="font-semibold text-blue-900">{name}</h3>
      <p className="text-sm text-slate-600">{designation}</p>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="mb-6 text-center text-lg font-bold uppercase tracking-widest text-blue-900 underline decoration-blue-300 decoration-2 underline-offset-8">
      {children}
    </h3>
  );
}

export function CommitteeSection({ committee }) {
  return (
    <SectionWrapper id="committee">
      <h2 className="mb-8 font-['Poppins'] text-3xl font-semibold text-blue-950 md:text-4xl">Committees</h2>

      <div className="space-y-12 rounded-2xl border border-blue-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm md:p-10">
        {/* Chief Patrons */}
        <div>
          <SectionTitle>Chief Patrons</SectionTitle>
          <div className="grid gap-6 text-center sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-blue-200">
            {committee.chiefPatrons.map((person) => (
              <div key={person.name} className="py-2 sm:py-0">
                <MemberBlock name={person.name} designation={person.designation} />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-blue-200" />

        {/* Patrons */}
        {committee.patrons && committee.patrons.length > 0 && (
          <>
            <div>
              <SectionTitle>Patron</SectionTitle>
              <div className="flex flex-col items-center gap-6 text-center">
                {committee.patrons.map((person) => (
                  <div key={person.name} className="py-2 sm:py-0">
                    <MemberBlock name={person.name} designation={person.designation} />
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-blue-200" />
          </>
        )}

        {/* Advisory Council */}
        <div>
          <SectionTitle>Advisory Council</SectionTitle>
          <div className="grid gap-8 bg-blue-50/50 p-6 rounded-xl sm:grid-cols-2 lg:grid-cols-3">
            {committee.advisoryCouncil.map((person) => (
              <div key={person?.name || Math.random()} className="w-full">
                {person ? <MemberBlock name={person.name} designation={person.designation} /> : <div />}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-blue-200" />

        {/* Organising Committee */}
        <div>
          <SectionTitle>Organising Committee</SectionTitle>
          <div className="mx-auto max-w-3xl space-y-6">
            {committee.organizingCommittee.map((person) => (
              <div key={person.name} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
                <div className="w-48 shrink-0 font-bold text-blue-900 sm:text-right">{person.title}</div>
                <div>
                  <h3 className="font-semibold text-blue-900">{person.name}</h3>
                  <p className="text-sm text-slate-600">{person.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="rounded-xl bg-blue-50/50 p-6 md:p-8">
          <SectionTitle>Members</SectionTitle>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {committee.members.map((person) => (
              <div key={person?.name || Math.random()} className="w-full">
                {person ? <MemberBlock name={person.name} designation={person.designation} /> : <div />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
