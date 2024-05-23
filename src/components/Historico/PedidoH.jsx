import "/src/styles/Historico.css"


function PedidoH({nome, descricao, imagem, avaliacao}){
    return(
        <div className="mainPedidoH">
            <p>{nome}</p>
            <img src={imagem}></img>
            <p>{avaliacao}</p>
            <p>{descricao}</p>
        </div>
    )
}
export default PedidoH;