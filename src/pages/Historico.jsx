import "/src/styles/Historico.css"
import Pedido from "../components/Historico/Pedido"
import HeaderH from "../components/Historico/Header"
import PedidoH from "../components/Historico/PedidoH"
function Historico(){
    return(
        <div className="mainhistorico">
            <HeaderH/>
            <div className="Pedidos">
                <Pedido 
                imagem={"/public/xbacon.jpg"}
                nome={"Teste"}
                avaliacao={"★★★☆☆"}
                descricao={"Descrição do seu pedido muito delicioso que está a caminho."}
                />
                <PedidoH 
                imagem={"/public/xbacon.jpg"}
                avaliacao={"★★★★★"}
                nome={"Teste"}
                descricao={"Descrição do produto delicioso que já foi entregue."}
                />
            </div>
        </div>
    )
}
export default Historico