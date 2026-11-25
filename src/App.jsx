import Cabecalho from "./components/Cabecalho";
import Corpo from "./components/Corpo";
import Rodape from "./components/Rodape";
import { site, introducao, pontosTuristicos, contato } from "./data/conteudo";

export default function App() {
  return (
    <>
      <Cabecalho titulo={site.titulo} subtitulo={site.subtitulo} />
      <Corpo paragrafos={introducao} pontos={pontosTuristicos} />
      <Rodape email={contato.email} redes={contato.redes} />
    </>
  );
}
