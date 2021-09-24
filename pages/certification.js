import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Layout from "../components/globals/Layout";

const ImgAnimation = keyframes`
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
  }
  100% {
    opacity: 1;
  }
`;

const FromRightAnimation = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const FromLeftAnimation = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Section = styled.section`
  z-index: 0;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-light);
  background-image: url(/assets/vines-light.png);
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  animation: ${FromLeftAnimation} 0.4s both ease-in-out;
  z-index: 2;
  font-size: 5rem;
  width: 100%;
  color: var(--color-gll);
  text-shadow: 0 0 2px var(--color-dark);
  align-self: flex-start;
  margin: 0;
  padding: 5% 5% 2.5% 5%;
  @media (max-width: 600px) {
    font-size: 4rem;
  }
  @media (max-width: 450px) {
    font-size: 3rem;
  }
`;
const Text = styled.p`
  animation: ${FromLeftAnimation} 0.4s both ease-in-out;
  z-index: 2;
  font-size: 1.2rem;
  color: var(--color-dark);
  margin-left: 5%;
  width: 45%;
  & a {
    color: var(--color-warm);
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
  &.certification-subtitle {
    animation: ${FromRightAnimation} 0.5s both ease-in-out;
    width: 100%;
    text-align: center;
    font-size: 3rem;
    color: var(--color-warm);
    filter: drop-shadow(0 0 1px var(--color-dark));
    margin: 5% 20px 0 20px;
    padding: 0 20px;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  &.certification-conditions {
    animation: ${FromRightAnimation} 0.5s both ease-in-out;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding-bottom: 5%;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

const Logo = styled.img`
  animation: ${ImgAnimation} 1s ease-in-out both;
  width: 35%;
  max-width: 300px;
  height: auto;
  margin: 0 auto;
  align-self: flex-start;
`;

export default function Home() {
  return (
    <Layout black page="Taille & Tonte | Certification - Entretien de Jardin">
      <Section>
        <Title>Service à la personne :</Title>
        <Container>
          <Text>
            Mon entreprise est agréée &quot;Service à la Personne&quot; !<br />
            Vous pouvez bénéficier d&apos;une déduction d&apos;impôt égale à 50%
            du montant des frais engagés.
            <br />
            Pour d&apos;avantages d&apos;informations :{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.servicesalapersonne.gouv.fr/"
            >
              https://www.servicesalapersonne.gouv.fr/
            </a>
          </Text>
          <Logo src="/assets/images/service.png" />
        </Container>
        <Text className="certification-subtitle">
          50% déductible de vos impôts
        </Text>
        <Text className="certification-conditions">
          selon loi de finances en vigueur.
        </Text>
      </Section>
    </Layout>
  );
}
