import styled, { keyframes } from "styled-components";
import Layout from "../components/globals/Layout";
import { useEffect, useState } from "react";

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

const Section = styled.div`
  z-index: 0;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-light);
`;

const Introduction = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Prestation = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  border-top: 2px solid var(--color-gll);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 10vh;
    background: linear-gradient(to bottom, var(--color-dark-soft), transparent);
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background: linear-gradient(to top, var(--color-dark-soft), transparent);
  }
`;

const Title = styled.h1`
  position: relative;
  margin: 5% 5%;
  font-size: 5rem;
  font-family: "Montserrat-Bold", Arial, Helvetica, sans-serif;
  color: var(--color-gll);
  filter: drop-shadow(0 0 1px var(--color-dark));
`;

const Subtitle = styled.h2`
  font-size: 3rem;
  margin: 5% 5%;
  color: var(--color-light);
  filter: drop-shadow(0 0 1px var(--color-dark));
`;

const Text = styled.p``;

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

const BgImage = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: auto;
  min-width: 100%;
  max-height: 100%;
`;

export default function Prestations() {
  const [index, setIndex] = useState(null);

  const textArray = [
    "Choisissez la taille de tonte, je m'occupe de raffraichir la coupe du gazon de votre jardin en prenant soin de ne pas abîmer le terrain ou autres végétaux.",
    "Taille simple ou complexe, je redonne forme à vos haies / arbustes pour refaçonner l'image de votre jardin.",
    "Il est parfois difficile d'entretenir seul l'entièreté de son jardin. Je peux alors égaliser et nettoyer votre terrain.",
    "Savoir entretenir son jardin et lui assurer un bon équilibre est important. Il faut alors nettoyer et parfois éliminer les mauvaises herbes.",
    "Lors de la demi-saison, on se retrouve souvent débordé par la charge de travail liée au nettoyage du jardin. Je m'occupe de ramasser et d'évacuer les feuilles mortes.",
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

  return (
    <Layout page="Taille et Tonte | Prestations - Entretien de Jardin">
      <Section id="prestations">
        <Introduction id="prestations-intro">
          <Title id="prestations-title">Découvrez mes prestations.</Title>
        </Introduction>
        <Prestation>
          <Subtitle>Tonte de pelouse</Subtitle>
          <BgImage src="/assets/images/tonte.jpg" />
        </Prestation>
        <Prestation>
          <Subtitle>Taille de haie et d'arbustes</Subtitle>
          <BgImage src="/assets/images/haie.jpg" />
        </Prestation>
        <Prestation>
          <Subtitle>Débroussaillage</Subtitle>
          <BgImage src="/assets/images/debroussaillage.jpg" />
        </Prestation>
        <Prestation>
          <Subtitle>Désherbage, bêchage, binage</Subtitle>
          <BgImage src="/assets/images/desherbage.jpg" />
        </Prestation>
        <Prestation>
          <Subtitle>Ramassage des feuilles</Subtitle>
          <BgImage src="/assets/images/feuille.jpg" />
        </Prestation>
        <Prestation>
          <Subtitle>Évacuation des déchets verts</Subtitle>
          <BgImage src="/assets/images/dechets.jpg" />
        </Prestation>
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
