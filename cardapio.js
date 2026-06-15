const itensCardapio = [
  { nome: "X-Burguer", preco: 18.90, categoria: "Lanches", destaque: false },
  { nome: "X-Bacon", preco: 21.90, categoria: "Lanches", destaque: true },
  { nome: "Combo Familia", preco: 45.90, categoria: "Combos", destaque: true },
  { nome: "Milkshake 500ml", preco: 10.90, categoria: "Bebidas", destaque: false }
];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function renderizarCardapio() {
  const lista = document.querySelector(".lista-cardapio");

  if (!lista) {
    return;
  }

  lista.innerHTML = itensCardapio.map((item) => `
    <article class="item-cardapio${item.destaque ? " destaque" : ""}">
      <h3>${item.nome}</h3>
      <p>${formatarPreco(item.preco)}</p>
      <small>${item.categoria}</small>
      <button type="button">Pedir</button>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderizarCardapio);
