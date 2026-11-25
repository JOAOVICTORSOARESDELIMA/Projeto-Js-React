import "./PontoTuristico.css";

export default function PontoTuristico({ nome, descricao }) {
  return (
    <article className="ponto">
      <h3>{nome}</h3>
      <p>{descricao}</p>
    </article>
  );
}
