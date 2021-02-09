import Head from 'next/head'
import MainContent from '../components/mainContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <MainContent />
    </div>
  )
}
