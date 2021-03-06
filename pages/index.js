import styled, { keyframes } from "styled-components";
import Layout from "../components/globals/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

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

const titleAnimation = keyframes`
  0% {
    transform: translateX(-500px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BgContainer = styled.section`
  z-index: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.homepage-s1 {
    background-color: var(--color-dark);
    border-bottom: 2px solid var(--color-gll);
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
      z-index: 1;
    }
  }
  &.homepage-s2 {
    background-color: var(--color-light);
    justify-content: space-between;
  }
  &.homepage-s3 {
    background-color: var(--color-light);
    height: auto;
    min-height: 100vh;
    padding-bottom: 6%;
    @media (max-width: 800px) {
      padding-bottom: 15%;
    }
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

const Subcontainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  &.homepage-sub-1 {
    align-items: center;
  }
  &.homepage-sub-2 {
    border-top: 2px solid var(--color-gll);
    border-bottom: 2px solid var(--color-gll);
    background-image: url("/assets/images/gazon.jpg");
    background-attachment: fixed;
    background-position: center;
    justify-content: center;
  }
  &.homepage-sub-3 {
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;

const Title = styled.h1`
  animation: ${titleAnimation} 0.5s both ease-in-out;
  z-index: 2;
  position: relative;
  left: 0;
  font-size: 7rem;
  color: var(--color-light);
  align-self: flex-start;
  margin: 0 100px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  @media (max-width: 800px) {
    font-size: 6rem;
    margin: 0 50px;
  }
  @media (max-width: 600px) {
    font-size: 5rem;
    margin: 0 50px;
  }
  @media (max-width: 500px) {
    font-size: 4rem;
    margin: 0 50px;
  }
  @media (max-width: 400px) {
    font-size: 3rem;
    margin: 0 30px;
  }
`;

const Subtitle = styled.h2`
  z-index: 2;
  color: var(--color-gll);
  font-size: 4rem;
  margin: 50px 50px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  &.homepage-subtitle-2 {
    align-self: flex-start;
    margin: 50px 5%;
    @media (max-width: 800px) {
      font-size: 3.8rem;
    }
    @media (max-width: 650px) {
      font-size: 2.8rem;
    }
    @media (max-width: 450px) {
      font-size: 1.8rem;
      margin-bottom: 0;
    }
  }
  @media (max-width: 650px) {
    font-size: 3rem;
    margin: 50px 5%;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Reference = styled.p`
  animation: ${titleAnimation} 0.5s both ease-in-out;
  z-index: 2;
  position: absolute;
  bottom: 5%;
  right: 5%;
  text-align: center;
  font-family: "Reey", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: var(--color-light);
  filter: drop-shadow(0 0 1px var(--color-dark));
  & a {
    font-family: "Montserrat-Medium", Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: var(--color-light);
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

const Text = styled.h2`
  z-index: 2;
  font-size: 3rem;
  color: var(--color-light);
  margin: 0 50px;
  &.homepage-text-1 {
    filter: drop-shadow(0 0 1px var(--color-dark));
    margin: 20px 50px;
    font-size: 2rem;
    align-self: center;
    text-align: left;
    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
  &.homepage-text-2 {
    filter: drop-shadow(0 0 1px var(--color-dark));
    align-self: flex-end;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 40px;
    margin-right: 10%;
    @media (max-width: 550px) {
      font-size: 1rem;
    }
    @media (max-width: 450px) {
      font-size: 0.5rem;
    }
  }
  &.homepage-text-3 {
    color: var(--color-dark);
    font-size: 1.2rem;
    margin: 50px 5%;
    width: 45%;
    align-self: flex-start;
    & a {
      color: var(--color-warm);
    }
    & span {
      color: var(--color-gll);
    }
    @media (max-width: 800px) {
      width: 90%;
    }
  }
`;

const Liste = styled.ul`
  margin: 50px 5%;
  align-self: flex-start;
  width: 45%;
  padding: 0;
  @media (max-width: 800px) {
    width: 85%;
    align-self: center;
  }
`;

const Puce = styled.li`
  font-family: "Montserrat-Bold", Arial, Helvetica, sans-serif;
  color: var(--color-dark);
  font-size: 1.2rem;
  margin-bottom: 15px;
  & a {
    color: var(--color-warm);
  }
  & span {
    color: var(--color-gll);
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
  &.homepage-btn-1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &.homepage-btn-2 {
    //margin-bottom: 5%;
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

export default function Home() {
  useEffect(() => {
    let titleHome = document.getElementById("title-homepage");
    let bgImg1 = document.getElementById("bg-img-1");

    window.onscroll = function () {
      let value = window.scrollY;

      bgImg1.style.top = value * 0.7 + "px";
      titleHome.style.left = value * 0.2 + "px";
    };
  }, []);

  return (
    <Layout animation page="Taille et Tonte | Accueil - Entretien de Jardin">
      <BgContainer className="homepage-s1">
        <BgImage
          src="/assets/images/gaz.jpg"
          alt="Photo de gazon"
          layout="fill"
          priority="true"
          id="bg-img-1"
        />
        <Title id="title-homepage">Entretenir votre jardin</Title>
        <Reference>
          par Fr??d??ric Stravius <br />-{" "}
          <a href="tel:0619394983">06 19 39 49 83</a> -<br />
          Concarneau
        </Reference>
      </BgContainer>
      <BgContainer className="homepage-s2">
        <Subcontainer className="homepage-sub-1">
          <Subtitle>Choisissez les prestations qui vous int??ressent.</Subtitle>
        </Subcontainer>
        <Link passHref href="/prestations">
          <Button className="homepage-btn-1">En savoir plus</Button>
        </Link>
        <Subcontainer className="homepage-sub-2">
          <Text className="homepage-text-1">
            Intervention ponctuelle, ou contrat ?? l&apos;ann??e : <br />
            Nous d??cidons ensemble de la formule id??ale pour l&apos;entretien de
            votre jardin.
          </Text>
          <Text className="homepage-text-2">
            Devis gratuits et sans conditions.
          </Text>
        </Subcontainer>
      </BgContainer>
      <BgContainer className="homepage-s3">
        <Subtitle className="homepage-subtitle-2">Comment proc??der ?</Subtitle>
        <Subcontainer className="homepage-sub-3">
          <Liste>
            <Puce>
              <Link href="/contact">Contactez moi</Link> afin que nous puissions
              convenir d&apos;un <span>rendez-vous</span>.
            </Puce>
            <Puce>
              <span>Je me d??place chez vous</span> et, ensemble, nous ??valuons
              le travail ?? effectuer. J&apos;estime un nombre d???heures pour
              pouvoir vous faire parvenir un devis avec le d??tail des travaux.
            </Puce>
            <Puce>
              <span>J&apos;interviens rapidement</span> apr??s avoir re??u le
              devis sign??. Vous receverez alors une facture et le r??glement ?? me
              faire parvenir (ch??que, virement bancaire???).
            </Puce>
            <Puce>
              <span>Je r??dige une attestation fiscale</span> en d??but
              d&apos;ann??e suivante, qui vous permettra de b??n??ficier d&apos;une{" "}
              <Link href="/certification">r??duction d&apos;imp??ts</Link> ??gale ??{" "}
              <span>50% du prix des travaux effectu??s</span>.
            </Puce>
          </Liste>
          <Text className="homepage-text-3">
            Pour les contrats dits <span>?? ?? l&apos;ann??e ??</span>, il s???agit
            d&apos;un forfait avec un nombre de passages d??finis ??
            l&apos;avance.
            <br />
            <span>Par exemple :</span> 12 interventions ?? l&apos;ann??e pour les
            tontes, dont deux interventions qui comprennent la taille de vos
            haies, au printemps et en automne.
            <br />
            <em>
              Lorsque vous renvoyez le devis il doit ??tre accompagn?? d&apos;un{" "}
              <span>premier r??glement</span> ??gal ?? la moiti?? du prix total du
              contrat. Le deuxi??me r??glement s&apos;effectuera le semestre
              suivant.
            </em>
          </Text>
        </Subcontainer>
        <Link passHref href="/contact">
          <Button className="homepage-btn-2">Contactez-moi !</Button>
        </Link>
      </BgContainer>
    </Layout>
  );
}
