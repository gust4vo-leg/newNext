"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./id.css";

export default function Produto() {
  const [produto, setProduto] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
      });
  }, []);

  return (
    <main>
      {produto != null && (
        <>
          <h1>Descrição do produto: {produto.title}</h1>

          <div className="cardVisualizacao">
            <img src={produto.images} alt={produto.title} />

            <div className="informacoesProduto">
              <h2>{produto.title}</h2>

              <p>
                <strong>Descrição:</strong> {produto.description}
              </p>

              <p>
                <strong>Categoria:</strong> {produto.category}
              </p>

              <p>
                <strong>Preço:</strong> R$ {produto.price}
              </p>

              <p>
                <strong>Desconto:</strong> {produto.discountPercentage}%
              </p>

              <p>
                <strong>Avaliação:</strong> {produto.rating}
              </p>

              <p>
                <strong>Estoque:</strong> {produto.stock} unidades
              </p>

              <p>
                <strong>Marca:</strong> {produto.brand}
              </p>

              <p>
                <strong>SKU:</strong> {produto.sku}
              </p>

              <p>
                <strong>Peso:</strong> {produto.weight} kg
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
