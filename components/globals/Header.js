import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HeaderContainer = styled.header`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const LogoContainer = styled.div`
  margin: 30px 15px 0 15px;
  width: 220px;
  filter: ${(props) =>
    props.black
      ? "drop-shadow(0 0.5px 0 var(--color-dark))"
      : "drop-shadow(0 0.5px 0 var(--color-light))"};
  @media (max-width: 600px) {
    width: 150px;
  }
  @media (max-width: 400px) {
    width: 100px;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const NavContainer = styled.nav`
  transition: all 0.3s ease-in-out;
  transform-origin: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  @media (max-width: 1024px) {
    transform: scaleX(0);
    position: fixed;
    left: 0;
    top: 0;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    background-color: var(--color-dark-soft);
    border-right: 2px solid var(--color-gll);
    backdrop-filter: blur(10px);
    &.menu-displayed {
      transform: scale(1);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    & div {
      background-color: var(--color-light);
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    transform: translateX(-150px);
    opacity: 0;
    &#display-1 {
      transition: all 0.5s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
    &#display-2 {
      transition: all 0.6s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
    &#display-3 {
      transition: all 0.7s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
    &#display-4 {
      transition: all 0.8s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
    &#display-5 {
      transition: all 0.9s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const NavButton = styled(Link)``;

const NavText = styled.a`
  transition: transform 0.3s ease-in-out;
  color: ${(props) =>
    props.black ? "var(--color-dark)" : "var(--color-light)"};
  cursor: pointer;
  font-size: 1.4rem;
  padding: 10px;
  filter: ${(props) =>
    props.black
      ? "drop-shadow(0 0 1px var(--color-light))"
      : "drop-shadow(0 0 1px var(--color-dark))"};
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  &.active-nav {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    color: var(--color-light);
    filter: drop-shadow(0 0 1px var(--color-dark));
  }
`;

const Indicator = styled.div`
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  height: 3px;
  width: 3px;
  border-radius: 5px;
  background-color: var(--color-gll);
  filter: drop-shadow(0 0 1px var(--color-dark));
  &.active-indicator {
    background-color: var(--color-light);
    width: 100%;
  }
`;

const WrapContainer = styled.div`
  transition: all 0.5s ease-in-out;
  z-index: 10;
  position: fixed;
  right: 3%;
  top: 5%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-top: 2px solid var(--color-gll);
  border-bottom: 2px solid var(--color-gll);
  border-radius: 100% 0% 100% 0% / 50% 50% 50% 50%;
  filter: drop-shadow(0 0 1px var(--color-dark));
  &.menu-displayed {
    border-color: var(--color-warm);
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

const WrapBar = styled.div`
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 25px;
  height: 3px;
  border-radius: 50px;
  background-color: var(--color-light);
  &#wrap-bar-1 {
    top: 12px;
    &.menu-displayed {
      transform: rotate(45deg);
      top: 22.5px;
    }
  }
  &#wrap-bar-2 {
    top: 21px;
    &.menu-displayed {
      transform: translateX(200%);
      opacity: 0;
    }
  }
  &#wrap-bar-3 {
    top: 30px;
    &.menu-displayed {
      transform: rotate(-45deg);
      top: 22.5px;
    }
  }
`;

export default function Header(props) {
  const router = useRouter();
  const [display, setDisplay] = useState(false);

  return (
    <HeaderContainer>
      <WrapContainer
        className={display ? "menu-displayed" : ""}
        onClick={() => setDisplay(display ? false : true)}
      >
        <WrapBar id="wrap-bar-1" className={display ? "menu-displayed" : ""} />
        <WrapBar id="wrap-bar-2" className={display ? "menu-displayed" : ""} />
        <WrapBar id="wrap-bar-3" className={display ? "menu-displayed" : ""} />
      </WrapContainer>

      <NavButton href="/">
        <LogoContainer black={props.black}>
          <Logo
            src="/assets/logo-tt.png"
            width="2045"
            height="1287"
            layout="responsive"
            priority="true"
            alt="Logo Taille et Tonte"
          />
        </LogoContainer>
      </NavButton>
      <NavContainer className={display ? "menu-displayed" : ""}>
        <ButtonContainer id={display ? "display-1" : ""}>
          <NavButton passHref href="/">
            <NavText
              black={props.black}
              className={router.pathname == "/" ? "active-nav" : ""}
            >
              Accueil
            </NavText>
          </NavButton>
          <Indicator
            className={router.pathname == "/" ? "active-indicator" : ""}
          />
        </ButtonContainer>
        <ButtonContainer id={display ? "display-2" : ""}>
          <NavButton passHref href="/prestations">
            <NavText
              black={props.black}
              className={router.pathname == "/prestations" ? "active-nav" : ""}
            >
              Prestations
            </NavText>
          </NavButton>
          <Indicator
            className={
              router.pathname == "/prestations" ? "active-indicator" : ""
            }
          />
        </ButtonContainer>
        <ButtonContainer id={display ? "display-4" : ""}>
          <NavButton passHref href="/certification">
            <NavText
              black={props.black}
              className={
                router.pathname == "/certification" ? "active-nav" : ""
              }
            >
              Certification
            </NavText>
          </NavButton>
          <Indicator
            className={
              router.pathname == "/certification" ? "active-indicator" : ""
            }
          />
        </ButtonContainer>
        <ButtonContainer id={display ? "display-5" : ""}>
          <NavButton passHref href="/contact">
            <NavText
              black={props.black}
              className={router.pathname == "/contact" ? "active-nav" : ""}
            >
              Contact
            </NavText>
          </NavButton>
          <Indicator
            className={router.pathname == "/contact" ? "active-indicator" : ""}
          />
        </ButtonContainer>
      </NavContainer>
    </HeaderContainer>
  );
}
