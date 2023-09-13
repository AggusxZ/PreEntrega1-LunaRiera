import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav>
      <h3>Tienda de Juegos</h3>
      <div>
        <button>Aventura</button>
        <button>Acción</button>
        <button>Estrategia</button>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar
