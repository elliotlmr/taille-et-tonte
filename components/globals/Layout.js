import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";

const PageContainer = styled.div``;

const MainContainer = styled.main``;

export default function Layout({ children, page }) {
  return (
    <PageContainer>
      <Head>
        <title>{page}</title>
        <meta
          name="description"
          content="Entretien de jardin, paysagiste professionnel agréé service à la personne. Taille et tonte sur Concarneau et environs. Contactez-moi pour parler de votre projet."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContainer id="main">{children}</MainContainer>
    </PageContainer>
  );
}
