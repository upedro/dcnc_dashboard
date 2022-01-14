import { useAuth } from "../../auth/useAuth"
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedLayout = ({children}:{children:JSX.Element}) => {
    const auth = useAuth()
    console.log('protected')
    console.log('auth.user',auth.email)

    if (!auth.email){
        console.log('redirecionado para login')
        return <Navigate to="/login" />
    }

    return children ;
}