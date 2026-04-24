import { conferenceData } from "./data/conferenceData";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { KeyThemesSection } from "./sections/KeyThemesSection";
import { CommitteeSection } from "./sections/CommitteeSection";
import { SpeakersSection } from "./sections/SpeakersSection";
import { ScheduleSection } from "./sections/ScheduleSection";
import { RegistrationSection } from "./sections/RegistrationSection";
import { FooterSection } from "./sections/FooterSection";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar items={conferenceData.navItems} />
      <main>
        <HeroSection data={conferenceData} />
        <AboutSection
          departmentText={conferenceData.departmentText}
          eventText={conferenceData.eventText}
        />
        <KeyThemesSection themes={conferenceData.themes} />
        <SpeakersSection
          dignitaries={conferenceData.dignitaries}
          speakers={conferenceData.speakers}
        />
        <CommitteeSection committee={conferenceData.committee} />
        <ScheduleSection
          schedule={conferenceData.schedule}
          parallelSession={conferenceData.parallelSession}
        />
        <RegistrationSection registration={conferenceData.registration} />
      </main>
      <FooterSection contact={conferenceData.contact} />
    </div>
  );
}

export default App;
