"use client";

import { useEffect, useState } from "react";
import CardReceita from "@/components/receitas";
import "./receita.css";

export default function Receitas() {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListaReceitas(data.recipes);
        setMsgErro("");
      })
      .catch((error) => setMsgErro(error.message));
  }, []);

  return (
    <main className="container">
      <h1>Lista de Receitas</h1>
      {msgErro !== "" && <p>ERRO: {msgErro}</p>}

      {listaReceitas.length > 0 ? (
        <div className="grid-card">
          {listaReceitas.map((ali) => {
            return (
              <CardReceita key={ali.id} receita={ali} />
            );
          })}
        </div>
      ) : (
        <div>Carregando receitas...</div>
      )}
    </main>
  );
}
