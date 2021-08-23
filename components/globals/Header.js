import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderContainer = styled.header`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
`;

const LogoContainer = styled.div`
  margin: 30px 15px 0 15px;
  width: 150px;
  filter: drop-shadow(0 0 2px var(--color-dark));
`;

const Logo = styled(Image)`
  cursor: pointer;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
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
`;

const NavButton = styled(Link)``;

const NavText = styled.span`
  transition: transform 0.3s ease-in-out;
  color: var(--color-light);
  cursor: pointer;
  font-size: 1.4rem;
  padding: 10px;
  filter: drop-shadow(0 0 1px var(--color-dark));
  &:hover {
    transform: scale(1.1);
  }
  &.active-nav {
    transform: scale(1.1);
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

export default function Header(props) {
  const router = useRouter();

  return (
    <HeaderContainer>
      <LogoContainer>
        <NavButton href="/">
          <Logo
            src="/assets/logo-big.png"
            width="561"
            height="521"
            layout="responsive"
          />
        </NavButton>
      </LogoContainer>
      <NavContainer>
        <ButtonContainer>
          <NavButton href="/">
            <NavText className={router.pathname == "/" ? "active-nav" : ""}>
              Accueil
            </NavText>
          </NavButton>
          <Indicator
            className={router.pathname == "/" ? "active-indicator" : ""}
          />
        </ButtonContainer>
        <ButtonContainer>
          <NavButton href="/prestations">
            <NavText
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
        <ButtonContainer>
          <NavButton href="/paysagiste">
            <NavText
              className={router.pathname == "/paysagiste" ? "active-nav" : ""}
            >
              Paysagiste
            </NavText>
          </NavButton>
          <Indicator
            className={
              router.pathname == "/paysagiste" ? "active-indicator" : ""
            }
          />
        </ButtonContainer>
        <ButtonContainer>
          <NavButton href="/certification">
            <NavText
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
        <ButtonContainer>
          <NavButton href="/contact">
            <NavText
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
