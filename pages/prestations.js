import styled, { keyframes } from "styled-components";
import Layout from "../components/globals/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

const ArrowAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const FromLeft = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Section = styled.div`
  z-index: 0;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-light);
  & #prestations-intro {
    padding-top: 10%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Prestation = styled.div`
  z-index: -2;
  position: relative;
  width: 100%;
  height: 50vh;
  border-top: 2px solid var(--color-gll);
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 10vh;
    background: linear-gradient(to bottom, var(--color-dark-soft), transparent);
  }
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background: linear-gradient(to top, var(--color-dark-soft), transparent);
  }
  &.presta-1 {
    background-image: url(/assets/images/tonte.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
  &.presta-2 {
    background-image: url(/assets/images/haie.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
  &.presta-3 {
    background-image: url(/assets/images/debroussaillage.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
  &.presta-4 {
    background-image: url(/assets/images/desherbage.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
  &.presta-5 {
    background-image: url(/assets/images/feuille.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
  }
  &.presta-6 {
    background-image: url(/assets/images/dechets.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom: 2px solid var(--color-gll);
  }
`;

const Title = styled.h1`
  animation: ${FromLeft} 0.4s ease-in-out both;
  position: relative;
  margin: 5% 5%;
  font-size: 5rem;
  font-family: "Montserrat-Bold", Arial, Helvetica, sans-serif;
  color: var(--color-gll);
  filter: drop-shadow(0 0 1px var(--color-dark));
  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  z-index: 2;
  transition: all 0.5s ease-in-out;
  font-size: 3rem;
  margin: 5% 5%;
  color: var(--color-light);
  filter: drop-shadow(0 0 1px var(--color-dark));
  opacity: 0;
  transform: translateX(-30%);
  &.other {
    color: var(--color-gll);
    margin-top: 0;
  }
  &.in-viewport {
    opacity: 1;
    transform: translateX(0);
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  z-index: 5;
  transition: all 0.7s ease-in-out;
  font-size: 1.2rem;
  color: var(--color-light);
  filter: drop-shadow(0 0 1px var(--color-dark));
  margin: 5% 5%;
  opacity: 0;
  transform: scale(0);
  &.other {
    color: var(--color-dark);
    filter: none;
    margin: 0 5% 5% 5%;
  }
  &.in-viewport {
    opacity: 1;
    transform: scale(1);
  }
  & a {
    color: var(--color-warm);
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  transition: all 0.2s ease-in-out;
  z-index: 2;
  width: 300px;
  height: 100px;
  border: 2px solid var(--color-gll);
  border-radius: 5px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  background-color: var(--color-gll);
  font-family: "Montserrat-Bold";
  color: var(--color-light);
  font-size: 2rem;
  text-shadow: 0 0 1px var(--color-dark);
  align-self: center;
  transform: scale(0);
  opacity: 0;
  &.in-viewport {
    transform: scale(1);
    opacity: 1;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 400px) {
    width: 200px;
    height: 75px;
    font-size: 1.5rem;
  }
`;

const Arrow = styled.div`
  animation: ${ArrowAnimation} 2s infinite ease-in-out;
  transition: all 0.5s ease-in-out;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5%;
  margin: auto;
  height: 100px;
  width: 100px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 2px var(--color-dark-soft));
  color: var(--color-light);
`;

export default function Prestations() {
  const [index, setIndex] = useState(null);

  const textArray = [
    "Choisissez la taille de tonte, je m'occupe de raffraichir la coupe du gazon de votre jardin en prenant soin de ne pas abîmer le terrain ou autres végétaux.",
    "Taille simple ou complexe, je redonne forme à vos haies / arbustes pour refaçonner l'image de votre jardin.",
    "Il est parfois difficile d'entretenir seul l'entièreté de son jardin. Je peux alors égaliser et nettoyer votre terrain.",
    "Savoir entretenir son jardin et lui assurer un bon équilibre est important. Il faut alors nettoyer et parfois éliminer les mauvaises herbes.",
    "Lors de la mi-saison, on se retrouve souvent débordé par la charge de travail liée au nettoyage du jardin. Je m'occupe de ramasser et d'évacuer les feuilles mortes.",
    "Après chacune de mes prestation, je prends en charge l'évacuation des déchets verts si vous le souhaitez.",
  ];

  useEffect(() => {
    let arrow = document.getElementById("prestations-arrow");
    let title = document.getElementById("prestations-title");

    document.body.onscroll = () => {
      window.scrollY > 0
        ? ((arrow.style.opacity = 0), (arrow.style.animation = "none"))
        : (arrow.style.opacity = 1);

      title.style.left = window.scrollY / 3 + "px";
    };
  });

  useEffect(() => {
    function callbackFunc(entries, observer) {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-viewport", entry.isIntersecting);
      });
    }

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    let observer = new IntersectionObserver(callbackFunc, options);

    //Animations 'in-vieport'
    let subtitles = document.getElementsByClassName("prestations-subtitle");
    for (let subtitle of subtitles) {
      observer.observe(subtitle);
    }
    let descriptions = document.getElementsByClassName(
      "prestations-description"
    );
    for (let description of descriptions) {
      observer.observe(description);
    }
    observer.observe(document.getElementById("prestations-btn"));
  }, []);

  return (
    <Layout black page="Taille et Tonte | Prestations - Entretien de Jardin">
      <Section id="prestations">
        <Container id="prestations-intro">
          <Title id="prestations-title">Découvrez mes prestations.</Title>
        </Container>
        <Prestation className="presta-1">
          <Subtitle className="prestations-subtitle">Tonte de pelouse</Subtitle>
          <Text className="prestations-description">{textArray[0]}</Text>
        </Prestation>
        <Prestation className="presta-2">
          <Subtitle className="prestations-subtitle">
            Taille de haie et d&apos;arbustes
          </Subtitle>
          <Text className="prestations-description">{textArray[1]}</Text>
        </Prestation>
        <Prestation className="presta-3">
          <Subtitle className="prestations-subtitle">Débroussaillage</Subtitle>
          <Text className="prestations-description">{textArray[2]}</Text>
        </Prestation>
        <Prestation className="presta-4">
          <Subtitle className="prestations-subtitle">
            Désherbage, bêchage, binage
          </Subtitle>
          <Text className="prestations-description">{textArray[3]}</Text>
        </Prestation>
        <Prestation className="presta-5">
          <Subtitle className="prestations-subtitle">
            Ramassage des feuilles
          </Subtitle>
          <Text className="prestations-description">{textArray[4]}</Text>
        </Prestation>
        <Prestation className="presta-6">
          <Subtitle className="prestations-subtitle">
            Évacuation des déchets verts
          </Subtitle>
          <Text className="prestations-description">{textArray[5]}</Text>
        </Prestation>
        <Container>
          <Subtitle className="prestations-subtitle other">
            Autres prestations..
          </Subtitle>
          <Text className="prestations-description other">
            N&apos;hésitez pas à <Link href="/contact">me contacter</Link> afin
            de me demander directement si la/les prestation(s) que vous
            recherchez est/sont réalisable(s).
          </Text>
          <Link passHref href="/contact">
            <Button id="prestations-btn">Contactez-moi !</Button>
          </Link>
        </Container>
        <Arrow id="prestations-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </Arrow>
      </Section>
    </Layout>
  );
}
