//App.jsx dados vem e o map rola
import Card from './components/Card'
import './App.css'
import i1 from "./assets/img/1.png"

const cards = [
  { id: 1, type: 1, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: i1, tip:"💡Antes de começar o React domine JavaScript moderno."},
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
