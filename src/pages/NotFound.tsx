
export function NotFound(){

    return(
        <div className="w-screen h-screen  flex justify-center items-center">
            <div className="flez flex-col">
                <h1 className="text-gray-100 font-semibold text-2xl mb-10">Op's! Essa página não existe. 😢</h1>

                <a href="/" className="text-green-100 font-semibold text-center hover:text-green-200 transition ease-linear ">Clique aqui para voltar</a>
            </div>
          
        </div>
    )
}