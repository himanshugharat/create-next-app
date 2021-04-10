import Head from 'next/head'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
<>
    <Head>
      <title>Home</title>
    </Head>
   <div > 
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus odio soluta corrupti harum eligendi magnam vitae cupiditate quia dolorum nam nemo quod, adipisci voluptatum ipsam quaerat asperiores dolore ex.</p>
     <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus odio soluta corrupti harum eligendi magnam vitae cupiditate quia dolorum nam nemo quod, adipisci voluptatum ipsam quaerat asperiores dolore ex.</p>
   <Link href="/page"><a  className={styles.btn}>list</a></Link>
  
   </div>
   </>
  )
}
