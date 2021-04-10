import Head from 'next/head'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
     <Navbar/>
     <h1>homepage</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus odio soluta corrupti harum eligendi magnam vitae cupiditate quia dolorum nam nemo quod, adipisci voluptatum ipsam quaerat asperiores dolore ex.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus odio soluta corrupti harum eligendi magnam vitae cupiditate quia dolorum nam nemo quod, adipisci voluptatum ipsam quaerat asperiores dolore ex.</p>
   <Link href="/page"><a>list</a></Link>
   <Footer/>
   </div>
  )
}
