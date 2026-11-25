import "./Rodape.css";

export default function Rodape({ email, redes }) {
  return (
    <footer className="rodape">
      <p>
        Entre em contato: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>Siga-nos nas redes sociais:</p>
      <ul>
        {redes.map((rede) => (
          <li key={rede.nome}>
            {/* noopener/noreferrer: a aba nova não consegue controlar esta página */}
            <a href={rede.url} target="_blank" rel="noopener noreferrer">
              {rede.nome}
            </a>
          </li>
        ))}
      </ul>
      <p className="ano">© {new Date().getFullYear()} Centro Histórico de João Pessoa</p>
    </footer>
  );
}
