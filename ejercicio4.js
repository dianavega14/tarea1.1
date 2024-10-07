const menu = [
    { nombre: "Pizza Margarita", precio: 190, categoria: "Comida Italiana" },
    { nombre: "Sushi", precio: 320, categoria: "Comida Japonesa" },
    { nombre: "Hamburguesa", precio: 250, categoria: "Comida Rápida" },
    { nombre: "Tacos", precio: 180, categoria: "Comida Mexicana" },
    { nombre: "Lasaña", precio: 175, categoria: "Comida Italiana" }
];

const Categoria = "Comida Italiana";
const productosFiltrados = menu.filter(comida => comida.categoria === Categoria);
const nombresFiltrados = productosFiltrados.map(comida => comida.nombre)
const totalFiltrados = productosFiltrados.reduce((total, comida) => total + comida.precio, 0);

console.log("Categoría filtrada:", Categoria);
console.log("Productos filtrados:", nombresFiltrados);
console.log("Precio total de los productos filtrados:", totalFiltrados);