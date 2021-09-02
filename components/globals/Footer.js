import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  z-index: 6;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
`;

const FooterMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
  & a {
    text-decoration: none;
  }
`;

const MenuButton = styled.li`
  font-family: "Montserrat-Bold";
  color: var(--color-gll);
  text-shadow: 0 0 2px var(--color-dark);
  margin: 0 5px;
  font-size: 0.8rem;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 0.5rem;
  }
  @media (max-width: 320px) {
    font-size: 0.4rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterMenu>
        <Link passHref href="/mentions">
          <MenuButton>Mentions Légales</MenuButton>
        </Link>
        <MenuButton>|</MenuButton>
        <Link passHref href="/paysagiste">
          <MenuButton>Frédéric Stravius</MenuButton>
        </Link>
        <MenuButton>|</MenuButton>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/elliot-lemaire/"
        >
          <MenuButton>Shiro-e Web Design</MenuButton>
        </a>
      </FooterMenu>
    </FooterContainer>
  );
}
