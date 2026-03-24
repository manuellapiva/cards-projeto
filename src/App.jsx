//App.jsx dados vem e o map rola
import Card from './components/Card'
import './App.css'
import i1 from "./assets/img/1.png"
import i2 from "./assets/img/2.png"
import i3 from "./assets/img/3.png"
import i4 from "./assets/img/4.png"
import i5 from "./assets/img/5.png"
import i6 from "./assets/img/6.png"
import i7 from "./assets/img/7.png"
import i8 from "./assets/img/8.png"
import i9 from "./assets/img/9.png"
import i10 from "./assets/img/10.png"
import i11 from "./assets/img/11.png"
import i12 from "./assets/img/12.png"
import i13 from "./assets/img/13.png"
import i14 from "./assets/img/14.png"
import i15 from "./assets/img/15.png"
import i16 from "./assets/img/16.png"
import i17 from "./assets/img/17.png"
import i18 from "./assets/img/18.png"
import i19 from "./assets/img/19.png"
import i20 from "./assets/img/20.png"
import i21 from "./assets/img/21.png"
import i22 from "./assets/img/22.png"
import i23 from "./assets/img/23.png"
import i24 from "./assets/img/24.png"

const cards = [
  { id: 1, type: 1, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: i1, tip:"💡Antes de começar o React domine JavaScript moderno."},

  { id: 2, type: 1, titulo: 'O que é Vite', texto: 'Vite é um automatizador de projetos web focado na velocidade,oferecendo servidor que atualiza intanteniamente,usado por React.', code: i2, tip:"💡Automatizador de projetos focado na VELOCIDADE!"},

  { id: 3, type: 1, titulo: 'React+Vite', texto: '1.Crie o Projeto 2.Entre na pasta 3.Intale as bibliotecas(npm install) 4.Inicie o sevidor(npm run dev) 5.Acesse o link mostrado no terminal.', code: i3, tip:"💡Crie componentes pequenos para deixar seu código organizado e fácil de arrumar."},

  { id: 4, type: 1, titulo: 'Estrutura de pastas', texto: 'A estrutura de pastas é um ponto importante para o projeto, que deve seguir no mínimo essa organização para funcionar certo, mantendo um padrão organizacional.', code: i4, tip:"💡Siga a estrutua para uma boa organização padrão!"},

  { id: 5, type: 1, titulo: 'Main.jsx', texto: 'É o ponto de entrada principal em projeto, a estrutura mais comum e atualizada do main.jsx  foca em três partes: as importações, a seleção do elemento HTML e a renderização.', code: i5, tip:"💡Mantenha o seu main.jsx limpo"},

  { id: 6, type: 1, titulo: 'App.jsx', texto: 'É o componente raiz principal em projetos React, servindo como o ponto de entrada central para a interface do usuário.', code: i6, tip:"💡Use o App.jsx apenas para organizar seus componentes principais, evitando lógica complexa nele."},
  
  { id: 7, type: 2, titulo: 'O que é JSX', texto: 'É uma extensão de sintaxe para JavaScript, usada principalmente com o React para descrever interfaces de usuário (UI) de forma semelhante ao HTML. Ela facilita a criação de componentes, permitindo escrever estrutura e lógica no mesmo arquivo.', code: i7, tip:"💡 O JSX não é uma String. Você nunca deve usar aspas para envolver o bloco de código JSX."},
  
  { id: 8, type: 2, titulo: 'Diferença entre HTML e JSX', texto: 'A principal diferença entre HTML e JSX é que o HTML é uma linguagem de marcação padrão para criar páginas web, enquanto o JSX é uma extensão de sintaxe para o JavaScript, usada principalmente pelo React para descrever como a interface deve ser.', code: i8, tip:"💡 O JSX é Case-Sensitive (Diferencia Maiúsculas de Minúsculas)."},
  
  { id: 9, type: 2, titulo: 'Expressões dentro do JSX', texto: 'Expressões dentro do JSX no React permitem incorporar JavaScript dinâmico usando chaves {}. Elas podem incluir variáveis, operadores matemáticos, chamadas de funções, ternários e manipulação de arrays diretamente no HTML, desde que retornem um valor.', code: i9, tip:"💡 O JSX só aceita expressões que retornam um valor."},
  
  { id: 10, type: 2, titulo: 'Fragments', texto: 'Os JSX Fragments (Fragmentos) são uma funcionalidade do React que permite agrupar uma lista de elementos filhos sem adicionar um nó extra (como uma <div>) ao DOM do navegador.',  code: i10, tip:"💡 Use-os para manter seu HTML sem lixo e não quebrar o seu CSS Layout. "},
  
  { id: 11, type: 2, titulo: 'Classes CSS no JSX', texto: 'No JSX (usado no React), a maneira correta de adicionar classes CSS a um elemento é utilizando o atributo className em vez de class. Isso ocorre porque class é uma palavra-chave reservada no JavaScript.', code: i11, tip:"💡 Cuidado com a palavra class"},

  { id: 12, type: 3, titulo: 'O que são componentes', texto: 'Componentes são unidades modulares, independentes e reutilizáveis de código que encapsulam funcionalidades específicas.', code: i12, tip:"💡 Não precisa saber como o código foi escrito por dentro, apenas quais são as entradas e saídas (a interface)."},
  
  { id: 13, type: 3, titulo: 'Criando um componente funcional', texto: 'Um componente funcional em React é uma função JavaScript que retorna JSX.', code: i13, tip:"💡 Deve se comportar como uma função matemática: para a mesma entrada (props), ele deve gerar sempre a mesma saída (interface)."},
  
  { id: 14, type: 3, titulo: 'Reutilização de componentes', texto: 'A reutilização de componentes é uma prática fundamental, que visa   evitar a duplicação de código. Seu objetivo é desenvolver códigos que poderão ser reutilizados em outras aplicações.', code: i14, tip:"💡 Dê nomes baseados na função, não na posição."},
  
  { id: 15, type: 3, titulo: 'Organização de componentes em pastas', texto: 'Deve seguir uma estrutura modular, agrupando arquivos por funcionalidade ou tipos, para garantir fácil manutenção.', code: i15, tip:"💡 Índice de Exportação (index.js).Use um arquivo index.js dentro da pasta do componente para atuar como um porteiro."},
  
  { id: 16, type: 4, titulo: 'O que são props', texto: 'Props são mecanismos para passar dados de um componente pai para um componente filho. Elas funcionam como argumentos de funções, tornando os componentes flexíveis, reutilizáveis e somente leitura. ', code: i16, tip:"💡As props permitem personalizar componentes com diferentes textos, estilos ou funções no código."},

  { id: 17, type: 4, titulo: 'Passando props para componentes', texto: 'Para passar uma prop para um componente, você a adiciona ao componente filho como se fosse um atributo HTML. No componente filho, você recebe as props como um parâmetro da função e pode usá-las dentro do JSX.  ', code: i17, tip:"💡Quando um componente recebe muitas props relacionadas, considere agrupar elas em um objeto. Isso reduz o número de props e torna o código mais organizado."},

  { id: 18, type: 4, titulo: 'Props com valores padrão', texto: 'São valores pré-definidos que um componente React utiliza automaticamente quando uma prop não é fornecida pelo componente pai. Quando você cria um componente, pode definir que determinadas props tenham um valor padrão. ', code: i18, tip:"💡Se quem usa o componente não passar um valor específico para aquela prop, o componente utiliza automaticamente o valor padrão definido. Se um valor for fornecido, ele substitui o padrão."},
  
  { id: 19, type: 4, titulo: 'Desestruturação de props', texto: 'A desestruturação de props no React é uma técnica ES6 que extrai propriedades específicas de um objeto props diretamente para variáveis nomeadas na definição da função do componente. ', code: i19, tip:"💡Isso melhora a legibilidade, reduz repetições (evitando props.nome toda vez) e simplifica o código. "},

  { id: 20, type: 5, titulo: 'O que é useEffect', texto: 'O useEffect é um Hook do React para gerenciar efeitos colaterais (APIs, DOM, timers). Ele executa após a renderização e seu comportamento depende do array de dependências.', code: i20, tip:"💡 Sempre use o array de dependências [] para evitar execuções infinitas. Array vazio [] roda uma vez (montagem), com variáveis [data] roda quando elas mudam, e sem array roda a cada"},

  { id: 21, type: 5, titulo: 'Ciclo básico do react', texto: 'Baseia-se na criação de componentes funcionais que retornam JSX, o ciclo envolve criação e inserção na tela, mudança de estado ou props e remoção da tela, gerenciado pelo Hook useEffect e gerenciamento de estado com useState.', code: i21, tip:"💡 Retornar uma função dentro do useEffect permite limpar subscrições ou timers, evitando vazamentos de memória"},

  { id: 22, type: 5, titulo: 'Dependencias do useEffect', texto: 'O array de dependências do useEffect controla quando o efeito é executado. Se omitido, roda a cada renderização. Se vazio, roda apenas uma vez na montagem do componente. Se contém valores, roda sempre que esses valores mudarem. ', code: i22, tip:"💡 Nunca atualize o estado (setState) dentro de um useEffect sem uma lista de dependências bem definida, ou o efeito rodará sem parar, pois a atualização gera nova renderização."},

  { id: 23, type: 5, titulo: 'Comunicação entre componentes', texto: 'A comunicação pai para filho em frameworks modernos como Angular e Vue é feita principalmente através de propriedades (Props ou @Input()), onde o pai envia dados diretamente para o filho.', code: i23, tip:"💡 O componente pai envia dados diretos para o filho. É ideal para passar configurações ou dados de exibição."},

  { id: 24, type: 6, titulo: "Renderização Condicional", texto: 'Permite exibir componentes ou elementos apenas quando certas condições são atendidas, utilizando operadores lógicos como && ou ternários.', code: i24, tip:"💡 Use o operador && quando quiser renderizar algo apenas se a condição for verdadeira."},
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
