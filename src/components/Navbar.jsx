import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">首页</Link>
      <Link className={styles.link} to="/about">关于</Link>
    </nav>
  )
}

export default Navbar
