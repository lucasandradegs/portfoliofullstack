import Head from 'next/head';
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth';
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
        <HeaderNoAuth/>
      </main>
    </>
  );
};

export default HomeNoAuth;