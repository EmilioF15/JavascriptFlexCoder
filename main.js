class Carrito {
  static contadorArticulos = 0;
  static TotalCarrito = 0;

  constructor() {
    this.articulos = [];
  }
  agregarArtciculoCarrito(articulo) {
    this.articulos.push(articulo);
    Carrito.contadorArticulos++;
    this.calcularTotalCarrito();
    console.log(
      `Se ha agregado el articulo ${articulo.nombre} al carrito, 
      el total es ahora ${Carrito.TotalCarrito} y tiene ${Carrito.contadorArticulos} Articulos Dentro`
    );
  }
  eliminarArticuloCarrito(articulo) {
    this.articulos = this.articulos.filter((art) => art !== articulo);
    Carrito.contadorArticulos--;
    this.calcularTotalCarrito();
    console.log(
      `Se ha eliminado el articulo ${articulo.nombre} al carrito, 
      el total es ahora ${Carrito.TotalCarrito} y tiene ${Carrito.contadorArticulos} Articulos Dentro`
    );
  }
  calcularTotalCarrito() {
    Carrito.TotalCarrito = this.articulos.reduce(
      (acc, el) => acc + el.precio,
      0
    );
    console.log(`El total del carrito es ${Carrito.TotalCarrito}`);
  }
}

const obtenerCategorias = fetch("https://dummyjson.com/products/categories")
  .then((res) => res.json())
  .then(console.log);

const obtenerProductos = fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then(console.log);

const carrito = new Carrito();
console.log("inicio pruebas de Carrito");

carrito.agregarArtciculoCarrito({ nombre: "Camisa", precio: 100 });
carrito.agregarArtciculoCarrito({ nombre: "Pantalon", precio: 150 });
carrito.eliminarArticuloCarrito({ nombre: "Camisa", precio: 100 });
console.log(Carrito);

console.log(carrito);
console.log(obtenerProductos);
console.log(obtenerCategorias);
