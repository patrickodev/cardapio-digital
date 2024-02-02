export function Navegacao(props){
    return <div className="navegacao">
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPagina(0)}/>
            <label htmlFor="pagina-0">Pratos principais</label>
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPagina(1)}/>
            <label htmlFor="pagina-1">Sobremesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPagina(2)}/>
            <label htmlFor="pagina-2">Bebidas</label>
        </div>
    
}