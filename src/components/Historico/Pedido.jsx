import "/src/styles/Historico.css"
import { useState } from "react";
function Pedido({imagem, nome, avaliacao, descricao}){
    return(
        <div className="produto">
            <h1>{nome}</h1>
            <img src={imagem}></img>
            <p>{avaliacao}</p>
            <p>{descricao}</p>
            <button>Confirmar Entrega</button>
            <button>Cancelar</button>
        </div>    
        )
}
export default Pedido;