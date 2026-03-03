import './estilo.css'

interface Card {
  titulo:       string,
  texto:        string,
  tecnologias:  string[],
  link:         string,
  icone:        string,
  cor:          string
}

let listaDeCards: Card[] = [
  {titulo: "Chromium", texto: "rojeto de navegador de codigo aberto que serve de base para o Google Chrome e outro navegadores modenos.", tecnologias: ["Java", "Web", "C++"], link: "https://www.chromium.org", icone: "", cor: "#B6D5FF"},
  {titulo: "Ubuntu", texto: "Distribuição Linux baseada em Debian, voltada para usabilidade, segurança e atualização frequente.", tecnologias: ["C", "Python", "Bash"], link: "https://www.ubunto.org", icone: "", cor: "#F6C29D"},
]


let cards = document.querySelector<HTMLDivElement>('#cards')!
cards.innerHTML = listaDeCards.map(c => `
              <div class="card">
                    <div class="card-image background-azul" style=background-color: #${c.cor}>
                        <img src="${c.icone}" alt="logotipo do ${c.titulo}">
                    </div>
                    <div>
                        <h2>${c.titulo}</h2>
                        <p>${c.texto}</p>
                        <div class="tag-container">
                          ${c.tecnologias.map (t => `<span class="tag">${t}</span>`).join('') }
                        </div>
                            <a href="${c.link}" class="btn-ver-projeto">Ver projeto</a>
                    </div>
              </div>
   `).join('')

