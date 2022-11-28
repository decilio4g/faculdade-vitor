
import {
    Outlet,
    useNavigate
} from "react-router-dom";
import { useAuth } from '../Auth/useAuth'

export function Layout() {
    return (
        <div>
            <AuthStatus />
            <Outlet />
        </div>
    );
}

function AuthStatus() {
    let navigate = useNavigate()
    let auth = useAuth();

    if (auth.user) {
        return navigate('/')
    }

}

