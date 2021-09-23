import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Layout from "../components/globals/Layout";

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

const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  animation: ${bgImgAnimation} 0.5s both ease-in-out;
  width: auto;
  min-width: 100%;
  max-height: 100%;
`;

const Title = styled.h1`
  animation: ${FromLeftAnimation} 0.5s ease-in-out;
  z-index: 2;
  font-size: 5rem;
  align-self: flex-start;
  margin: 50px 15%;
  color: var(--color-light);
  text-shadow: 0 0 2px var(--color-dark);
  @media (max-width: 900px) {
    font-size: 4rem;
  }
  @media (max-width: 550px) {
    font-size: 3rem;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
    margin: 35px 5%;
  }
`;

const Text = styled.p`
  color: var(--color-light);
  font-size: 1.5rem;
  text-shadow: 0 0 2px var(--color-dark);
  align-self: flex-start;
  text-align: justify;
  &.contact-outro {
    @media (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;

const ContactLink = styled.a`
  text-shadow: 0 0 2px var(--color-dark);
  color: var(--color-warm);
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
  &.phone-number {
    font-size: 2rem;
    margin-bottom: 5%;
    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
    @media (max-width: 320px) {
      font-size: 1.2rem;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & svg {
    width: 35px;
    height: 35px;
    margin: 0 15px;
    color: var(--color-warm);
    filter: drop-shadow(0 0 2px var(--color-dark));
    cursor: pointer;
  }
`;

const ContactContainer = styled.div`
  animation: ${FromLeftAnimation} 0.5s ease-in-out;
  z-index: 2;
  width: 50%;
  border: 2px solid var(--color-gll);
  border-radius: 15px;
  background-color: var(--color-dark-soft);
  backdrop-filter: blur(5px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 95%;
  }
`;

export default function Contact() {
  function handleCopy() {
    let text = document.getElementById("mail").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("E-mail copié !");
    });
  }

  return (
    <Layout page="Taille & Tonte | Contact - Entretien de Jardin">
      <Section>
        <BgImage src="/assets/images/gaz.jpg" layout="fill" />
        <Title>Contactez-moi :</Title>
        <ContactContainer>
          <Text>Par mail :</Text>
          <LinkContainer>
            <ContactLink
              id="mail"
              href="mailto:fredericstravius.servicejardin@gmail.com"
            >
              fredericstravius.servicejardin@gmail.com
            </ContactLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard"
              viewBox="0 0 16 16"
              onClick={handleCopy}
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </LinkContainer>
          <Text>Par téléphone :</Text>
          <ContactLink className="phone-number" href="tel:0619394983">
            06 19 39 49 83
          </ContactLink>
          <Text className="contact-outro">
            Créons ensemble un projet personnalisé pour votre jardin, ou
            posez-moi les questions que vous souhaitez, je vous répondrai au
            plus vite.
          </Text>
        </ContactContainer>
      </Section>
    </Layout>
  );
}
