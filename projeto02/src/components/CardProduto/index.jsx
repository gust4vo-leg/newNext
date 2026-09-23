import "./cardProduto.css";

export default function CardProduto({ produto }) {
    return (
        <div className="wrapperProduto">
            <img src={produto.images}/>
            <h3>{produto.title}</h3>
            <a href={`/produtos/${produto.id}`}>Saiba mais...</a>
        </div>
    )
}
