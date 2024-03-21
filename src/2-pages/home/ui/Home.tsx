import { SectionGroup } from '~/shared/ui/Section';

import {
  ApproachesSection,
  ContactsSection,
  FormsSection,
  HeroSection,
  LocationsSection,
  QuestionsSection,
  RatesSection,
  SchedulesSection,
  SpecialistsSection,
  SpecialtiesSection,
  TermsSection,
  ThemesSection,
} from './sections';

export function Home() {
  return (
    <>
      <HeroSection />
      <div>
        <QuestionsSection />
      </div>
      <SectionGroup>
        <SpecialtiesSection />
        <SpecialistsSection />
      </SectionGroup>
      <SectionGroup>
        <FormsSection />
        <ThemesSection />
      </SectionGroup>
      <SectionGroup>
        <TermsSection />
        <ApproachesSection />
      </SectionGroup>
      <SectionGroup>
        <RatesSection />
        <LocationsSection />
      </SectionGroup>
      <SectionGroup>
        <SchedulesSection />
        <ContactsSection />
      </SectionGroup>
    </>
  );
}
