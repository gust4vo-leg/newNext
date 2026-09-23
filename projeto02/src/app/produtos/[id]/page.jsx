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
            <img src={produto.images}/>
          </div>
        </>
      )}
    </main>
  );
}
