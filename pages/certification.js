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

const Section = styled.section`
  z-index: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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

const BgImage = styled(Image)`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  animation: ${bgImgAnimation} 0.5s both ease-in-out;
`;

export default function Home() {
  return (
    <Layout page="Taille & Tonte | Certification - Entretien de Jardin">
      <Section>
        <BgImage src="/assets/images/gaz.jpg" layout="fill" />
      </Section>
    </Layout>
  );
}
