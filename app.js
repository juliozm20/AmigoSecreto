let listaAmigos = document.querySelector("#listaAmigos");
let inputAmigo = document.querySelector("#amigo");
let amigos = [];
let resultado = document.querySelector("#resultado");

function agregarAmigo() {
  let amigo = inputAmigo.value;

  if (amigo.trim() != "") {
    if (!amigos.includes(amigo)) {
      amigos.push(amigo);
      inputAmigo.value = "";
      return enlistarAmigo(amigo);
    } else {
      alert("Este nombre ya existe en la lista");
    }
  } else {
    alert("Porfavor inserte un nombre");
  }
  inputAmigo.value = "";
}

function enlistarAmigo(amigo) {
  let li = document.createElement("li");
  li.innerText = amigo;
  listaAmigos.appendChild(li);
}

function sortearAmigo() {
  let amigoRandom = Math.floor(Math.random() * amigos.length);
  if (!amigos.length) {
    alert("no hay amigos para sortear");
  } else {
    resultado.innerHTML = `<li>el amigo secreto es: ${amigos[amigoRandom]}</li>`;
  }
}
