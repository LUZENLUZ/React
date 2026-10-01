function OutraLista ({ itens }) {

    return (
        <div>
        <h3>lista de coisas boas</h3>
        {itens.length > 0 ? (

        itens.map((item, index) =>(

            <p key={index}>{item}</p>
        
        ))) : (
            <p> nao há itens</p>

        )}
    </div>
    )
}

export default OutraLista