import { Poppins } from 'next/font/google'
import Nav from './componets/Nav'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Basic Next.js',
  description: 'Testing Next.js',
  keywords: 'web development, web design, javascript, react, node, html, css',
}

export default function layout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Nav />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
