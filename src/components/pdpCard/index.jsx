import './styles.css'

export function PdpCard() {
    return (
        <div class="container-pdp-card">
            <div class="box">
                <div class="game">
                    <div id="img1">
                        <img src={require("../../assets/635329.jpeg")} alt="" />
                    </div>
                    <div id="game1">
                        <p id="l1">JOGO BASE</p>
                        <p id="l2">Spider Man: The Game</p>
                        <p id="l3">R$ 150,00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}