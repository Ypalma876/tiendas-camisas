
import { useState } from 'react';
export default function App() {
  const productos = [
    { id: 1, nombre: 'Geométrico Moderno', precio: 18 },
    { id: 2, nombre: 'Floral Tropical', precio: 20 },
    { id: 3, nombre: 'Minimal Negro', precio: 16 }
  ];
  const [producto,setProducto]=useState(null);
  const pagar=async()=>{
    await fetch('http://localhost:4000/pedido',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({producto,metodoPago:'tarjeta',estado:'pagado'})});
    alert('Pedido enviado');
  };
  return (<div><h1>Tienda</h1>{productos.map(p=>(<button key={p.id} onClick={()=>setProducto(p)}>{p.nombre}</button>))}{producto&&<button onClick={pagar}>Pagar</button>}</div>);
}
