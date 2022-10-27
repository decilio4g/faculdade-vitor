import './styles.css'


export function Register() {
    return (
        <div class="container">
            <div class="box">
                <div class="tgr">
                    <div class="logo">
                        <img src="https://logodownload.org/wp-content/uploads/2020/10/epic-games-logo-2.png" alt="/" />
                    </div>
                    <div class="text1">
                        <p> <strong>FAZER CADASTRO DE UMA CONTA EPIC GAMES</strong> </p>
                    </div>
                    <div class="cadastro">
                        <div id="nome">
                            <input type="text" title="Nome*" placeholder="Nome" />
                        </div>
                        <div id="sobrenome">
                            <input type="text" title="" placeholder="Sobrenome" />
                        </div>
                        <div id="nome-de-exibicao">
                            <input type="text" title="Nome de exibição" placeholder="Nome de exibição" />
                        </div>
                        <div id="data">
                            <input type="text" title="Idade" placeholder="Idade" />
                        </div>
                        <div id="telefone">
                            <input type="tel" title="Telefone" placeholder="Telefone" />
                        </div>
                        <div id="email">
                            <input type="text" title="Endereço de E-mail" placeholder="Endereço de E-mail" />
                        </div>
                        <div id="password">
                            <input type="password" title="Senha" placeholder="Senha" />
                        </div>
                        <div id="confirmar">
                            <input type="password" title="Confirmar Senha" placeholder="Confirmar Senha" />
                        </div>
                        <div class="li-e-concordo">
                            <div id="certify">
                                <input type="checkbox" />
                            </div>
                            <div id="li">
                                <p>Li e concordo com os termos e condições</p>
                            </div>
                        </div>
                        <div class="noticia">
                            <div id="certify-2">
                                <input type="checkbox" />
                            </div>
                            <div id="noticias">
                                <p>Quero receber noticias por e-mail</p>
                            </div>
                        </div>
                        <div class="allbonus">
                            <div id="enter">
                                <a href="epicgames.html"><strong>CADASTRAR</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}