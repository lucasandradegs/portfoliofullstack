import Head from 'next/head';
import CardsSection from '../src/components/homeNoAuth/cardsSection';
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth';
import PresentationSection from '../src/components/homeNoAuth/presentationSection';
import styles from '../styles/HomeNoAuth.module.scss';

const HomeNoAuth = ()=> {
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
        <div className={styles.sectionBackground}>
          <HeaderNoAuth/>
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  );
};

export default HomeNoAuth;