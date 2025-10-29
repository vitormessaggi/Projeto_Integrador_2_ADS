import Header from '@/components/Header/Header'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Talismã Imóveis',
  description: 'O imóvel que você procura está aqui!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}