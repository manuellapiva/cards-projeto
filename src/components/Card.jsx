import styles from './Card.module.css'

const cores = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#ffc4d8', '#f5c207', '#11119c']

function Card ({ code, titulo, texto, tipo, dica }) {
    const corDaBarra = cores[tipo % cores.length]

    return (
        <div className={styles.card}>
            <div className={styles.barra} style={{backgroundColor: corDaBarra}}/>

            <p className={styles.titulo}>{titulo}</p>

            <div className={styles.texto}>{texto}</div>

            <span className={styles.code}>{code}</span>

            <div className={styles.dica}>{dica}</div>
        </div>
    )
}

export default Card