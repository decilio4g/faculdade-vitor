import { useAuth } from '../../Auth/useAuth'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>

            <button onClick={() => auth.signout(() => navigate("/login"))}>
                sair
            </button>
        </div>
    )
}