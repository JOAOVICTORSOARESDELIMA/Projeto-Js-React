import "./Corpo.css";
import PontoTuristico from "./PontoTuristico";
import imagemCentro from "../assets/centro-historico.jpg";

export default function Corpo({ paragrafos, pontos }) {
  return (
    <main className="corpo">
      <section className="intro">
        {paragrafos.map((texto, i) => (
          <p key={i}>{texto}</p>
        ))}
      </section>

      <figure>
        <img src={imagemCentro} alt="Casarões e igrejas do Centro Histórico de João Pessoa" />
        <figcaption>Centro Histórico de João Pessoa</figcaption>
      </figure>

      <section>
        <h2>Destaques do centro</h2>
        <div className="pontos">
          {pontos.map((ponto) => (
            <PontoTuristico key={ponto.nome} {...ponto} />
          ))}
        </div>
      </section>
    </main>
  );
}
