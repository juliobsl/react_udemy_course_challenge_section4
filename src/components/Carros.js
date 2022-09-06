import styles from './Carros.module.css';

const Carros = ({brand,km,color,newCar}) => {
  return (
    <div className={styles.card}>
        <h3 className={styles.title}>Detalhes</h3>
        <ul>
            <li className={styles.brand}>{brand}</li>
            <li>{color}</li>
            <li className={styles.smalltext}>{km}</li>
            <li className={styles.smalltext+" "+(newCar ? styles.new_car : styles.not_new_car)}>
                {newCar ? "Carro Novo" : "Usado"}
            </li>

        </ul>
        
    </div>
  )
}

export default Carros