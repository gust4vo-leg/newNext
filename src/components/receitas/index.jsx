export default function CardReceita({ receita }) {
  return (
    <div className="card-receita">
      <img src={receita.image} alt={receita.name} />
      <h3>{receita.name}</h3>
      <div className="info-alimento">
        <span>País: {receita.cuisine}</span>
        <span>Dificuldade: {receita.difficulty}</span>
      </div>
      <strong>Ingredientes: <span>{receita.ingredients.join(", ")}</span></strong>
    </div>
  );
}
