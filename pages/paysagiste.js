import styled from "styled-components";
import Layout from "../components/globals/Layout";

const Test = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
`;

export default function Home() {
  return (
    <Layout page="Taille & Tonte | Paysagiste - Entretien de Jardin">
      <Test></Test>
    </Layout>
  );
}
