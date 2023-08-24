import styles from './home.module.css'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          placeholder="Digite o simbolo da moeda: BTC..."
        />
        <button type="submit">
          <BiSearch size={30} color="#FFF" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <Link to="/detail/btc">
                <span className={styles.link}>Bitcoin</span> | BTC
              </Link>
            </td>
            <td className={styles.tdLabel} data-label="Mercado">
              R$ 19293
            </td>
            <td className={styles.tdLabel} data-label="Preço">
              R$ 40.962
            </td>
            <td className={styles.tdProfit} data-label="Volume">
              <span>-5.3</span>
            </td>

          </tr>
        </tbody>

      </table>


    </main>
  )
}