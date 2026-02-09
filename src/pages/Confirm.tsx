import { Navigate, useLocation } from "react-router"
import okSvg from "../assets/ok.svg"

export function Confirm(){
    const location = useLocation()

    if(!location.state?.fromSubmit){
        return <Navigate to="/" />
    }
    return(
        <div className="bg-gray-500 lg:w-[512px] rounded-xl p-10 flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold text-center text-green-100">Solicitação enviada!</h1>
            <img src={okSvg} alt="ìcone de OK" className="w-28" />
            <p className="text-sm text-gray-200 text-center">Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o setor financeiro irá entrar em  contato com você.</p>

            <a href="/" className="w-full text-center h-12 p-3 bg-green-100 text-white rounded-lg hover:bg-green-200 transition ease-linear">Nova solicitação</a>
        </div>
    )
}
    