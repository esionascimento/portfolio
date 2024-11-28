import { AboutMeSection } from '../sections/home/AboutMe';
import { EducationSection } from '../sections/home/Education';
import { HomeSection } from '../sections/home/Home';

const PageHome = () => {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <EducationSection />
    </>
  );
};

export default PageHome;
