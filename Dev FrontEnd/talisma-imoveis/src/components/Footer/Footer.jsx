import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import LogoWhite from '../../assets/images/Logo-White.svg'

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <Image
            src={LogoWhite}
            alt="Talismã Imóveis"
            className={styles.footerLogo}
            width={180}
            height={50}
          />
        </div>

        <div className={styles.footerColumn}>
          <h4>CONTATO</h4>
          <p>11 9999-9999</p>
          <p>contato@talismaimoveis.com</p>
        </div>

        <div className={styles.footerColumn}>
          <h4>INFORMAÇÕES</h4>
          <ul>
            <li><Link href="/imoveis">Imóveis</Link></li>
            <li><a href="#">Seguros</a></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/termos">Termos e Condições</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>ENDEREÇO</h4>
          <p>
            R. Paulo Nunes Félix, 534 - Parque Sao Rafael<br />São Paulo - SP
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Talismá Imovêis - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}