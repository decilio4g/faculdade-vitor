import {
    useNavigate, useLocation,
} from 'react-router-dom'

import { useAuth } from '../../Auth/useAuth'

import './style.css'


export function Login() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/login";


    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let email = formData.get("email");

        auth.signin(email, () => {
            navigate(from, { replace: true });
        });
    }

    return (
        <div class="container">
            <form onSubmit={handleSubmit} class="box">
                <div class="tgr">
                    <div class="logo">
                        <img src="https://logodownload.org/wp-content/uploads/2020/10/epic-games-logo-2.png" alt="" />
                    </div>
                    <div class="text1">
                        <p> <strong>FAZER LOGIN COM UMA CONTA DA EPIC GAMES</strong> </p>
                    </div>
                    <div class="login">
                        <div id="email">
                            <input type="text" name="email" title="Endereço de E-mail" placeholder="Endereço de E-mail" />
                        </div>
                        {/* <div id="password">
                            <input type="password" title="Senha" placeholder="Senha" />
                        </div> */}
                        <div class="lembrar">
                            <div id="certify">
                                <input type="checkbox" />
                            </div>
                            <div id="remember">
                                <p>Lembrar de mim</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="allbonus">
                    <div id="enter">
                        <button
                            type="submit"><strong>ENTRE NA SUA CONTA AGORA</strong></button>
                    </div>
                    <div id="bonus"

                        onClick={() => navigate('/register')}>
                        <p>Não tem uma conta da Epic Games?</p>Cadastrar
                    </div>
                </div>
            </form>
        </div >
    );
}