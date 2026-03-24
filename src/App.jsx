//App.jsx dados vem e o map rola
import Card from './components/Card'
import './App.css'
import i1 from "./assets/img/1.png"
import i2 from "./assets/img/2.png"
import i3 from "./assets/img/3.png"

const cards = [
  { id: 1, type: 1, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: i1, tip:"💡Antes de começar o React domine JavaScript moderno."},

  { id: 2, type: 1, titulo: 'O que é Vite', texto: 'Vite é um automatizador de projetos web focado na velocidade,oferecendo servidor que atualiza intanteniamente,usado por React.', code: i2, tip:"💡Automatizador de projetos focado na VELOCIDADE!"},

  { id: 3, type: 1, titulo: 'React+Vite', texto: '1.Crie o Projeto 2.Entre na pasta 3.Intale as bibliotecas(npm install) 4.Inicie o sevidor(npm run dev) 5.Acesse o link mostrado no terminal.', code: i3, tip:"💡Crie componentes pequenos para deixar seu código organizado e fácil de arrumar."},
]

function App() {
  return (
    <>
    <div className="container">
      <h1>Cards de Estudo</h1>
      <p className='subtitulo'>Veja os cards a seguir para entender um pouco mais sobre React e Vite</p>
    <div className="grid">
      {cards.map((item) => (
        <Card
          key={item.type}
          id={item.id}
          titulo={item.titulo}
          texto={item.texto}
          tipo={item.type}
          code={item.code && <img src={item.code} alt={item.titulo}></img>}
          dica={item.tip}
        />
      ))}
    </div>
    </div>
    </>
  )
}

export default App
