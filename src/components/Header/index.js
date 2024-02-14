import HeaderLink from 'components/HeaderLink';
import styles from './Header.module.css'

export default function Header ()
{
  return (
    <header className={styles.header}>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./Favorites">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}