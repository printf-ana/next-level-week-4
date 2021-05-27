//reaproveitar estrutura prévia de todas as páginas ex: sidebar
import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      {/* todos os elementos dentro do provider, tem acesso aos dados daquele contexto */}
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
