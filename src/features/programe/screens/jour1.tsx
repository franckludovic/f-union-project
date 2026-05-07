import { HeroSectionJour1 } from "../components/HeroSectionJour1";
import { ProgrammeView } from "../components/ProgrammeView";
import { JOUR_1_SESSIONS } from "../constants";

export const Jour1Screen = () => {
  return (
    <>
      <HeroSectionJour1 />
      <ProgrammeView
        sessions={JOUR_1_SESSIONS}
        googleFormUrl=""
        pdfUrl="/pdfs/programme-jour1.pdf"
        pdfFileName="Programme-F-UNION-Jour-1.pdf"
        showSpeakers={false}
      />
    </>
  );
};
