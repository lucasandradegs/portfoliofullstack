import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ReactNode } from "react";
import CardsSection from '../src/components/homeNoAuth/cardsSection';
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth';
import SlideSection from '../src/components/homeNoAuth/slideSection';
import PresentationSection from '../src/components/homeNoAuth/presentationSection';
import projetService, { ProjectType } from '../src/services/projectService';
import styles from '../styles/HomeNoAuth.module.scss';
import Footer from '../src/components/common/footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface IndexPageProps {
  chrildren?: ReactNode;
  project: ProjectType[];
}

const HomeNoAuth = ({ project }: IndexPageProps)=> {
    
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Portfólio" key="title" />
        <meta  name="description" 
        content="Conheça todos os meus projetos/trabalho como desenvolvedor FullStack!"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth/>
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350" >
        <SlideSection newestProjects={project}/>
        </div>
        <Footer/>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await projetService.getNewestProjects();
  return {
    props: {
      project: res.data,
    },
    revalidate: 3600 * 24, 
  };
};

export default HomeNoAuth;