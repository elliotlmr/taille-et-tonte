import styled, { keyframes } from "styled-components";
import Layout from "../components/globals/Layout";
//import Bg1 from "../images/gaz.jpg";
import Image from "next/image";
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

const saleOffAnimation = keyframes`
  50% {
    transform: translateX(-20%) translateY(50%);
  }
  55% {
    z-index: 6;
  }
  100% {
    transform: translateX(0) translateY(0);
    z-index: 6;
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
    background-color: var(--color-dark);
    justify-content: space-between;
  }
`;

const BgImage = styled(Image)`
  animation: ${bgImgAnimation} 1s both ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  min-width: 100vw;
  background-color: var(--color-dark);
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
    background-image: url("/assets/images/gazon.jpg");
    background-attachment: fixed;
    background-position: 50% 50%;
    justify-content: center;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, var(--color-dark), transparent);
      z-index: 1;
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

const Reference = styled.p`
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

const Text = styled.p`
  z-index: 2;
  font-size: 3rem;
  color: var(--color-light);
  filter: drop-shadow(0 0 1px var(--color-dark));
  margin: 0 50px;
  &.homepage-text-1 {
    font-size: 4rem;
    @media (max-width: 650px) {
      font-size: 3rem;
    }
    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }
  &.homepage-text-2 {
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
  &.homepage-text-3 {
    align-self: flex-end;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 40px;
    @media (max-width: 550px) {
      font-size: 1rem;
    }
    @media (max-width: 450px) {
      font-size: 0.5rem;
    }
  }
  &.sale-number {
    margin: auto;
    text-align: center;
    font-size: 4rem;
    font-family: "Reey", Arial, Helvetica, sans-serif;
    @media (max-width: 1300px) {
      font-size: 3rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  &.sale-text {
    text-align: center;
    margin: 0 10px;
    font-size: 1rem;
    @media (max-width: 1200px) {
      font-size: 0.9rem;
    }
    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }
`;

const Button = styled.button`
  transition: all 0.2s ease-in-out;
  z-index: 2;
  width: 300px;
  height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid var(--color-gll);
  border-radius: 5px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  background-color: var(--color-gll);
  font-family: "Montserrat-Bold";
  color: var(--color-light);
  font-size: 2rem;
  text-shadow: 0 0 1px var(--color-dark);
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 400px) {
    width: 200px;
    height: 75px;
    font-size: 1.5rem;
  }
`;

const ServicePersonne = styled.div`
  animation: ${titleAnimation} 0.5s both ease-in-out;
  z-index: 5;
  position: absolute;
  margin-left: 2%;
  left: 0;
  bottom: 8%;
  height: 15%;
  width: 20%;
  cursor: pointer;
  filter: drop-shadow(0 0 2px var(--color-dark));
  @media (max-width: 600px) {
    margin-left: 5%;
    bottom: 5%;
    height: 10%;
  }
`;

const SaleOff = styled.div`
  z-index: 5;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &.sale-off-number {
    top: 0;
    right: 0;
    height: 80%;
    width: 80%;
    border: 2px solid var(--color-gll);
    border-radius: 75% 25% 80% 20% / 45% 60% 40% 55%;
    background-color: var(--color-dark);
    backdrop-filter: blur(15px);
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  &.sale-off-text {
    z-index: 4;
    top: 35%;
    right: 5%;
    height: 60%;
    width: 80%;
    border-radius: 75% 25% 80% 20% / 45% 60% 40% 55%;
    background-color: var(--color-light-soft);
    backdrop-filter: blur(5px);
    @media (max-width: 600px) {
      width: 100%;
      //transform: translateY(50%);
      top: 25%;
    }
    &.active-sale {
      animation: ${saleOffAnimation} 0.5s both ease-in-out;
    }
  }
`;

export default function Home() {
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    let titleHome = document.getElementById("title-homepage");
    let bgImg1 = document.getElementById("bg-img-1");
    let service = document.getElementById("service-personne");

    window.onscroll = function () {
      let value = window.scrollY;

      bgImg1.style.top = value * 0.7 + "px";
      titleHome.style.left = value * 0.2 + "px";
      service.style.left = value * 0.8 + "px";
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
        <Link passHref href="/certification">
          <ServicePersonne
            onMouseOver={() => setIsOver(true)}
            onMouseOut={() => setIsOver(false)}
            id="service-personne"
          >
            <SaleOff
              className={
                isOver ? "active-sale sale-off-number" : "sale-off-number"
              }
            >
              <Text className="sale-number">-50%</Text>
            </SaleOff>
            <SaleOff
              className={isOver ? "active-sale sale-off-text" : "sale-off-text"}
            >
              <Text className="sale-text">Service à la personne !</Text>
            </SaleOff>
          </ServicePersonne>
        </Link>
        <Reference>
          par Frédéric Stravius <br />-{" "}
          <a href="tel:0619394983">06 19 39 49 83</a> -<br />
          Concarneau
        </Reference>
      </BgContainer>
      <BgContainer className="homepage-s2">
        <Subcontainer className="homepage-sub-1">
          <Text className="homepage-text-1">
            Choisissez les prestations qui vous intéressent.
          </Text>
        </Subcontainer>
        <Link passHref href="/prestations">
          <Button>En savoir plus</Button>
        </Link>
        <Subcontainer className="homepage-sub-2">
          <Text className="homepage-text-2">
            Intervention ponctuelle, ou contrat à l&apos;année : <br />
            Nous décidons ensemble de la formule idéale pour l&apos;entretien de
            votre jardin.
          </Text>
          <Text className="homepage-text-3">
            Devis gratuits et sans conditions.
          </Text>
        </Subcontainer>
      </BgContainer>
    </Layout>
  );
}
