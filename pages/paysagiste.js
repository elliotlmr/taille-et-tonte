import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Layout from "../components/globals/Layout";
import { useState } from "react";

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

const FadeInAnimation = keyframes`
  from {
    transform: translateX(200px);
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
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  z-index: 1;
  position: relative;
  height: 80%;
  &.paysagiste-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  &.paysagiste-right {
    width: 50%;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1000px) {
    height: 40%;
    &.paysagiste-left {
      width: 100%;
      flex-direction: row;
      padding: 0 5%;
    }
    &.paysagiste-right {
      width: 100%;
    }
  }
  @media (max-width: 550px) {
    &.paysagiste-left {
      flex-direction: column;
      justify-content: flex-start;
    }
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

const ProfilePicture = styled(Image)`
  animation: ${FadeInAnimation} 0.5s both ease-in-out;
  z-index: 3;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
`;

const MapPicture = styled(Image)`
  z-index: 3;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  border-radius: 15px;
`;

const PictureContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 400px;
  width: 300px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  @media (max-width: 1000px) {
    height: 100%;
    width: 210px;
  }
  &.map-container {
    z-index: 5;
    overflow: hidden;
    width: 80%;
    height: 50%;
    border-radius: 15px;
    bottom: auto;
    top: 25%;
    &::before {
      content: "";
      z-index: 6;
      position: absolute;
      top: 15%;
      right: 0;
      left: 0;
      margin: auto;
      width: 260px;
      height: 250px;
      border: 3px solid var(--color-gll);
      border-radius: 51% 49% 45% 55% / 35% 40% 60% 60%;
      border-bottom: none;
      border-top: none;
    }
    @media (max-width: 1000px) {
      height: 75%;
      width: 100%;
      position: unset;
      &::before {
        width: 200px;
        height: 150px;
        top: 25%;
      }
    }
    @media (max-width: 550px) {
      height: 60%;
    }
  }
`;

const Card = styled.div`
  z-index: 5;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: absolute;
  right: 20%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
  background-color: var(--color-light-soft);
  backdrop-filter: blur(5px);
  filter: drop-shadow(0 0 2px var(--color-dark));
  border-radius: 15px;
  &.expended {
    width: 160%;
  }
  @media (max-width: 1300px) {
    width: 80%;
    right: 10%;
  }
  @media (max-width: 1000px) {
    top: 12.5%;
    width: 90%;
    right: 0;
    left: 0;
    margin: auto;
    &.expended {
      top: 12.5%;
      width: 90%;
      height: 165%;
    }
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 5%;
  font-size: 3rem;
  color: var(--color-light);
  text-shadow: 0 0 2px var(--color-dark);
`;

const Text = styled.p`
  transition: all 0.3s ease-in-out;
  color: var(--color-light);
  text-shadow: 0 0 2px var(--color-dark);
  &.name {
    position: absolute;
    top: 45%;
    left: 5%;
    font-size: 1.5rem;
    &.expended {
      top: 20%;
    }
  }
  &.under-map {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80%;
    font-size: 1.2rem;
    & a {
      color: var(--color-warm);
    }
    @media (max-width: 1000px) {
      position: unset;
      width: unset;
      margin-top: 0;
      padding: 0 15px;
      text-align: justify;
    }
    @media (max-width: 550px) {
      margin-top: 15px;
      font-size: 1rem;
    }
  }
`;

const Svg = styled.svg`
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(0 0 2px var(--color-dark));
  color: var(--color-light);
  position: absolute;
  bottom: 5%;
  left: 5%;
  &:hover {
    transform: scale(1.1);
  }
  &.expended {
    left: auto;
    bottom: auto;
    right: 5%;
    top: 5%;
    transform: rotate(180deg);
  }
  @media (max-width: 1000px) {
    transform: rotate(-90deg);
    width: 75px;
    height: 75px;
    &:hover {
      transform: rotate(-90deg) scale(1.1);
    }
    &.expended {
      transform: rotate(90deg);
    }
  }
`;

export default function Home() {
  const [expend, setExpend] = useState(false);

  return (
    <Layout page="Taille & Tonte | Paysagiste - Entretien de Jardin">
      <Section>
        <BgImage src="/assets/images/gaz.jpg" layout="fill" />
        <Container className="paysagiste-left">
          <PictureContainer className="map-container">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD4oagS-DQzVtk39VhczQP_BpdCJUexcWs
            &q=Space+Needle,Seattle+WA"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
            {/* <MapPicture src="/assets/images/map-concarneau.jpg" layout="fill" /> */}
          </PictureContainer>
          <Text className="under-map">
            Opérationnel sur une zone de 20km autour de Concarneau.
            <br />
            Vous pensez être hors zone ? <a href="/contact">Contactez-moi !</a>
          </Text>
        </Container>
        <Container className="paysagiste-right">
          <Card
            onClick={() => setExpend(expend ? false : true)}
            className={expend ? "expended" : ""}
          >
            <Title>Paysagiste à Concarneau</Title>
            <Text className={expend ? "expended name" : "name"}>
              Frédéric Stravius
            </Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={expend ? "50" : "100"}
              height={expend ? "50" : "100"}
              fill="currentColor"
              className={
                expend
                  ? "expended bi bi-arrow-left-circle"
                  : "bi bi-arrow-left-circle"
              }
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </Svg>
            <PictureContainer>
              <ProfilePicture
                src="/assets/images/fred.png"
                width="768"
                height="1024"
              />
            </PictureContainer>
          </Card>
        </Container>
      </Section>
    </Layout>
  );
}
