import styled from "styled-components";
import Layout from "../components/globals/Layout";
//import Bg1 from "../images/gaz.jpg";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const BgContainer = styled.section`
  z-index: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.homepage-s1 {
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
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
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
  z-index: 2;
  position: relative;
  left: 0;
  font-size: 7rem;
  color: var(--color-light);
  align-self: flex-start;
  margin: 0 100px;
  filter: drop-shadow(0 0 1px var(--color-dark));
`;

const Reference = styled.p`
  z-index: 2;
  position: absolute;
  bottom: 5%;
  right: 5%;
  text-align: center;
  font-family: "Reey", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  color: var(--color-light);
  filter: drop-shadow(0 0 1px var(--color-dark));
  & span {
    font-family: "Montserrat-Medium", Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
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
  }
  &.homepage-text-2 {
    margin: 20px 50px;
    font-size: 2rem;
    align-self: center;
    text-align: left;
  }
  &.homepage-text-3 {
    align-self: flex-end;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 40px;
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
`;

export default function Home() {
  useEffect(() => {
    let titleHome = document.getElementById("title-homepage");
    let bgImg1 = document.getElementById("bg-img-1");

    window.onscroll = function () {
      let value = window.scrollY;

      bgImg1.style.top = value * 0.6 + "px";
      titleHome.style.left = value * 0.2 + "px";
    };
  });

  return (
    <Layout page="Taille et Tonte | Accueil - Entretien de Jardin">
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
          par Frédéric Stravius <br />- <span>06 19 39 49 83</span> -<br />
          Concarneau
        </Reference>
      </BgContainer>
      <BgContainer className="homepage-s2">
        <Subcontainer className="homepage-sub-1">
          <Text className="homepage-text-1">
            Choisissez les prestations qui vous intéressent.
          </Text>
        </Subcontainer>
        <Link href="/prestations">
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
