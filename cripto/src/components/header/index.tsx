import { Link } from 'react-router-dom'
import logoimg from '../../assets/logo.svg'

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoimg} alt="Logo DevCurrency" />
        </Link>
      </div>
    </header>
  )
}