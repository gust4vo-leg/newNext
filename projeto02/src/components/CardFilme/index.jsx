import "./cardFilme.css";

export default function CardFilme({ filme }) {
  return (
    <main>
      <div className="wrapperFilme">
        <img src={filme.imagem} />
        <h3>{filme.titulo}</h3>
        <a href={`/filmes/${filme.id}`}>Saiba mais...</a>
      </div>
    </main>
  );
}
