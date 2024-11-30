import { useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { AboutMeSection } from '../sections/home/AboutMe';
import { ContactSection } from '../sections/home/ContactSection';
import { EducationSection } from '../sections/home/Education';
import { HomeSection } from '../sections/home/Home';
import { ProjectsShowcaseSection } from '../sections/home/ProjectsShowcase';
import { RodapeSection } from '../sections/home/Rodape';

const PageHome = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const sobreMimRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#home') {
      return homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#sobre-mim') {
      return sobreMimRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#projetos') {
      return projetosRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div
        ref={homeRef}
        id="home"
      >
        <HomeSection />
      </div>

      <Container maxWidth="lg">
        <div
          ref={sobreMimRef}
          id="sobre-mim"
          style={{
            display: 'flex',
          }}
        >
          <AboutMeSection />
        </div>
        <EducationSection />
        <div
          ref={projetosRef}
          id="projetos"
          style={{
            display: 'flex',
          }}
        >
          <ProjectsShowcaseSection />
        </div>
      </Container>

      <ContactSection />
      <RodapeSection />
    </>
  );
};

export default PageHome;
