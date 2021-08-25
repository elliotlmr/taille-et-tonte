import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Layout from "../components/globals/Layout";
import { useState } from "react";

const BgImageAnimation = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
`;

const Section = styled.section`
  z-index: 0;
  position: relative;
  width: 100%;
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
    left: 40%;
    width: 55%;
    height: 100%;
    background: linear-gradient(to right, var(--color-dark), transparent);
    z-index: 1;
  }
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  animation: ${BgImageAnimation} 0.5s both ease-in-out;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  &.prestations-left {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.prestations-right {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PrestaList = styled.ul`
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 5%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin-top: 150px;
  list-style: none;
  @media (max-width: 1150px) {
    position: fixed;
    left: 10%;
    margin: auto;
    width: max-content;
  }
  @media (max-width: 800px) {
    height: 40%;
  }
  @media (max-width: 400px) {
    left: 5%;
    padding: 0;
  }
`;

const Prestation = styled.li`
  transition: all 0.3s ease-in-out;
  transform-origin: left;
  position: relative;
  left: 0;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  font-size: 2rem;
  color: var(--color-light);
  cursor: pointer;
  &::before {
    transition: width 0.3s ease-in-out;
    content: "";
    position: absolute;
    bottom: -1px;
    height: 2px;
    width: 0;
    background-color: var(--color-gll);
  }
  & span {
    margin-left: 20px;
  }
  &:hover {
    left: 100px;
    &::before {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
    &:hover {
      left: 50px;
    }
  }
`;

const Leaf = styled(Image)`
  margin: 10px;
`;

const Subcontainer = styled.div`
  z-index: 5;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  height: 50%;
  width: 60%;
  border-radius: 100% 0% 100% 0% / 50% 50% 50% 50%;
  border: 1px solid var(--color-gll);
  background-color: var(--color-dark-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    left: -45px;
    bottom: -30px;
    content: "";
    width: 50px;
    height: 10px;
    border-top: 1px solid var(--color-gll);
    border-radius: 70% 30% 100% 0% / 100% 50% 50% 0%;
    transform: rotate(-50deg);
  }
  @media (max-width: 1350px) {
    right: 5%;
    left: auto;
  }
  @media (max-width: 1150px) {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 10%;
    height: 15%;
    width: 80%;
    border: none;
    border-radius: unset;
    background-color: transparent;
    &::before {
      display: none;
    }
  }
`;

const Description = styled.p`
  color: var(--color-light);
  font-size: 1.5rem;
  max-width: 75%;
  text-align: justify;
  @media (max-width: 1350px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1150px) {
    text-align: center;
  }
  @media (max-width: 1150px) {
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

export default function Home() {
  const [index, setIndex] = useState(null);

  const textArray = [
    "Choisissez la taille de tonte, je m'occupe de raffraichir la coupe du gazon de votre jardin en prenant soin de ne pas abîmer le terrain ou autres végétaux.",
    "Taille simple ou complexe, je redonne forme à vos haies / arbustes pour refaçonner l'image de votre jardin.",
    "Il est parfois difficile d'entretenir seul l'entièreté de son jardin. Je peux alors égaliser et nettoyer votre terrain.",
    "Savoir entretenir son jardin et lui assurer un bon équilibre est important. Il faut alors nettoyer et parfois éliminer les mauvaises herbes.",
    "Lors de la demi-saison, on se retrouve souvent débordé par la charge de travail liée au nettoyage du jardin. Je m'occupe de ramasser et d'évacuer les feuilles mortes.",
    "Après chacune de mes prestation, je prend en charge l'évacuation des déchets verts si vous le souhaitez.",
  ];

  return (
    <Layout page="Taille et Tonte | Prestations - Entretien de Jardin">
      <Section>
        <Container className="prestations-left">
          <PrestaList>
            <Prestation onMouseOver={() => setIndex(0)}>
              <Leaf
                src="/assets/leaf.png"
                width="32px"
                height="32px"
                layout="fixed"
              />
              <span>Tonte de pelouse</span>
            </Prestation>
            <Prestation onMouseOver={() => setIndex(1)}>
              <Leaf
                src="/assets/leaf.png"
                width="32px"
                height="32px"
                layout="fixed"
              />
              <span>Taille de haie et d&apos;arbustes</span>
            </Prestation>
            <Prestation onMouseOver={() => setIndex(2)}>
              <Leaf
                src="/assets/leaf.png"
                width="32px"
                height="32px"
                layout="fixed"
              />
              <span>Débroussaillage</span>
            </Prestation>
            <Prestation onMouseOver={() => setIndex(3)}>
              <Leaf
                src="/assets/leaf.png"
                width="32px"
                height="32px"
                layout="fixed"
              />
              <span>Désherbage, bêchage, binage</span>
            </Prestation>
            <Prestation onMouseOver={() => setIndex(4)}>
              <Leaf
                src="/assets/leaf.png"
                width="32px"
                height="32px"
                layout="fixed"
              />
              <span>Ramassage des feuilles</span>
            </Prestation>
            <Prestation onMouseOver={() => setIndex(5)}>
              <Leaf
                src="/assets/leaf.png"
                width="32px"
                height="32px"
                layout="fixed"
              />
              <span>Évacuation des déchets verts</span>
            </Prestation>
          </PrestaList>
        </Container>
        <Container className="prestations-right">
          <Subcontainer>
            <Description>
              {index !== null
                ? textArray[index]
                : "Selectionnez une prestation pour en savoir plus."}
            </Description>
          </Subcontainer>
          {index === null && (
            <BgImage
              src="/assets/images/gaz.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
          {index === 0 && (
            <BgImage
              src="/assets/images/tonte.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
          {index === 1 && (
            <BgImage
              src="/assets/images/haie.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
          {index === 2 && (
            <BgImage
              src="/assets/images/debroussaillage.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
          {index === 3 && (
            <BgImage
              src="/assets/images/desherbage.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
          {index === 4 && (
            <BgImage
              src="/assets/images/feuille.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
          {index === 5 && (
            <BgImage
              src="/assets/images/dechets.jpg"
              alt="Photo de gazon"
              layout="fill"
              priority="true"
            />
          )}
        </Container>
      </Section>
    </Layout>
  );
}
