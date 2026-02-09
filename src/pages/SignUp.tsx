import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [name, setName] = useState("")

    function onSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log(name, email, password, passwordConfirm)
    }
    return(
       <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input required legend="Nome"
            placeholder="Seu nome"
            onChange={(e)=> setName(e.target.value)}
            />

            <Input required legend="E-mail"
             type="email" placeholder="seu@email.com" 
             
             onChange={(e)=> setEmail(e.target.value) }
             />

            <Input required legend="Senha" 
            type="password" placeholder="123456"
            onChange={(e) => setPassword(e.target.value)}
            />

            <Input required legend="Confirmação da Senha" 
            type="password" placeholder="123456"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            <Button isLoading={isLoading} type="submit">Cadastrar</Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta </a>
       </form>
    )
}
