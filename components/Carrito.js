const Carrito = () => {
    const [contador, setContador] = React.useState(0);

    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);

    return(
        <div>
            <h1 className={contador < 0 ? "menor" : "mayor"} >Carrito: {contador} </h1>
            <hr />

            <button onClick={aumentar}>Agregar</button>
            <button onClick={disminuir}>Eliminar</button>
        </div>
    );
};