import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = ({title = 'ghozy ikbar fathoni', description = 'personal web'}) => {
  return {
    title: title,
    description: description
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
