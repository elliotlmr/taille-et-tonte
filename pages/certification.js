import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Layout from "../components/globals/Layout";

const bgImgAnimation = keyframes`
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
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-dark);
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, var(--color-dark), transparent);
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 55%;
    height: 100%;
    background: linear-gradient(to right, var(--color-dark), transparent);
    z-index: 0;
  }
`;

const Container = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const BgImage = styled(Image)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  animation: ${bgImgAnimation} 0.5s both ease-in-out;
`;

const Title = styled.h1`
  animation: ${FromLeftAnimation} 0.4s both ease-in-out;
  z-index: 2;
  font-size: 5rem;
  color: var(--color-light);
  text-shadow: 0 0 2px var(--color-dark);
  align-self: flex-start;
  margin-left: 5%;
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
  color: var(--color-light);
  text-shadow: 0 0 2px var(--color-dark);
  width: 60%;
  padding: 0 5%;
  text-align: justify;
  & a {
    color: var(--color-warm);
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
  &.certification-sale-number {
    animation: ${FromRightAnimation} 0.5s both ease-in-out;
    font-size: 12rem;
    font-family: "Reey", Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 0;
    width: 90%;
    color: var(--color-warm);
    //text-shadow: 0 0 2px var(--color-dark);
    @media (max-width: 1300px) {
      font-size: 9rem;
    }
    @media (max-width: 1000px) {
      font-size: 7rem;
    }
    @media (max-width: 700px) {
      font-size: 6rem;
    }
    @media (max-width: 600px) {
      font-size: 5rem;
    }
    @media (max-width: 450px) {
      font-size: 3rem;
    }
  }
  &.certification-subtitle {
    animation: ${FromRightAnimation} 0.5s both ease-in-out;
    width: 100%;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 0;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  &.certification-conditions {
    animation: ${FromRightAnimation} 0.5s both ease-in-out;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    margin: 0;
  }
`;

const SaleContainer = styled.div`
  animation: ${FromRightAnimation} 0.5s ease-in-out;
  width: 40%;
  height: 100%;
`;

const SaleBox = styled.div`
  transition: all 0.3s ease-in-out;
  width: 90%;
  height: 200px;
  //background-color: var(--color-gll);
  //border-radius: 75% 25% 80% 20% / 45% 60% 40% 55%;
  //backdrop-filter: blur(15px);
  //border: 2px solid var(--color-gll);
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 2px var(--color-dark));
  @media (max-width: 450px) {
    height: 120px;
  }
`;

export default function Home() {
  return (
    <Layout page="Taille & Tonte | Certification - Entretien de Jardin">
      <Section>
        <BgImage src="/assets/images/gaz.jpg" layout="fill" />
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
          <SaleContainer>
            <SaleBox>
              <Text className="certification-sale-number">-50%</Text>
            </SaleBox>
          </SaleContainer>
        </Container>
        <Text className="certification-subtitle">Déductible de vos Impôts</Text>
        <Text className="certification-conditions">
          selon loi de finances en vigueur.
        </Text>
      </Section>
    </Layout>
  );
}
