import './styles.css';

export function Form() {
    return (
        <div class="container">
            <div class="box">
                <input id="nome" type="text" placeholder="Nome do jogo" />
                <div class="p">
                    <div class="p1">
                        <input id="img1" type="file" placeholder="imagem" />
                        <input id="sobre1" type="text" placeholder="sobre" />
                    </div>
                    <div class="p2">
                        <input id="img2" type="file" placeholder="imagem" />
                        <input id="sobre2" type="text" placeholder="sobre" />
                    </div>
                </div>
                <div class="anuncio">
                    <input id="img3" type="file" placeholder="imagem do jogo" />
                    <input id="introducao" type="text" placeholder="Introdução" />
                </div>
                <div class="sobre">
                    <div class="generos">
                        <p id="t1">Genêros</p>
                        <input id="genero" type="text" placeholder="Genêros" />
                    </div>
                    <div class="caract">
                        <p id="t2">Características</p>
                        <input id="carac" type="text" placeholder="Características" />
                    </div>
                </div>
                <div class="texto">
                    <div class="a">
                        <input id="nom" type="text" placeholder="Nome do jogo" /><p id="e"> já está disponível para PC</p>
                    </div>
                    <input id="b" type="text" placeholder="Introdução-2" />
                    <p id="e">Características principais</p>
                    <input type="text" id="c" />
                    <p id="e">Características da versão para PC</p>
                    <input type="text" id="c" />
                </div>
                <div class="espec">
                    <h1>Especificações</h1>
                    <input type="text" id="d" placeholder="Sistema operacional" />
                    <div class="windows">
                        <div id="minimo">
                            <h2>Mínimo</h2>
                            <p id="v">Sistema operacional</p>
                            <input type="text" id="b" />
                            <p id="v">Processador</p>
                            <input type="text" id="b" />
                            <p id="v">Memória</p>
                            <input type="text" id="b" />
                            <p id="v">Armazenamento</p>
                            <input type="text" id="b" />
                            <p id="v">DirectX</p>
                            <input type="text" id="b" />
                            <p id="v">Placa de vídeo</p>
                            <input type="text" id="b" />
                        </div>
                        <div id="recomendado">
                            <h2>Recomendado</h2>
                            <p id="v">Sistema operacional</p>
                            <input type="text" id="b" />
                            <p id="v">Processador</p>
                            <input type="text" id="b" />
                            <p id="v">Memória</p>
                            <input type="text" id="b" />
                            <p id="v">Armazenamento</p>
                            <input type="text" id="b" />
                            <p id="v">DirectX</p>
                            <input type="text" id="b" />
                            <p id="v">Placa de vídeo</p>
                            <input type="text" id="b" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}