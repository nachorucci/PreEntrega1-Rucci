import { useState } from "react"
import './Vista.css';

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);
    const cambiarModo = ()=>{
        setModoOscuro (!modoOscuro);
    }
    const estilo = modoOscuro ? "oscuro" : "claro";
  return (
    <div className={estilo}>
        <button onClick={cambiarModo}>cambiar modo</button>
        <h3>Productos</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo.</p>
    </div>
  )
}
export default Vista
