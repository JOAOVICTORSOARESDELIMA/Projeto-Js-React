import './Corpo.css';

import centroHistorico from './Imagem/download.jfif';

export default function Corpo(){
    return(
        <main>
            <p>
                O Centro Histórico de João Pessoa é um dos mais ricos em patrimônio cultural do Brasil.
                Fundado em 1585, preserva construções coloniais, igrejas barrocas e ruas de pedra que
                contam a história da terceira cidade mais antiga do país. Seus casarões coloridos e praças
                são testemunhos vivos da fusão entre culturas indígena, africana e europeia que moldaram
                a identidade da cidade. Entre os destaques estão o Convento de São Francisco, a Igreja da
                Ordem Terceira de São Francisco e o Hotel Globo, símbolos de diferentes épocas da evolução
                urbana. Além do valor histórico, o centro abriga espaços culturais, museus e uma vida
                artística intensa, com feiras e eventos que atraem visitantes. Passear pelo centro histórico
                é fazer uma viagem no tempo, descobrindo detalhes que revelam a importância de João Pessoa
                na formação do Brasil.
            </p>
            <img
                src={centroHistorico} 
                alt="Centro Histórico de João Pessoa"
                className="imagem-centro-historico"
            />
        </main>
    )
}