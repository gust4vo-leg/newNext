"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json";
import { useParams } from "next/navigation";
import "./id.css";

export default function Filme() {
  const [filme, setFilme] = useState(null);
  const params = useParams();

  useEffect(() => {
    const filmeEncontrado = dados.find((f) => f.id == params.id);
    setFilme(filmeEncontrado);
  }, []);

  return (
    <main>
      {filme != null && (
        <>
          <h1>Descrição do filme: {filme.titulo}</h1>
          <div className="cardVisualizacao">
            <img src={filme.imagem} />
            <div className="cardInfo">
              <div className="infoDetails">
                <p>
                  Ano: <span>{filme.ano}</span>
                </p>
                <p>
                  Genero: <span>{filme.genero}</span>
                </p>
                <p>
                  Duração:<span> {filme.duracaoMinutos}</span>
                </p>
              </div>
              <div className="descricao">
                <p>{filme.sinopse}</p>
              </div>
              <div className="diretor">
                <p>Diretor: <span>{filme.diretores}</span></p>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
