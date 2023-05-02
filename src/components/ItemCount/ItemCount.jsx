import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const incrementar = ()=>{
        if (contador < maximoStock){
            setContador(contador + 1);
        }
    }
    const decrementar = ()=>{
        if (contador > minimoStock){
            setContador (contador - 1);
        }
    }
    let maximoStock = 10;
    let minimoStock = 0;
  return (
    <div>
      <button onClick={incrementar}> + </button>
      <p> {contador} </p>
      <button onClick={decrementar}> - </button>
    </div>
  )
}

export default ItemCount
