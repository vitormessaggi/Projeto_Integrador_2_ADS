import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import Logo from '../../assets/images/Logo-Red.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentHeader}>
        <Link href="/">
          <Image
            className={styles.logoImage}
            src={Logo}
            alt="Logo da imobiliária"
            width={150}
            height={40} 
            priority
          />
        </Link>
        <nav className={styles.navbar}>
          <Link className={styles.link} href="/">Início</Link>
          <Link className={styles.link} href="/imoveis">Imóveis</Link>
          <Link className={styles.link} href="/sobre">Sobre nós</Link>
          <Link className={styles.link} href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}